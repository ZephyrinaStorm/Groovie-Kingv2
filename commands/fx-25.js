import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-25").setDescription("Apply Groove 25 equalizer preset"),
  async execute(interaction, client) { return execute("fx-25", interaction, client); }
};
