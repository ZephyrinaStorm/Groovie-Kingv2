import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-60").setDescription("Apply Groove 60 equalizer preset"),
  async execute(interaction, client) { return execute("fx-60", interaction, client); }
};
