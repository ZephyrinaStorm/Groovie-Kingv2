import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("midboost").setDescription("Boost vocal mid frequencies");
export default {data,execute:(interaction,client)=>run("midboost",interaction,client)};
