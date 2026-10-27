import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-58").setDescription("Apply Groove 58 equalizer preset"),
  async execute(interaction, client) { return execute("fx-58", interaction, client); }
};
