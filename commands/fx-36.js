import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-36").setDescription("Apply Groove 36 equalizer preset"),
  async execute(interaction, client) { return execute("fx-36", interaction, client); }
};
