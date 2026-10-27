import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-51").setDescription("Apply Groove 51 equalizer preset"),
  async execute(interaction, client) { return execute("fx-51", interaction, client); }
};
