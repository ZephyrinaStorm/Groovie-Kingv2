import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-05").setDescription("Apply Groove 05 equalizer preset"),
  async execute(interaction, client) { return execute("fx-05", interaction, client); }
};
