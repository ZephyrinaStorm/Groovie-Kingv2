import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-37").setDescription("Apply Groove 37 equalizer preset"),
  async execute(interaction, client) { return execute("fx-37", interaction, client); }
};
