import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("unmute").setDescription("Restore music player volume");
export default {data,execute:(interaction,client)=>run("unmute",interaction,client)};
