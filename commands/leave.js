import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Music",
  data: new SlashCommandBuilder().setName("leave").setDescription("Disconnect from voice"),
  async execute(interaction, client) { return execute("leave", interaction, client); }
};
