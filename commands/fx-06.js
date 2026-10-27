import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-06").setDescription("Apply Groove 06 equalizer preset"),
  async execute(interaction, client) { return execute("fx-06", interaction, client); }
};
