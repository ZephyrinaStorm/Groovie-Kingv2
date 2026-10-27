import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-67").setDescription("Apply Groove 67 equalizer preset"),
  async execute(interaction, client) { return execute("fx-67", interaction, client); }
};
