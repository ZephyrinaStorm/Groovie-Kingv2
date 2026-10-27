import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-79").setDescription("Apply Groove 79 equalizer preset"),
  async execute(interaction, client) { return execute("fx-79", interaction, client); }
};
