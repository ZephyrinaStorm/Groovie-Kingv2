import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-17").setDescription("Apply Groove 17 equalizer preset"),
  async execute(interaction, client) { return execute("fx-17", interaction, client); }
};
