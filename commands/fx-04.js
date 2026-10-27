import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-04").setDescription("Apply Groove 04 equalizer preset"),
  async execute(interaction, client) { return execute("fx-04", interaction, client); }
};
