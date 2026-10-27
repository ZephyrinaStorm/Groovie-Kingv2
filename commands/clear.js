import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Queue",
  data: new SlashCommandBuilder().setName("clear").setDescription("Clear upcoming tracks"),
  async execute(interaction, client) { return execute("clear", interaction, client); }
};
