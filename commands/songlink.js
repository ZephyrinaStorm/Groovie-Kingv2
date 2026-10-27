import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("songlink").setDescription("Get the current song URL");
export default {data,execute:(interaction,client)=>run("songlink",interaction,client)};
