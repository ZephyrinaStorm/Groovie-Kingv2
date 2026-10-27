import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-26").setDescription("Apply Groove 26 equalizer preset"),
  async execute(interaction, client) { return execute("fx-26", interaction, client); }
};
