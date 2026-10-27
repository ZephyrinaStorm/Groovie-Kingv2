import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-72").setDescription("Apply Groove 72 equalizer preset"),
  async execute(interaction, client) { return execute("fx-72", interaction, client); }
};
