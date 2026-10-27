import 'dotenv/config';
import {Client,GatewayIntentBits,Collection,REST,Routes,Events,EmbedBuilder,MessageFlags} from 'discord.js';
import {LavalinkManager} from 'lavalink-client';
import {readdir} from 'node:fs/promises';
import {fileURLToPath,pathToFileURL} from 'node:url';
import path from 'node:path';
import {presetNames} from './lib/filters.js';
const env=(...keys)=>keys.map(k=>process.env[k]).find(Boolean);
const token=env('DISCORD_TOKEN','BOT_TOKEN','TOKEN');
const clientId=env('DISCORD_CLIENT_ID','CLIENT_ID','APPLICATION_ID');
const hostInput=env('LAVALINK_HOST','NODE_HOST','LAVALINK_URL','NODE_URL');
const password=env('LAVALINK_PASSWORD','NODE_PASSWORD');
if(!token||!clientId||!hostInput||!password) throw Error('Set Discord token, client ID, Lavalink host and password in Render Environment.');
const url=new URL(hostInput.includes('://')?hostInput:'wss://'+hostInput);
const host=url.hostname; const port=Number(env('LAVALINK_PORT','NODE_PORT')||url.port|| (url.protocol==='wss:'?443:2333));
const secure=(env('LAVALINK_SECURE','NODE_SECURE')||String(url.protocol==='wss:')).toLowerCase()==='true';
const client=new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildVoiceStates]});
client.commands=new Collection();
client.lavalink=new LavalinkManager({nodes:[{id:'groovie-node',host,port,authorization:password,secure}],sendToShard:(guildId,payload)=>client.guilds.cache.get(guildId)?.shard.send(payload),client:{id:clientId,username:'Groovie King'},autoSkip:true});
const dir=path.join(path.dirname(fileURLToPath(import.meta.url)),'commands');
const definitions=[];
for(const file of (await readdir(dir)).filter(f=>f.endsWith('.js')).sort()){
 const cmd=(await import(pathToFileURL(path.join(dir,file)).href)).default;
 if(!cmd?.data?.toJSON||typeof cmd.execute!=='function')throw Error('Invalid command: '+file);
 const data=cmd.data.toJSON();if(client.commands.has(data.name))throw Error('Duplicate command '+data.name);
 client.commands.set(data.name,cmd);definitions.push(data);
}
if(definitions.length!==100)throw Error('Expected 100 slash commands, got '+definitions.length);
// One-page help: all 100 live registered commands, no pagination or outdated registry.
function helpPanel(){
 const cmds=[...client.commands.values()].map(c=>c.data.toJSON()).sort((a,b)=>a.name.localeCompare(b.name));
 const embed=new EmbedBuilder().setColor(0x15d9ef)
  .setTitle('🎧 Groovie King · All Commands')
  .setDescription(`**${cmds.length} slash commands** · All commands on one page.\nType a command to see its options.`)
  .setFooter({text:'Groovie King · Feel the Beat'});
 // Five compact columns of 20 commands, within Discord's 1024-character field limit.
 for(let start=0;start<cmds.length;start+=20){
  const batch=cmds.slice(start,start+20);
  embed.addFields({name:`Commands ${start+1}–${start+batch.length}`,value:batch.map(c=>'`/'+c.name+'`').join(' · '),inline:false});
 }
 return {embeds:[embed]};
}
client.showHelp=async i=>i.reply(helpPanel());
client.once(Events.ClientReady,async()=>{
 console.log('Groovie King ready as '+client.user.tag);
 try {await client.lavalink.init({id:client.user.id,username:client.user.username});}catch(e){console.error('Lavalink initialization:',e);}
 if((env('REGISTER_COMMANDS')||'true').toLowerCase()!=='false'){
  try{const rest=new REST({version:'10'}).setToken(token);const guild=env('DISCORD_GUILD_ID','GUILD_ID');const route=guild?Routes.applicationGuildCommands(clientId,guild):Routes.applicationCommands(clientId);await rest.put(route,{body:definitions});console.log(`Registered ${definitions.length} commands (${guild?'guild':'global'}).`);}catch(e){console.error('Command registration failed:',e);}
 }
});
client.on('raw',packet=>client.lavalink.sendRawData(packet));
client.on(Events.InteractionCreate,async i=>{
 try{
  if(i.isAutocomplete()&&i.commandName==='preset'){
   const q=i.options.getFocused().toLowerCase();return i.respond(presetNames.filter(x=>x.includes(q)).slice(0,25).map(x=>({name:x,value:x})));
  }
  if(!i.isChatInputCommand())return;
  if(!i.inGuild()&&i.commandName!=='help')return i.reply({content:'Use music commands in a server.',flags:MessageFlags.Ephemeral});
  const cmd=client.commands.get(i.commandName);if(!cmd)return;
  const result=await cmd.execute(i,client);
  if(result!==undefined){if(i.deferred)await i.editReply({content:String(result)});else if(!i.replied)await i.reply({content:String(result)});}
 }catch(e){console.error('Interaction failed:',e);const content='❌ '+(e.message||'Command failed.');try{if(i.deferred)await i.editReply({content});else if(i.replied)await i.followUp({content,flags:MessageFlags.Ephemeral});else await i.reply({content,flags:MessageFlags.Ephemeral});}catch(err){console.error('Reply failed:',err);}}
});
client.on('error',console.error);process.on('unhandledRejection',console.error);
await client.login(token);
