import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-18").setDescription("Apply Groove 18 equalizer preset"),
  async execute(interaction, client) { return execute("fx-18", interaction, client); }
};
