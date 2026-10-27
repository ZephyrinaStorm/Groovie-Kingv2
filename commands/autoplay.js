import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("autoplay").setDescription("Enable Lavalink autoplay when available");
export default {data,execute:(interaction,client)=>run("autoplay",interaction,client)};
