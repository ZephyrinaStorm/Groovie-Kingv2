import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Music",
  data: new SlashCommandBuilder().setName("volume").setDescription("Set playback volume").addIntegerOption(o=>o.setName('level').setDescription('Volume 0-150').setMinValue(0).setMaxValue(150).setRequired(true)),
  async execute(interaction, client) { return execute("volume", interaction, client); }
};
