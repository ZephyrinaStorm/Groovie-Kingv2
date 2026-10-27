import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("queue").setDescription("Show upcoming tracks");
export default {data,execute:(interaction,client)=>run("queue",interaction,client)};
