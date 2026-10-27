import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-10").setDescription("Apply Groove 10 equalizer preset"),
  async execute(interaction, client) { return execute("fx-10", interaction, client); }
};
