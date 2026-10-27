import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-44").setDescription("Apply Groove 44 equalizer preset"),
  async execute(interaction, client) { return execute("fx-44", interaction, client); }
};
