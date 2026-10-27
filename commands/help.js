import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("help").setDescription("Open the Groovie King help menu");
export default {data,execute:(interaction,client)=>run("help",interaction,client)};
