import {playerFor,voiceCheck,title} from './music.js';
import {applyPreset} from './filters.js';
export async function execute(name, interaction, client) {
 if (name.startsWith('fx-')) return applyPreset(interaction,client,name);
 if (name==='help') return client.showHelp(interaction);
 if (name==='ping') {
   const nodes=[...client.lavalink.nodeManager.nodes.values()];
   return `🏓 Discord gateway: ${client.ws.ping}ms · Lavalink nodes: ${nodes.length} configured`;
 }
 if (name==='play') {
   const channel=voiceCheck(interaction);
   await interaction.deferReply();
   const query=interaction.options.getString('query',true);
   let player=client.lavalink.getPlayer(interaction.guildId);
   if (player && player.voiceChannelId!==channel.id) throw Error('Join my voice channel first.');
   if (!player) player=client.lavalink.createPlayer({guildId:interaction.guildId,voiceChannelId:channel.id,textChannelId:interaction.channelId,selfDeaf:true,volume:80});
   if (!player.connected) await player.connect();
   const result=await player.search({query},interaction.user);
   if (!result.tracks?.length) return 'No playable tracks found. Check the Lavalink node source plugins.';
   await player.queue.add(result.tracks);
   if (!player.playing && !player.paused) await player.play();
   return `🎶 Queued ${result.tracks.length} track(s).`;
 }
 const player=playerFor(interaction,client);
 switch(name){
  case 'pause': await player.pause(); return '⏸️ Paused.';
  case 'resume': await player.resume(); return '▶️ Resumed.';
  case 'skip': await player.skip(); return '⏭️ Skipped.';
  case 'stop': await player.queue.splice(0,player.queue.tracks.length); await player.stopPlaying(); return '⏹️ Stopped and cleared queue.';
  case 'leave': await player.destroy(); return '👋 Disconnected.';
  case 'queue': {const items=player.queue.tracks.slice(0,15);return items.length?items.map((t,i)=>`${i+1}. ${title(t)}`).join('\n'):'Queue is empty.';}
  case 'nowplaying': return player.queue.current?`🎵 ${title(player.queue.current)}`:'Nothing playing.';
  case 'volume': {const level=interaction.options.getInteger('level',true);await player.setVolume(level);return `🔊 Volume ${level}%.`;}
  case 'loop': {const mode=interaction.options.getString('mode',true);await player.setRepeatMode(mode);return `🔁 Repeat: ${mode}.`;}
  case 'shuffle': await player.queue.shuffle();return '🔀 Queue shuffled.';
  case 'remove': {const index=interaction.options.getInteger('position',true)-1;if(index>=player.queue.tracks.length) throw Error('Position is outside the queue.');const t=await player.queue.splice(index,1);return `🗑️ Removed position ${index+1}.`;}
  case 'clear': await player.queue.splice(0,player.queue.tracks.length);return '🧹 Upcoming tracks cleared.';
  case 'jump': {const index=interaction.options.getInteger('position',true)-1;if(index>=player.queue.tracks.length) throw Error('Position is outside the queue.');if(index>0) await player.queue.splice(0,index);await player.skip();return `⏭️ Jumped to queue position ${index+1}.`;}
  case 'seek': {const seconds=interaction.options.getInteger('seconds',true);if(player.queue.current?.info?.isStream) throw Error('Cannot seek a live stream.');await player.seek(seconds*1000);return `⏩ Seeked to ${seconds}s.`;}
  case 'replay': await player.seek(0);return '🔂 Restarted track.';
  case 'preset': return applyPreset(interaction,client,interaction.options.getString('name',true));
  case 'resetfilters': if(!player.filterManager?.resetFilters) throw Error('Filter reset is unavailable on this Lavalink client.');await player.filterManager.resetFilters();return '🎚️ Filters reset.';
  default: throw Error('Unimplemented command.');
 }
}
