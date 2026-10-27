import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-43").setDescription("Apply Groove 43 equalizer preset"),
  async execute(interaction, client) { return execute("fx-43", interaction, client); }
};
