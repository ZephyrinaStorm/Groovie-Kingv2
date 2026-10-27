import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-55").setDescription("Apply Groove 55 equalizer preset"),
  async execute(interaction, client) { return execute("fx-55", interaction, client); }
};
