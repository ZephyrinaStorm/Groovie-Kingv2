import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-24").setDescription("Apply Groove 24 equalizer preset"),
  async execute(interaction, client) { return execute("fx-24", interaction, client); }
};
