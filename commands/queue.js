import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Queue",
  data: new SlashCommandBuilder().setName("queue").setDescription("Show upcoming tracks"),
  async execute(interaction, client) { return execute("queue", interaction, client); }
};
