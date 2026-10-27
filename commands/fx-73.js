import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-73").setDescription("Apply Groove 73 equalizer preset"),
  async execute(interaction, client) { return execute("fx-73", interaction, client); }
};
