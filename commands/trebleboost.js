import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("trebleboost").setDescription("Boost high frequencies");
export default {data,execute:(interaction,client)=>run("trebleboost",interaction,client)};
