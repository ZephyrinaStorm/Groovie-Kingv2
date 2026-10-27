import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("spinslow").setDescription("Slow rotating stereo audio");
export default {data,execute:(interaction,client)=>run("spinslow",interaction,client)};
