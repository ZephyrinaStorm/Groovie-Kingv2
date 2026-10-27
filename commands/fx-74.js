import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-74").setDescription("Apply Groove 74 equalizer preset"),
  async execute(interaction, client) { return execute("fx-74", interaction, client); }
};
