import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("search").setDescription("Search tracks using your Lavalink sources");
data.addStringOption(o=>o.setName('query').setDescription('Query value').setRequired(true));
export default {data,execute:(interaction,client)=>run("search",interaction,client)};
