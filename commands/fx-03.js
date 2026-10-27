import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-03").setDescription("Apply Groove 03 equalizer preset"),
  async execute(interaction, client) { return execute("fx-03", interaction, client); }
};
