import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-40").setDescription("Apply Groove 40 equalizer preset"),
  async execute(interaction, client) { return execute("fx-40", interaction, client); }
};
