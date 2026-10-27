import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-21").setDescription("Apply Groove 21 equalizer preset"),
  async execute(interaction, client) { return execute("fx-21", interaction, client); }
};
