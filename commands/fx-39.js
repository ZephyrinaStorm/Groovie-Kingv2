import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-39").setDescription("Apply Groove 39 equalizer preset"),
  async execute(interaction, client) { return execute("fx-39", interaction, client); }
};
