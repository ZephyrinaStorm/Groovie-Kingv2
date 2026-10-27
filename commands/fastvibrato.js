import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("fastvibrato").setDescription("Fast pitch vibrato");
export default {data,execute:(interaction,client)=>run("fastvibrato",interaction,client)};
