import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("clear").setDescription("Clear upcoming tracks");
export default {data,execute:(interaction,client)=>run("clear",interaction,client)};
