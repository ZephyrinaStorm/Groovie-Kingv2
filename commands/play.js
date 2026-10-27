import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("play").setDescription("Search and play a track or playlist");
data.addStringOption(o=>o.setName('query').setDescription('Query value').setRequired(true));
export default {data,execute:(interaction,client)=>run("play",interaction,client)};
