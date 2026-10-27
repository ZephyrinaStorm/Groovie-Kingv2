
// Lavalink filter methods are checked at runtime. Each effect changes real DSP parameters.
const voiceFilters = {"3d": {"type": "rotation", "options": {"rotationHz": 0.18}, "label": "3d"}, "nightcore": {"type": "timescale", "options": {"speed": 1.2, "pitch": 1.2, "rate": 1}, "label": "nightcore"}, "daycore": {"type": "timescale", "options": {"speed": 0.85, "pitch": 0.85, "rate": 1}, "label": "daycore"}, "vaporwave": {"type": "timescale", "options": {"speed": 0.8, "pitch": 0.8, "rate": 1}, "label": "vaporwave"}, "slowed": {"type": "timescale", "options": {"speed": 0.8, "pitch": 1, "rate": 1}, "label": "slowed"}, "spedup": {"type": "timescale", "options": {"speed": 1.25, "pitch": 1, "rate": 1}, "label": "spedup"}, "chipmunk": {"type": "timescale", "options": {"speed": 1, "pitch": 1.45, "rate": 1}, "label": "chipmunk"}, "deepvoice": {"type": "timescale", "options": {"speed": 1, "pitch": 0.7, "rate": 1}, "label": "deepvoice"}, "helium": {"type": "timescale", "options": {"speed": 1, "pitch": 1.7, "rate": 1}, "label": "helium"}, "giant": {"type": "timescale", "options": {"speed": 1, "pitch": 0.55, "rate": 1}, "label": "giant"}, "karaoke": {"type": "karaoke", "options": {"level": 1, "monoLevel": 1, "filterBand": 220, "filterWidth": 100}, "label": "karaoke"}, "tremolo": {"type": "tremolo", "options": {"frequency": 4, "depth": 0.65}, "label": "tremolo"}, "vibrato": {"type": "vibrato", "options": {"frequency": 5, "depth": 0.55}, "label": "vibrato"}, "slowvibrato": {"type": "vibrato", "options": {"frequency": 2, "depth": 0.4}, "label": "slowvibrato"}, "fastvibrato": {"type": "vibrato", "options": {"frequency": 9, "depth": 0.75}, "label": "fastvibrato"}, "pulsing": {"type": "tremolo", "options": {"frequency": 9, "depth": 0.8}, "label": "pulsing"}, "softpulse": {"type": "tremolo", "options": {"frequency": 2, "depth": 0.3}, "label": "softpulse"}, "spinfast": {"type": "rotation", "options": {"rotationHz": 0.6}, "label": "spinfast"}, "spinslow": {"type": "rotation", "options": {"rotationHz": 0.06}, "label": "spinslow"}, "bassboost": {"type": "eq", "options": {"kind": "bass", "gain": 0.35}, "label": "bassboost"}, "superbass": {"type": "eq", "options": {"kind": "bass", "gain": 0.6}, "label": "superbass"}, "trebleboost": {"type": "eq", "options": {"kind": "treble", "gain": 0.35}, "label": "trebleboost"}, "midboost": {"type": "eq", "options": {"kind": "mid", "gain": 0.3}, "label": "midboost"}, "basscut": {"type": "eq", "options": {"kind": "bass", "gain": -0.35}, "label": "basscut"}, "treblecut": {"type": "eq", "options": {"kind": "treble", "gain": -0.35}, "label": "treblecut"}, "telephone": {"type": "eq", "options": {"kind": "telephone", "gain": 0}, "label": "telephone"}, "radio": {"type": "eq", "options": {"kind": "radio", "gain": 0}, "label": "radio"}, "loudness": {"type": "eq", "options": {"kind": "loudness", "gain": 0.3}, "label": "loudness"}, "flat": {"type": "eq", "options": {"kind": "flat", "gain": 0}, "label": "flat"}, "resetvoice": {"type": "reset", "options": {}, "label": "resetvoice"}};
const eq = (kind,gain=0)=>Array.from({length:15},(_,band)=>({band,gain:
  kind==='flat'?0:
  kind==='bass'?(band<5?gain*(1-band/6):0):
  kind==='treble'?(band>8?gain*(band-8)/7:0):
  kind==='mid'?(band>=4&&band<=10?gain:0):
  kind==='telephone'?(band<4||band>10?-0.22:0.12):
  kind==='radio'?(band<3||band>12?-0.18:0.08):
  kind==='loudness'?(band<4||band>10?gain:0):0}));
async function applyVoiceFilter(name,i,client){
 const p=playerFor(i,client), f=p.filterManager, spec=voiceFilters[name];
 if(!f)throw Error('Audio filters are unavailable on this Lavalink player.');
 if(spec.type==='reset'){
   if(typeof f.resetFilters!=='function')throw Error('Filter reset is not supported by this Lavalink client.');
   await f.resetFilters();
 }else{
   const methods={rotation:'setRotation',timescale:'setTimescale',karaoke:'setKaraoke',tremolo:'setTremolo',vibrato:'setVibrato',eq:'setEQ'};
   const method=methods[spec.type];
   if(typeof f[method]!=='function')throw Error(`${name} requires ${method} support on your Lavalink client and node.`);
   await f[method](spec.type==='eq'?eq(spec.options.kind,spec.options.gain):spec.options);
 }
 return `🎚️ ${spec.label} filter applied.`;
}

import {execute as legacy} from '../../lib/actions.js';
import {playerFor,voiceCheck,title} from '../../lib/music.js';
const session = new Map();
const state = id => {if(!session.has(id))session.set(id,{volume:80,maximum:150,autoplay:false});return session.get(id)};
const fmt = n => Number.isFinite(n)?`${Math.floor(n/60000)}:${String(Math.floor(n/1000)%60).padStart(2,'0')}`:'unknown';
const list = p => p.queue.tracks;
const nameOf = t => title(t)||t?.info?.title||'Unknown song';
const info = t => t?.info||{};
const current = p => {if(!p.queue.current)throw Error('Nothing is playing.');return p.queue.current};
const at = (p,n) => {if(!Number.isInteger(n)||n<1||n>list(p).length)throw Error('That queue position does not exist.');return n-1};
async function add(interaction,client,{front=false,immediate=false,source=null,urlOnly=false}={}){
 const voice=voiceCheck(interaction); const query=interaction.options.getString('query',true).trim();
 if(urlOnly && !/^https?:\/\//i.test(query))throw Error('Enter a valid http(s) audio URL.');
 if(source && !/^https?:\/\//i.test(query))throw Error(`Paste a ${source} link supported by your Lavalink node.`);
 let p=client.lavalink.getPlayer(interaction.guildId);
 if(p && p.voiceChannelId!==voice.id)throw Error('Join the same voice channel as the bot.');
 if(!p)p=client.lavalink.createPlayer({guildId:interaction.guildId,voiceChannelId:voice.id,textChannelId:interaction.channelId,selfDeaf:true,volume:state(interaction.guildId).volume});
 if(!p.connected)await p.connect();
 await interaction.deferReply();
 const result=await p.search({query},interaction.user);
 if(!result.tracks?.length)return 'No playable tracks found. Check your Lavalink source plugins.';
 if(immediate && p.queue.current){await p.queue.add(result.tracks,0);await p.skip();}
 else await p.queue.add(result.tracks,front?0:undefined);
 if(!p.playing&&!p.paused)await p.play();
 return `🎵 Added ${result.tracks.length} track(s)${front?' to the front':''}.`;
}
async function seek(p,ms){if(info(current(p)).isStream)throw Error('Cannot seek a live stream.');const max=info(current(p)).duration||Infinity;await p.seek(Math.max(0,Math.min(ms,max)));}
async function repeat(p,mode){await p.setRepeatMode(mode);return `🔁 Repeat: ${mode}.`;}
export async function run(name,i,client){
 if(name==='filterlist')return '🎛️ Audio effects: '+Object.keys(voiceFilters).map(n=>'/'+n).join(' · ');
 if(voiceFilters[name])return applyVoiceFilter(name,i,client);
 if(['help','ping','play','pause','resume','skip','stop','leave','volume','seek','replay','loop','shuffle','remove','clear','jump','queue','nowplaying','resetfilters'].includes(name))return legacy(name,i,client);
 const s=state(i.guildId||'dm');
 if(name==='botinfo')return `🎧 ${client.user.username} · ${client.guilds.cache.size} servers · ${client.commands.size} slash commands.`;
 if(name==='nodeinfo'){const ns=[...client.lavalink.nodeManager.nodes.values()];return ns.map(n=>`${n.id}: ${n.connected?'connected':'disconnected'}`).join('\n')||'No Lavalink nodes configured.';}
 if(name==='stats'){const p=client.lavalink.getPlayer(i.guildId);return `Guild player: ${p?'active':'inactive'} · Queue: ${p?.queue?.tracks?.length||0} · Discord latency: ${client.ws.ping}ms.`;}
 if(['playnext','playnow','addurl','playspotify','playsoundcloud','playapple','playdeezer','playbandcamp','playradio','playyoutube'].includes(name))return add(i,client,{front:name==='playnext',immediate:name==='playnow',urlOnly:name==='addurl'||name==='playradio',source:name.startsWith('play')&&!['playnext','playnow'].includes(name)?name.slice(4):null});
 if(name==='search'){const query=i.options.getString('query',true);await i.deferReply();const p=client.lavalink.getPlayer(i.guildId);if(!p)throw Error('Start a player with /play first.');const r=await p.search({query},i.user);return (r.tracks||[]).slice(0,10).map((t,k)=>`${k+1}. ${nameOf(t)}`).join('\n')||'No results.';}
 if(name==='join'){const voice=voiceCheck(i);let p=client.lavalink.getPlayer(i.guildId);if(p&&p.voiceChannelId!==voice.id)throw Error('The player is in another voice channel.');if(!p)p=client.lavalink.createPlayer({guildId:i.guildId,voiceChannelId:voice.id,textChannelId:i.channelId,selfDeaf:true,volume:s.volume});await p.connect();return '🔊 Joined your voice channel.';}
 const p=playerFor(i,client);const q=list(p);
 switch(name){
 case 'unloop':case 'repeatoff':return repeat(p,'off');
 case 'repeatone':return repeat(p,'track');
 case 'repeatall':return repeat(p,'queue');
 case 'restart':await seek(p,0);return '🔁 Restarted song.';
 case 'setposition':await seek(p,i.options.getInteger('seconds',true)*1000);return '⏩ Position updated.';
 case 'rewind':await seek(p,Math.max(0,p.position-i.options.getInteger('seconds',true)*1000));return '⏪ Rewound.';
 case 'forward':await seek(p,p.position+i.options.getInteger('seconds',true)*1000);return '⏩ Fast-forwarded.';
 case 'skipto':{const n=at(p,i.options.getInteger('position',true));if(n)await p.queue.splice(0,n);await p.skip();return '⏭️ Jumped ahead.';}
 case 'skipmultiple':{const n=i.options.getInteger('count',true);if(n>q.length+1)throw Error('Not enough tracks to skip.');if(n>1)await p.queue.splice(0,n-1);await p.skip();return `⏭️ Skipped ${n} track(s).`;}
 case 'mute':{s.volume=p.volume||s.volume;await p.setVolume(0);return '🔇 Muted.';}
 case 'unmute':await p.setVolume(Math.min(s.volume||80,s.maximum));return '🔊 Unmuted.';
 case 'speed':{const rate=i.options.getNumber('rate',true);if(!p.filterManager?.setTimescale)throw Error('Timescale filter is unavailable on this node.');await p.filterManager.setTimescale({speed:rate,rate:1,pitch:1});return `⏩ Speed: ${rate}×.`;}
 case 'normal-speed':{if(!p.filterManager?.setTimescale)throw Error('Timescale filter unavailable.');await p.filterManager.setTimescale({speed:1,rate:1,pitch:1});return '▶️ Normal speed restored.';}
 case 'pauseall':await p.pause();return '⏸️ Playback paused.';
 case 'resumeall':await p.resume();return '▶️ Playback resumed.';
 case 'disconnect':await p.destroy();return '👋 Disconnected.';
 case 'move':{const a=at(p,i.options.getInteger('from',true)),b=at(p,i.options.getInteger('to',true));const [t]=await p.queue.splice(a,1);await p.queue.add(t,b);return `Moved position ${a+1} to ${b+1}.`;}
 case 'swap':{const a=at(p,i.options.getInteger('first',true)),b=at(p,i.options.getInteger('second',true));if(a===b)return 'Both positions are identical.';const t=q[a],u=q[b];await p.queue.splice(Math.max(a,b),1);await p.queue.splice(Math.min(a,b),1);await p.queue.add(a<b?u:t,Math.min(a,b));await p.queue.add(a<b?t:u,Math.max(a,b));return '🔀 Swapped tracks.';}
 case 'reverse':{const copy=[...q].reverse();await p.queue.splice(0,q.length);await p.queue.add(copy);return '↩️ Queue reversed.';}
 case 'queuecount':return `📋 ${q.length} upcoming track(s).`;
 case 'queuepage':{const page=i.options.getInteger('page')||1;const rows=q.slice((page-1)*10,page*10);return rows.length?rows.map((t,k)=>`${(page-1)*10+k+1}. ${nameOf(t)}`).join('\n'):'No tracks on that page.';}
 case 'remove-range':{const a=at(p,i.options.getInteger('from',true)),b=at(p,i.options.getInteger('to',true));if(a>b)throw Error('Start must be before end.');await p.queue.splice(a,b-a+1);return `🗑️ Removed ${b-a+1} tracks.`;}
 case 'dedupe':{const seen=new Set(),drop=[];q.forEach((t,k)=>{const key=info(t).uri||nameOf(t);if(seen.has(key))drop.push(k);else seen.add(key)});for(const k of drop.reverse())await p.queue.splice(k,1);return `🧹 Removed ${drop.length} duplicates.`;}
 case 'queuefind':{const term=i.options.getString('query',true).toLowerCase();const hits=q.map((t,k)=>({t,k})).filter(({t})=>nameOf(t).toLowerCase().includes(term));return hits.slice(0,15).map(({t,k})=>`${k+1}. ${nameOf(t)}`).join('\n')||'No matching tracks.';}
 case 'queuefirst':return q.length?`First: ${nameOf(q[0])}`:'Queue is empty.';
 case 'queuelast':return q.length?`Last: ${nameOf(q[q.length-1])}`:'Queue is empty.';
 case 'queue-duration':return `⏱️ Upcoming tracks: ${fmt(q.reduce((a,t)=>a+(info(t).duration||0),0))} (live streams excluded).`;
 case 'songinfo':{const t=current(p);return `🎵 ${nameOf(t)}\nArtist: ${info(t).author||'Unknown'}\nLength: ${fmt(info(t).duration)}\nSource: ${info(t).sourceName||'Unknown'}`;}
 case 'songlink':return info(current(p)).uri||'No URL available.';
 case 'duration':return `⏱️ ${fmt(info(current(p)).duration)} total · ${fmt(p.position||0)} elapsed.`;
 case 'requester':return `Requested by: ${current(p).requester?.username||current(p).requester?.id||'Unknown'}`;
 case 'artwork':return info(current(p)).artworkUrl||'No artwork URL available.';
 case 'setvolume':{const v=i.options.getInteger('level',true);if(v>s.maximum)throw Error(`Server volume limit is ${s.maximum}.`);await p.setVolume(v);return `🔊 Volume: ${v}%.`;}
 case 'defaultvolume':s.volume=i.options.getInteger('level',true);return `Default volume for this session: ${s.volume}%.`;
 case 'maxvolume':s.maximum=i.options.getInteger('level',true);if(p.volume>s.maximum)await p.setVolume(s.maximum);return `Maximum volume for this session: ${s.maximum}%.`;
 case 'autoplay':{if(typeof p.setAutoPlay!=='function')throw Error('Autoplay is not supported by your Lavalink client.');await p.setAutoPlay(true);s.autoplay=true;return 'Autoplay enabled.';}
 case 'autoplayoff':{if(typeof p.setAutoPlay!=='function')throw Error('Autoplay is not supported by your Lavalink client.');await p.setAutoPlay(false);s.autoplay=false;return 'Autoplay disabled.';}
 default:throw Error(`Command ${name} is not implemented.`);
 }
}
