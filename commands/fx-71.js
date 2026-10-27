import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-71").setDescription("Apply Groove 71 equalizer preset"),
  async execute(interaction, client) { return execute("fx-71", interaction, client); }
};
