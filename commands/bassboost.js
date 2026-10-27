import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("bassboost").setDescription("Boost low frequencies");
export default {data,execute:(interaction,client)=>run("bassboost",interaction,client)};
