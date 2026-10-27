import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("slowvibrato").setDescription("Slow pitch vibrato");
export default {data,execute:(interaction,client)=>run("slowvibrato",interaction,client)};
