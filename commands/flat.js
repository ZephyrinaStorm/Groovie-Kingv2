import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("flat").setDescription("Reset equalizer bands");
export default {data,execute:(interaction,client)=>run("flat",interaction,client)};
