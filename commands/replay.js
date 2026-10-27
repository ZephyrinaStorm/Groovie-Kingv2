import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Music",
  data: new SlashCommandBuilder().setName("replay").setDescription("Replay the current track"),
  async execute(interaction, client) { return execute("replay", interaction, client); }
};
