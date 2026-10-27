import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("helium").setDescription("Very high voice pitch");
export default {data,execute:(interaction,client)=>run("helium",interaction,client)};
