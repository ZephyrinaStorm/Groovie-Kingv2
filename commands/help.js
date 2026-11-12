
import {
  SlashCommandBuilder,
  EmbedBuilder
} from 'discord.js';

const data = new SlashCommandBuilder()
  .setName('help')
  .setDescription('View all music commands and learn how to use Groove King');

const categories = [
  {
    title: '▶️ Playback',
    description: 'Play, pause, skip, and control your music.',
    names: [
      'play', 'playnext', 'playnow', 'addurl',
      'playspotify', 'playsoundcloud', 'playapple',
      'playdeezer', 'playbandcamp', 'playradio',
      'playyoutube', 'pause', 'resume', 'skip',
      'stop', 'leave', 'join', 'disconnect',
      'replay', 'restart', 'seek', 'setposition',
      'rewind', 'forward', 'speed', 'normal-speed',
      'mute', 'unmute', 'pauseall', 'resumeall',
      'skipmultiple'
    ]
  },
  {
    title: '📋 Queue Management',
    description: 'Organize songs waiting to play.',
    names: [
      'queue', 'queuepage', 'queuecount',
      'queuefind', 'queuefirst', 'queuelast',
      'queue-duration', 'shuffle', 'remove',
      'remove-range', 'clear', 'jump', 'skipto',
      'move', 'swap', 'reverse', 'dedupe',
      'loop', 'unloop', 'repeatone', 'repeatall',
      'repeatoff'
    ]
  },
  {
    title: '🎛️ Audio Filters',
    description: 'Change how your music sounds.',
    names: [
      '3d', 'nightcore', 'daycore', 'vaporwave',
      'slowed', 'spedup', 'chipmunk', 'deepvoice',
      'helium', 'giant', 'karaoke', 'tremolo',
      'vibrato', 'slowvibrato', 'fastvibrato',
      'pulsing', 'softpulse', 'spinfast',
      'spinslow', 'bassboost', 'superbass',
      'trebleboost', 'midboost', 'basscut',
      'treblecut', 'telephone', 'radio',
      'loudness', 'flat', 'resetvoice',
      'resetfilters', 'filterlist'
    ]
  },
  {
    title: '🎵 Song Information',
    description: 'Find songs and view track details.',
    names: [
      'search', 'songinfo', 'songlink',
      'duration', 'requester', 'artwork',
      'nowplaying', 'lyrics', 'history',
      'recommend', 'related', 'playlist'
    ]
  },
  {
    title: '⚙️ Settings',
    description: 'Customize playback and server preferences.',
    names: [
      'volume', 'setvolume', 'defaultvolume',
      'maxvolume', 'autoplay', 'autoplayoff',
      'settings', 'config', 'djrole',
      '247', 'prefix'
    ]
  },
  {
    title: 'ℹ️ Information',
    description: 'Learn more about the bot and its status.',
    names: [
      'help', 'ping', 'botinfo', 'nodeinfo',
      'stats', 'invite', 'uptime', 'support'
    ]
  }
];

const explanations = {
  play: 'Play a song or playlist',
  pause: 'Pause the music',
  resume: 'Continue playing',
  skip: 'Skip the current song',
  stop: 'Stop the music',
  leave: 'Disconnect from voice',
  queue: 'View upcoming songs',
  shuffle: 'Mix up the queue',
  clear: 'Remove queued songs',
  loop: 'Repeat songs or the queue',
  nowplaying: 'See the current song',
  search: 'Search for music',
  volume: 'Change the volume',
  nightcore: 'Faster, higher-pitched music',
  daycore: 'Slower, lower-pitched music',
  bassboost: 'Increase the bass',
  '3d': 'Make music sound like it is rotating',
  karaoke: 'Reduce centered vocals',
  resetvoice: 'Remove audio effects',
  resetfilters: 'Reset audio filters',
  filterlist: 'View available audio effects',
  ping: 'Check Discord latency',
  nodeinfo: 'Check Lavalink connections',
  botinfo: 'View bot information'
};

function buildHelp(client) {
  const available = [...client.commands.values()];
  const byName = new Map(
    available.map(command => [
      command.data.name,
      command
    ])
  );

  const used = new Set();

  const embed = new EmbedBuilder()
    .setColor(0xFF6B8A)
    .setTitle('🎵 Groove King — Help Center')
    .setDescription(
      '**Welcome to Groove King!**\n' +
      'Play your favorite music, manage your queue, ' +
      'and customize the sound.\n\n' +
      '**🚀 Quick Start**\n' +
      '1. Join a Discord voice channel.\n' +
      '2. Type `/play` and enter a song or URL.\n' +
      '3. Use `/queue` to see upcoming songs.\n' +
      '4. Try `/nightcore` or `/bassboost` for effects.\n\n' +
      '*Type `/` in Discord to see command options.*'
    );

  for (const category of categories) {
    const commands = category.names.filter(name => {
      if (!byName.has(name) || used.has(name)) return false;
      used.add(name);
      return true;
    });

    if (!commands.length) continue;

    const lines = commands.map(name => {
      const command = byName.get(name);
      const description =
        explanations[name] ||
        command.data.description ||
        'Music command';

      return `\`/${name}\` — ${description}`;
    });

    // Discord embed fields are limited to 1024 characters.
    let chunk = '';
    let part = 1;

    for (const line of lines) {
      if (chunk && chunk.length + line.length + 1 > 1024) {
        embed.addFields({
          name: part === 1
            ? category.title
            : `${category.title} (continued)`,
          value: chunk,
          inline: false
        });
        chunk = '';
        part++;
      }
      chunk += (chunk ? '\n' : '') + line;
    }

    if (chunk) {
      embed.addFields({
        name: part === 1
          ? category.title
          : `${category.title} (continued)`,
        value: chunk,
        inline: false
      });
    }
  }

  const other = available.filter(command =>
    !used.has(command.data.name)
  );

  if (other.length) {
    embed.addFields({
      name: '✨ More Commands',
      value: other.map(command =>
        `\`/${command.data.name}\``
      ).join(' · ').slice(0, 1024),
      inline: false
    });
  }

  embed.setFooter({
    text: `${available.length} available slash commands • Groove King`
  });

  return embed;
}

export default {
  data,

  async execute(interaction, client) {
    const embed = buildHelp(client);

    await interaction.reply({
      embeds: [embed]
    });
  }
};
