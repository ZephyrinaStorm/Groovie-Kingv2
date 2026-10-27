import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-16").setDescription("Apply Groove 16 equalizer preset"),
  async execute(interaction, client) { return execute("fx-16", interaction, client); }
};
