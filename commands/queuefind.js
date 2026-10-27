import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("queuefind").setDescription("Find tracks by title");
data.addStringOption(o=>o.setName('query').setDescription('Query value').setRequired(true));
export default {data,execute:(interaction,client)=>run("queuefind",interaction,client)};
