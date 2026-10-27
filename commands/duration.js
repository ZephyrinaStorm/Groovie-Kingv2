import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("duration").setDescription("Show current song duration");
export default {data,execute:(interaction,client)=>run("duration",interaction,client)};
