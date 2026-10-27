import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("stop").setDescription("Stop and clear the player");
export default {data,execute:(interaction,client)=>run("stop",interaction,client)};
