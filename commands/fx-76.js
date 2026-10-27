import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-76").setDescription("Apply Groove 76 equalizer preset"),
  async execute(interaction, client) { return execute("fx-76", interaction, client); }
};
