import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-69").setDescription("Apply Groove 69 equalizer preset"),
  async execute(interaction, client) { return execute("fx-69", interaction, client); }
};
