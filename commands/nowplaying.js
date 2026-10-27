import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("nowplaying").setDescription("Show the currently playing track");
export default {data,execute:(interaction,client)=>run("nowplaying",interaction,client)};
