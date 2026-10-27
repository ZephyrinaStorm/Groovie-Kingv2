import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("resume").setDescription("Resume paused audio");
export default {data,execute:(interaction,client)=>run("resume",interaction,client)};
