import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("playdeezer").setDescription("Play Deezer links using Lavalink plugins");
data.addStringOption(o=>o.setName('query').setDescription('Query value').setRequired(true));
export default {data,execute:(interaction,client)=>run("playdeezer",interaction,client)};
