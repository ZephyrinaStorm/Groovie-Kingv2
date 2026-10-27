import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-09").setDescription("Apply Groove 09 equalizer preset"),
  async execute(interaction, client) { return execute("fx-09", interaction, client); }
};
