import {playerFor, voiceCheck, title} from './music.js';

export async function execute(name, interaction, client) {
  if (name === 'help') return client.showHelp(interaction);
  if (name === 'ping') {
    const nodes = [...client.lavalink.nodeManager.nodes.values()];
    return `🏓 Discord latency: ${client.ws.ping}ms · Lavalink nodes: ${nodes.length}`;
  }
  if (name === 'play') {
    const channel = voiceCheck(interaction);
    const query = interaction.options.getString('query', true);
    let player = client.lavalink.getPlayer(interaction.guildId);
    if (player && player.voiceChannelId !== channel.id)
      throw Error('Join the same voice channel as the bot.');
    if (!player) player = client.lavalink.createPlayer({
      guildId:interaction.guildId, voiceChannelId:channel.id,
      textChannelId:interaction.channelId, selfDeaf:true, volume:80
    });
    await interaction.deferReply();
    if (!player.connected) await player.connect();
    const result = await player.search({query},interaction.user);
    if (!result.tracks?.length) return '❌ No playable tracks found.';
    await player.queue.add(result.tracks);
    if (!player.playing && !player.paused) await player.play();
    return `🎶 Added ${result.tracks.length} track(s).`;
  }
  const player = playerFor(interaction,client);
  const q = player.queue.tracks;
  switch(name) {
    case 'pause': await player.pause(); return '⏸️ Paused.';
    case 'resume': await player.resume(); return '▶️ Resumed.';
    case 'skip': await player.skip(); return '⏭️ Skipped.';
    case 'stop':
      await player.queue.splice(0,q.length);
      await player.stopPlaying();
      return '⏹️ Stopped and cleared queue.';
    case 'leave': await player.destroy(); return '👋 Disconnected.';
    case 'queue':
      return q.length?q.slice(0,15).map((t,i)=>`${i+1}. ${title(t)}`).join('\n'):'Queue is empty.';
    case 'nowplaying':
      return player.queue.current?`🎵 ${title(player.queue.current)}`:'Nothing playing.';
    case 'volume': {
      const level=interaction.options.getInteger('level',true);
      await player.setVolume(level);
      return `🔊 Volume ${level}%.`;
    }
    case 'loop': {
      const mode=interaction.options.getString('mode',true);
      await player.setRepeatMode(mode);
      return `🔁 Repeat: ${mode}.`;
    }
    case 'shuffle': await player.queue.shuffle(); return '🔀 Shuffled.';
    case 'remove': {
      const pos=interaction.options.getInteger('position',true)-1;
      if(pos<0||pos>=q.length)throw Error('Invalid queue position.');
      await player.queue.splice(pos,1);
      return `🗑️ Removed position ${pos+1}.`;
    }
    case 'clear': await player.queue.splice(0,q.length); return '🧹 Queue cleared.';
    case 'jump': {
      const pos=interaction.options.getInteger('position',true)-1;
      if(pos<0||pos>=q.length)throw Error('Invalid queue position.');
      if(pos>0)await player.queue.splice(0,pos);
      await player.skip();
      return `⏭️ Jumped to position ${pos+1}.`;
    }
    case 'seek': {
      const seconds=interaction.options.getInteger('seconds',true);
      if(player.queue.current?.info?.isStream)throw Error('Cannot seek a live stream.');
      await player.seek(seconds*1000);
      return `⏩ Position: ${seconds}s.`;
    }
    case 'replay': await player.seek(0); return '🔂 Replaying.';
    case 'resetfilters':
      if(typeof player.filterManager?.resetFilters!=='function')
        throw Error('Filter reset unavailable.');
      await player.filterManager.resetFilters();
      return '🎚️ Filters reset.';
    default: throw Error(`Unknown command: ${name}`);
  }
}
