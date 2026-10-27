export function voiceCheck(interaction, player = null) {
  const channel = interaction.member?.voice?.channel;
  if (!channel) throw Error('Join a voice channel first.');
  if (player && player.voiceChannelId !== channel.id) throw Error('Join my voice channel to control playback.');
  return channel;
}
export function playerFor(interaction, client) {
  const player = client.lavalink.getPlayer(interaction.guildId);
  if (!player) throw Error('Nothing is playing. Use /play first.');
  voiceCheck(interaction, player);
  return player;
}
export async function respond(interaction, content) {
  if (interaction.deferred) return interaction.editReply({content});
  if (interaction.replied) return interaction.followUp({content, ephemeral:true});
  return interaction.reply({content});
}
export function title(track) {return track?.info?.title || track?.title || 'Unknown track';}
