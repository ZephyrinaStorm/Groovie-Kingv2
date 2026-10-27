import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("reverse").setDescription("Reverse the upcoming queue");
export default {data,execute:(interaction,client)=>run("reverse",interaction,client)};
