import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("disconnect").setDescription("Disconnect the player");
export default {data,execute:(interaction,client)=>run("disconnect",interaction,client)};
