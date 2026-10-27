import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-28").setDescription("Apply Groove 28 equalizer preset"),
  async execute(interaction, client) { return execute("fx-28", interaction, client); }
};
