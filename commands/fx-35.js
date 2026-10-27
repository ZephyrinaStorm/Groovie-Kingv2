import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-35").setDescription("Apply Groove 35 equalizer preset"),
  async execute(interaction, client) { return execute("fx-35", interaction, client); }
};
