import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Queue",
  data: new SlashCommandBuilder().setName("remove").setDescription("Remove a queued track").addIntegerOption(o=>o.setName('position').setDescription('Queue position starting at 1').setMinValue(1).setRequired(true)),
  async execute(interaction, client) { return execute("remove", interaction, client); }
};
