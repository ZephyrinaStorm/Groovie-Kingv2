import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("unloop").setDescription("Turn repeat off");
export default {data,execute:(interaction,client)=>run("unloop",interaction,client)};
