import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-80").setDescription("Apply Groove 80 equalizer preset"),
  async execute(interaction, client) { return execute("fx-80", interaction, client); }
};
