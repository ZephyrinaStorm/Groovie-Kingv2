import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-61").setDescription("Apply Groove 61 equalizer preset"),
  async execute(interaction, client) { return execute("fx-61", interaction, client); }
};
