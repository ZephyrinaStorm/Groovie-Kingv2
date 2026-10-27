import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Queue",
  data: new SlashCommandBuilder().setName("shuffle").setDescription("Shuffle upcoming tracks"),
  async execute(interaction, client) { return execute("shuffle", interaction, client); }
};
