import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Filters",
  data: new SlashCommandBuilder().setName("resetfilters").setDescription("Reset all audio filters"),
  async execute(interaction, client) { return execute("resetfilters", interaction, client); }
};
