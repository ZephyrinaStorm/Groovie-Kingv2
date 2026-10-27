import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-50").setDescription("Apply Groove 50 equalizer preset"),
  async execute(interaction, client) { return execute("fx-50", interaction, client); }
};
