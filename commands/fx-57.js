import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-57").setDescription("Apply Groove 57 equalizer preset"),
  async execute(interaction, client) { return execute("fx-57", interaction, client); }
};
