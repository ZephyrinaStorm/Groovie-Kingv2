import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Music",
  data: new SlashCommandBuilder().setName("stop").setDescription("Stop playback and clear queue"),
  async execute(interaction, client) { return execute("stop", interaction, client); }
};
