import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Music",
  data: new SlashCommandBuilder().setName("resume").setDescription("Resume playback"),
  async execute(interaction, client) { return execute("resume", interaction, client); }
};
