import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-63").setDescription("Apply Groove 63 equalizer preset"),
  async execute(interaction, client) { return execute("fx-63", interaction, client); }
};
