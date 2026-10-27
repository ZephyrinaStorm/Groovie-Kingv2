import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-38").setDescription("Apply Groove 38 equalizer preset"),
  async execute(interaction, client) { return execute("fx-38", interaction, client); }
};
