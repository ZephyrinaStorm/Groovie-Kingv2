import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-54").setDescription("Apply Groove 54 equalizer preset"),
  async execute(interaction, client) { return execute("fx-54", interaction, client); }
};
