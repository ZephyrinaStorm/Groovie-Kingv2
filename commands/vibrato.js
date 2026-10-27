import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("vibrato").setDescription("Wavering pitch vibrato");
export default {data,execute:(interaction,client)=>run("vibrato",interaction,client)};
