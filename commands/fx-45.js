import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-45").setDescription("Apply Groove 45 equalizer preset"),
  async execute(interaction, client) { return execute("fx-45", interaction, client); }
};
