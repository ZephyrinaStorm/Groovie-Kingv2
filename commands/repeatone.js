import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("repeatone").setDescription("Repeat the current track");
export default {data,execute:(interaction,client)=>run("repeatone",interaction,client)};
