import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("fx-02").setDescription("Apply Groove 02 equalizer preset"),
  async execute(interaction, client) { return execute("fx-02", interaction, client); }
};
