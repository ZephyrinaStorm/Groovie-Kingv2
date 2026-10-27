import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-65").setDescription("Apply Groove 65 equalizer preset"),
  async execute(interaction, client) { return execute("fx-65", interaction, client); }
};
