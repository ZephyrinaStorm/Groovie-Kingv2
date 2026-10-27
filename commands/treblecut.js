import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("treblecut").setDescription("Reduce high frequencies");
export default {data,execute:(interaction,client)=>run("treblecut",interaction,client)};
