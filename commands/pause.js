import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Music",
  data: new SlashCommandBuilder().setName("pause").setDescription("Pause playback"),
  async execute(interaction, client) { return execute("pause", interaction, client); }
};
