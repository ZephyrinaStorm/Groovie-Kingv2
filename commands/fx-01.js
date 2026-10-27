import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-01").setDescription("Apply Groove 01 equalizer preset"),
  async execute(interaction, client) { return execute("fx-01", interaction, client); }
};
