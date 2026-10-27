import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("autoplayoff").setDescription("Disable Lavalink autoplay");
export default {data,execute:(interaction,client)=>run("autoplayoff",interaction,client)};
