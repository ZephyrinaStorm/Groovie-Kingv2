import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("loop").setDescription("Set repeat mode");
data.addStringOption(o=>o.setName('mode').setDescription('Mode value').setRequired(true).addChoices({name:'Off',value:'off'},{name:'Track',value:'track'},{name:'Queue',value:'queue'}));
export default {data,execute:(interaction,client)=>run("loop",interaction,client)};
