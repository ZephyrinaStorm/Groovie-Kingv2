import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-14").setDescription("Apply Groove 14 equalizer preset"),
  async execute(interaction, client) { return execute("fx-14", interaction, client); }
};
