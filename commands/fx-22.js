import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-22").setDescription("Apply Groove 22 equalizer preset"),
  async execute(interaction, client) { return execute("fx-22", interaction, client); }
};
