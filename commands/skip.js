import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Music",
  data: new SlashCommandBuilder().setName("skip").setDescription("Skip current track"),
  async execute(interaction, client) { return execute("skip", interaction, client); }
};
