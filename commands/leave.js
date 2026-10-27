import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("leave").setDescription("Leave the voice channel");
export default {data,execute:(interaction,client)=>run("leave",interaction,client)};
