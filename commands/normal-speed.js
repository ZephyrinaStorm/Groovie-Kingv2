import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("normal-speed").setDescription("Reset playback speed");
export default {data,execute:(interaction,client)=>run("normal-speed",interaction,client)};
