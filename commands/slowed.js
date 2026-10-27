import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("slowed").setDescription("Slow down the music");
export default {data,execute:(interaction,client)=>run("slowed",interaction,client)};
