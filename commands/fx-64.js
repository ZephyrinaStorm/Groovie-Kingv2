import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-64").setDescription("Apply Groove 64 equalizer preset"),
  async execute(interaction, client) { return execute("fx-64", interaction, client); }
};
