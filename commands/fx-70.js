import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-70").setDescription("Apply Groove 70 equalizer preset"),
  async execute(interaction, client) { return execute("fx-70", interaction, client); }
};
