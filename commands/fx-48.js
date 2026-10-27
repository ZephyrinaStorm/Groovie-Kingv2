import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-48").setDescription("Apply Groove 48 equalizer preset"),
  async execute(interaction, client) { return execute("fx-48", interaction, client); }
};
