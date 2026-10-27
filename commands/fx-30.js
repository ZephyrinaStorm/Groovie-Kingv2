import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-30").setDescription("Apply Groove 30 equalizer preset"),
  async execute(interaction, client) { return execute("fx-30", interaction, client); }
};
