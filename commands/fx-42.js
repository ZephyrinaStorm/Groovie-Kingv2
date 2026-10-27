import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-42").setDescription("Apply Groove 42 equalizer preset"),
  async execute(interaction, client) { return execute("fx-42", interaction, client); }
};
