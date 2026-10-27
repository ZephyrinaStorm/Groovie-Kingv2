import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-66").setDescription("Apply Groove 66 equalizer preset"),
  async execute(interaction, client) { return execute("fx-66", interaction, client); }
};
