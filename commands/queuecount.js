import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("queuecount").setDescription("Count queued tracks");
export default {data,execute:(interaction,client)=>run("queuecount",interaction,client)};
