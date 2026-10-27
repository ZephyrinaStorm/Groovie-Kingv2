import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-31").setDescription("Apply Groove 31 equalizer preset"),
  async execute(interaction, client) { return execute("fx-31", interaction, client); }
};
