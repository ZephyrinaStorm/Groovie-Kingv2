import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-11").setDescription("Apply Groove 11 equalizer preset"),
  async execute(interaction, client) { return execute("fx-11", interaction, client); }
};
