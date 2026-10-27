import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-78").setDescription("Apply Groove 78 equalizer preset"),
  async execute(interaction, client) { return execute("fx-78", interaction, client); }
};
