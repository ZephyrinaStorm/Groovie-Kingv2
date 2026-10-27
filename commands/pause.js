import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("pause").setDescription("Pause the player");
export default {data,execute:(interaction,client)=>run("pause",interaction,client)};
