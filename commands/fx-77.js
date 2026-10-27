import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-77").setDescription("Apply Groove 77 equalizer preset"),
  async execute(interaction, client) { return execute("fx-77", interaction, client); }
};
