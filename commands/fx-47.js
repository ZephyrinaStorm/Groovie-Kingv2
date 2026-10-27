import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-47").setDescription("Apply Groove 47 equalizer preset"),
  async execute(interaction, client) { return execute("fx-47", interaction, client); }
};
