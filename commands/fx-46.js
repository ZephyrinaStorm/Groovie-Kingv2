import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-46").setDescription("Apply Groove 46 equalizer preset"),
  async execute(interaction, client) { return execute("fx-46", interaction, client); }
};
