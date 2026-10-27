import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-34").setDescription("Apply Groove 34 equalizer preset"),
  async execute(interaction, client) { return execute("fx-34", interaction, client); }
};
