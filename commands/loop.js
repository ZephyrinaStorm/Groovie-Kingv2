import { SlashCommandBuilder } from 'discord.js';
import { execute } from '../lib/actions.js';
export default {
  category: "Queue",
  data: new SlashCommandBuilder().setName("loop").setDescription("Set repeat mode").addStringOption(o=>o.setName('mode').setDescription('Repeat mode').setRequired(true).addChoices({name:'Off',value:'off'},{name:'Track',value:'track'},{name:'Queue',value:'queue'})),
  async execute(interaction, client) { return execute("loop", interaction, client); }
};
