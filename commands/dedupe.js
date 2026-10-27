import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("dedupe").setDescription("Remove duplicate tracks from queue");
export default {data,execute:(interaction,client)=>run("dedupe",interaction,client)};
