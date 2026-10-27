import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("skip").setDescription("Skip the current song");
export default {data,execute:(interaction,client)=>run("skip",interaction,client)};
