import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-59").setDescription("Apply Groove 59 equalizer preset"),
  async execute(interaction, client) { return execute("fx-59", interaction, client); }
};
