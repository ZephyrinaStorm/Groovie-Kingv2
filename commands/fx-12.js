import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-12").setDescription("Apply Groove 12 equalizer preset"),
  async execute(interaction, client) { return execute("fx-12", interaction, client); }
};
