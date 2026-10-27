import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("ping").setDescription("Check Discord and Lavalink connectivity");
export default {data,execute:(interaction,client)=>run("ping",interaction,client)};
