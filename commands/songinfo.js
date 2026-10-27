import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("songinfo").setDescription("Show detailed current song information");
export default {data,execute:(interaction,client)=>run("songinfo",interaction,client)};
