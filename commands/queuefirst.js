import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("queuefirst").setDescription("Show the first queued track");
export default {data,execute:(interaction,client)=>run("queuefirst",interaction,client)};
