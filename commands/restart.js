import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("restart").setDescription("Restart playback from the beginning");
export default {data,execute:(interaction,client)=>run("restart",interaction,client)};
