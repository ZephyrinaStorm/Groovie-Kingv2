import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("artwork").setDescription("Get current song artwork");
export default {data,execute:(interaction,client)=>run("artwork",interaction,client)};
