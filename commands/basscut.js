import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("basscut").setDescription("Reduce low frequencies");
export default {data,execute:(interaction,client)=>run("basscut",interaction,client)};
