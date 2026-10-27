import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("join").setDescription("Join your current voice channel");
export default {data,execute:(interaction,client)=>run("join",interaction,client)};
