import presets from './presets.json' with {type:'json'};
import {playerFor} from './music.js';
export const presetNames = Object.keys(presets);
export async function applyPreset(interaction, client, name) {
  const player = playerFor(interaction, client);
  const preset = presets[name];
  if (!preset) throw Error('Unknown audio preset.');
  if (!player.filterManager?.setEQ) throw Error('Your Lavalink client does not expose equalizer filters.');
  await player.filterManager.setEQ(preset.equalizer);
  return `🎛️ Applied **${preset.label}**.`;
}
