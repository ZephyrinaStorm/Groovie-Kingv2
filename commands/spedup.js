import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("spedup").setDescription("Speed up the music");
export default {data,execute:(interaction,client)=>run("spedup",interaction,client)};
