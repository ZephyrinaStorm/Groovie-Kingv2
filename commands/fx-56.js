import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-56").setDescription("Apply Groove 56 equalizer preset"),
  async execute(interaction, client) { return execute("fx-56", interaction, client); }
};
