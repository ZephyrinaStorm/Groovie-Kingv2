import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("repeatall").setDescription("Repeat the entire queue");
export default {data,execute:(interaction,client)=>run("repeatall",interaction,client)};
