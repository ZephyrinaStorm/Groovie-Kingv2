import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-27").setDescription("Apply Groove 27 equalizer preset"),
  async execute(interaction, client) { return execute("fx-27", interaction, client); }
};
