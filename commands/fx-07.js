import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-07").setDescription("Apply Groove 07 equalizer preset"),
  async execute(interaction, client) { return execute("fx-07", interaction, client); }
};
