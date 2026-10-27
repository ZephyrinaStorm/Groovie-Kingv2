import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("pulsing").setDescription("Fast volume pulsing");
export default {data,execute:(interaction,client)=>run("pulsing",interaction,client)};
