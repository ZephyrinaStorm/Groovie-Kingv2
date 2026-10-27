import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("preset").setDescription("Apply one of 90 audio presets").addStringOption(o=>o.setName('name').setDescription('Preset name, fx-01 through fx-90').setRequired(true).setAutocomplete(true)),
  async execute(interaction, client) { return execute("preset", interaction, client); }
};
