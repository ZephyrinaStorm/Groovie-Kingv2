import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-29").setDescription("Apply Groove 29 equalizer preset"),
  async execute(interaction, client) { return execute("fx-29", interaction, client); }
};
