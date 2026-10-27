import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Music",
  data: new SlashCommandBuilder().setName("play").setDescription("Play a song or audio URL").addStringOption(o=>o.setName('query').setDescription('Song title or supported URL').setRequired(true)),
  async execute(interaction, client) { return execute("play", interaction, client); }
};
