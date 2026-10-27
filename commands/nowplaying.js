import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Music",
  data: new SlashCommandBuilder().setName("nowplaying").setDescription("Show the current song"),
  async execute(interaction, client) { return execute("nowplaying", interaction, client); }
};
