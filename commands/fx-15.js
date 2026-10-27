import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-15").setDescription("Apply Groove 15 equalizer preset"),
  async execute(interaction, client) { return execute("fx-15", interaction, client); }
};
