import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("replay").setDescription("Restart the current song");
export default {data,execute:(interaction,client)=>run("replay",interaction,client)};
