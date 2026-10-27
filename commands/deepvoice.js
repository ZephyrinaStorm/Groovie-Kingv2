import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("deepvoice").setDescription("Lower voice pitch");
export default {data,execute:(interaction,client)=>run("deepvoice",interaction,client)};
