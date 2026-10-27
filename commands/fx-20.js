import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-20").setDescription("Apply Groove 20 equalizer preset"),
  async execute(interaction, client) { return execute("fx-20", interaction, client); }
};
