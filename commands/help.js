import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Utilities",
  data: new SlashCommandBuilder().setName("help").setDescription("Browse commands and search the help menu"),
  async execute(interaction, client) { return execute("help", interaction, client); }
};
