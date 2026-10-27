import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Music",
  data: new SlashCommandBuilder().setName("seek").setDescription("Seek to a position").addIntegerOption(o=>o.setName('seconds').setDescription('Position in seconds').setMinValue(0).setRequired(true)),
  async execute(interaction, client) { return execute("seek", interaction, client); }
};
