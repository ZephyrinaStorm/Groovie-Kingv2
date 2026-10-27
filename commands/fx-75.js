import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-75").setDescription("Apply Groove 75 equalizer preset"),
  async execute(interaction, client) { return execute("fx-75", interaction, client); }
};
