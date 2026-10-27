import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-19").setDescription("Apply Groove 19 equalizer preset"),
  async execute(interaction, client) { return execute("fx-19", interaction, client); }
};
