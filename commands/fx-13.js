import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-13").setDescription("Apply Groove 13 equalizer preset"),
  async execute(interaction, client) { return execute("fx-13", interaction, client); }
};
