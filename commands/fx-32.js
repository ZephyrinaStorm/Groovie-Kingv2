import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-32").setDescription("Apply Groove 32 equalizer preset"),
  async execute(interaction, client) { return execute("fx-32", interaction, client); }
};
