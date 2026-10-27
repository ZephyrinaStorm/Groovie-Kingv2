
import { playerFor, voiceCheck, title } from './music.js';

const getPlayer = (interaction, client) =>
  playerFor(interaction, client);

const getPosition = (interaction, player) => {
  const position = interaction.options.getInteger('position', true);
  if (position < 1 || position > player.queue.tracks.length) {
    throw new Error('That queue position does not exist.');
  }
  return position - 1;
};

export async function execute(name, interaction, client) {
  if (name === 'help') {
    return client.showHelp(interaction);
  }

  if (name === 'ping') {
    const nodes = [...client.lavalink.nodeManager.nodes.values()];
    return `🏓 Discord latency: ${client.ws.ping}ms · Lavalink nodes: ${nodes.length}`;
  }

  if (name === 'play') {
    const channel = voiceCheck(interaction);
    const query = interaction.options.getString('query', true);

    let player = client.lavalink.getPlayer(interaction.guildId);

    if (player && player.voiceChannelId !== channel.id) {
      throw new Error('Join the same voice channel as the bot.');
    }

    if (!player) {
      player = client.lavalink.createPlayer({
        guildId: interaction.guildId,
        voiceChannelId: channel.id,
        textChannelId: interaction.channelId,
        selfDeaf: true,
        volume: 80
      });
    }

    await interaction.deferReply();

    if (!player.connected) {
      await player.connect();
    }

    const result = await player.search(
      { query },
      interaction.user
    );

    if (!result.tracks?.length) {
      return '❌ No playable tracks found.';
    }

    await player.queue.add(result.tracks);

    if (!player.playing && !player.paused) {
      await player.play();
    }

    return `🎶 Added ${result.tracks.length} track(s) to the queue.`;
  }

  const player = getPlayer(interaction, client);

  switch (name) {
    case 'pause':
      await player.pause();
      return '⏸️ Music paused.';

    case 'resume':
      await player.resume();
      return '▶️ Music resumed.';

    case 'skip':
      await player.skip();
      return '⏭️ Skipped the current track.';

    case 'stop':
      await player.queue.splice(
        0,
        player.queue.tracks.length
      );
      await player.stopPlaying();
      return '⏹️ Playback stopped and queue cleared.';

    case 'leave':
      await player.destroy();
      return '👋 Disconnected from voice.';

    case 'nowplaying':
      return player.queue.current
        ? `🎵 Now playing: ${title(player.queue.current)}`
        : 'Nothing is playing.';

    case 'queue': {
      const tracks = player.queue.tracks.slice(0, 15);

      return tracks.length
        ? tracks.map((track, index) =>
            `${index + 1}. ${title(track)}`
          ).join('\n')
        : 'The queue is empty.';
    }

    case 'volume': {
      const level = interaction.options.getInteger('level', true);
      await player.setVolume(level);
      return `🔊 Volume set to ${level}%.`;
    }

    case 'shuffle':
      await player.queue.shuffle();
      return '🔀 Queue shuffled.';

    case 'clear':
      await player.queue.splice(
        0,
        player.queue.tracks.length
      );
      return '🧹 Queue cleared.';

    case 'remove': {
      const index = getPosition(interaction, player);
      await player.queue.splice(index, 1);
      return `🗑️ Removed track ${index + 1}.`;
    }

    case 'jump': {
      const index = getPosition(interaction, player);

      if (index > 0) {
        await player.queue.splice(0, index);
      }

      await player.skip();
      return `⏭️ Jumped to queue position ${index + 1}.`;
    }

    case 'loop': {
      const mode = interaction.options.getString('mode', true);
      await player.setRepeatMode(mode);
      return `🔁 Repeat mode: ${mode}.`;
    }

    case 'seek': {
      const seconds = interaction.options.getInteger('seconds', true);

      if (player.queue.current?.info?.isStream) {
        throw new Error('Cannot seek a live stream.');
      }

      await player.seek(seconds * 1000);
      return `⏩ Seeked to ${seconds} seconds.`;
    }

    case 'replay':
      await player.seek(0);
      return '🔂 Replaying the current song.';

    case 'resetfilters':
      if (!player.filterManager?.resetFilters) {
        throw new Error('Audio filter reset is unavailable.');
      }

      await player.filterManager.resetFilters();
      return '🎚️ Audio filters reset.';

    default:
      throw new Error(`Unknown command: ${name}`);
  }
}
