import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-62").setDescription("Apply Groove 62 equalizer preset"),
  async execute(interaction, client) { return execute("fx-62", interaction, client); }
};
