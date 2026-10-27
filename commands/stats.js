import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("stats").setDescription("Show player and queue statistics");
export default {data,execute:(interaction,client)=>run("stats",interaction,client)};
