import 'dotenv/config';
import { Client, GatewayIntentBits, Collection, REST, Routes, Events, EmbedBuilder, MessageFlags } from 'discord.js';
import { LavalinkManager } from 'lavalink-client';
import { readdir } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const env = (...keys) => keys.map(key => process.env[key]).find(Boolean);
const token = env('DISCORD_TOKEN', 'BOT_TOKEN', 'TOKEN');
const clientId = env('DISCORD_CLIENT_ID', 'CLIENT_ID', 'APPLICATION_ID');
const hostInput = env('LAVALINK_HOST', 'NODE_HOST', 'LAVALINK_URL', 'NODE_URL');
const password = env('LAVALINK_PASSWORD', 'NODE_PASSWORD');
if (!token || !clientId || !hostInput || !password) {
  throw new Error('Set Discord token, client ID, Lavalink host and password in Render Environment.');
}

const url = new URL(hostInput.includes('://') ? hostInput : `wss://${hostInput}`);
const host = url.hostname;
const port = Number(env('LAVALINK_PORT', 'NODE_PORT') || url.port || (url.protocol === 'wss:' ? 443 : 2333));
const secure = (env('LAVALINK_SECURE', 'NODE_SECURE') || String(url.protocol === 'wss:')).toLowerCase() === 'true';

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });
client.commands = new Collection();
client.lavalink = new LavalinkManager({
  nodes: [{ id: 'groovie-node', host, port, authorization: password, secure }],
  sendToShard: (guildId, payload) => client.guilds.cache.get(guildId)?.shard.send(payload),
  client: { id: clientId, username: 'Groovie King' },
  autoSkip: true
});

const directory = path.join(path.dirname(fileURLToPath(import.meta.url)), 'commands');
const definitions = [];
for (const filename of (await readdir(directory)).filter(name => name.endsWith('.js')).sort()) {
  const command = (await import(pathToFileURL(path.join(directory, filename)).href)).default;
  if (!command?.data?.toJSON || typeof command.execute !== 'function') {
    throw new Error(`Invalid command: ${filename}`);
  }
  const definition = command.data.toJSON();
  if (client.commands.has(definition.name)) throw new Error(`Duplicate command: ${definition.name}`);
  client.commands.set(definition.name, command);
  definitions.push(definition);
}
if (definitions.length !== 100) {
  throw new Error(`Expected 100 slash commands, got ${definitions.length}. Check your commands folder.`);
}

const filterNames = new Set([
  '3d', 'nightcore', 'daycore', 'vaporwave', 'chipmunk', 'deepvoice',
  'karaoke', 'bassboost', 'tremolo', 'vibrato', 'telephone', 'resetvoice',
  'spedup', 'slowed', 'helium', 'giant', 'spinfast', 'spinslow',
  'superbass', 'trebleboost'
]);
const queueNames = new Set([
  'queue', 'shuffle', 'remove', 'clear', 'jump', 'loop', 'move',
  'swap', 'reverse', 'skipto', 'previous', 'queueinfo', 'clearqueue'
]);
const informationNames = new Set(['help', 'ping', 'botinfo', 'invite', 'stats', 'uptime', 'support']);
const configNames = new Set(['settings', 'config', 'setvolume', 'defaultvolume', 'djrole', 'autoplay', '247', 'prefix']);
const songNames = new Set(['lyrics', 'search', 'songinfo', 'history', 'recommend', 'related', 'playlist']);

function categoryFor(name) {
  if (filterNames.has(name)) return '🎛️ Audio Filters';
  if (queueNames.has(name)) return '📋 Queue';
  if (informationNames.has(name)) return 'ℹ️ Information';
  if (configNames.has(name)) return '⚙️ Configuration';
  if (songNames.has(name)) return '🎵 Songs';
  return '▶️ Playback & Other';
}

function helpMessage() {
  const groups = new Map();
  for (const command of definitions) {
    const category = categoryFor(command.name);
    if (!groups.has(category)) groups.set(category, []);
    groups.get(category).push(`\`/${command.name}\``);
  }
  const sections = [...groups.entries()].map(([category, commands]) =>
    `**${category}**\n${commands.join(' · ')}`
  );
  const description = sections.join('\n\n');
  if (description.length <= 4096) {
    return {
      embeds: [new EmbedBuilder()
        .setColor(0x15d9ef)
        .setTitle('🎧 Groovie King — All Commands')
        .setDescription(description)
        .setFooter({ text: `${definitions.length} slash commands • One-page help` })]
    };
  }
  // A single Discord message can hold multiple embeds, while still being one help page.
  const embeds = [];
  let chunk = '';
  for (const section of sections) {
    if (chunk && chunk.length + section.length + 2 > 4096) {
      embeds.push(new EmbedBuilder().setColor(0x15d9ef).setDescription(chunk));
      chunk = '';
    }
    chunk += `${chunk ? '\n\n' : ''}${section}`;
  }
  if (chunk) embeds.push(new EmbedBuilder().setColor(0x15d9ef).setDescription(chunk));
  if (embeds.length > 10) throw new Error('Help menu exceeds Discord embed limits.');
  embeds[0].setTitle('🎧 Groovie King — All Commands');
  embeds.at(-1).setFooter({ text: `${definitions.length} slash commands • One-page help` });
  return { embeds };
}

client.showHelp = async interaction => interaction.reply(helpMessage());

client.once(Events.ClientReady, async () => {
  console.log(`Groovie King ready as ${client.user.tag}`);
  try {
    await client.lavalink.init({ id: client.user.id, username: client.user.username });
  } catch (error) {
    console.error('Lavalink initialization failed:', error);
  }
  if ((env('REGISTER_COMMANDS') || 'true').toLowerCase() !== 'false') {
    try {
      const rest = new REST({ version: '10' }).setToken(token);
      const guild = env('DISCORD_GUILD_ID', 'GUILD_ID');
      const route = guild ? Routes.applicationGuildCommands(clientId, guild) : Routes.applicationCommands(clientId);
      await rest.put(route, { body: definitions });
      console.log(`Registered ${definitions.length} commands (${guild ? 'guild' : 'global'}).`);
    } catch (error) {
      console.error('Command registration failed:', error);
    }
  }
});

client.on('raw', packet => client.lavalink.sendRawData(packet));
client.on(Events.InteractionCreate, async interaction => {
  try {
    if (!interaction.isChatInputCommand()) return;
    if (!interaction.inGuild() && interaction.commandName !== 'help') {
      await interaction.reply({ content: 'Use music commands in a server.', flags: MessageFlags.Ephemeral });
      return;
    }
    const command = client.commands.get(interaction.commandName);
    if (!command) return;
    const result = await command.execute(interaction, client);
    if (result !== undefined) {
      if (interaction.deferred) await interaction.editReply({ content: String(result) });
      else if (!interaction.replied) await interaction.reply({ content: String(result) });
    }
  } catch (error) {
    console.error('Interaction failed:', error);
    const content = `❌ ${error.message || 'Command failed.'}`;
    try {
      if (interaction.deferred) await interaction.editReply({ content });
      else if (interaction.replied) await interaction.followUp({ content, flags: MessageFlags.Ephemeral });
      else await interaction.reply({ content, flags: MessageFlags.Ephemeral });
    } catch (replyError) {
      console.error('Reply failed:', replyError);
    }
  }
});

client.on('error', console.error);
process.on('unhandledRejection', console.error);
await client.login(token);
