import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-52").setDescription("Apply Groove 52 equalizer preset"),
  async execute(interaction, client) { return execute("fx-52", interaction, client); }
};
