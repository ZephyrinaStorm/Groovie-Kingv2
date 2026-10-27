import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-33").setDescription("Apply Groove 33 equalizer preset"),
  async execute(interaction, client) { return execute("fx-33", interaction, client); }
};
