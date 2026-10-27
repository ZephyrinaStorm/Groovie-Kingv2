import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Utilities",
  data: new SlashCommandBuilder().setName("ping").setDescription("Show bot and node connectivity"),
  async execute(interaction, client) { return execute("ping", interaction, client); }
};
