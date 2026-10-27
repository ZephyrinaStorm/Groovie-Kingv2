import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-68").setDescription("Apply Groove 68 equalizer preset"),
  async execute(interaction, client) { return execute("fx-68", interaction, client); }
};
