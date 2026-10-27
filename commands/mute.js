import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("mute").setDescription("Mute the music player");
export default {data,execute:(interaction,client)=>run("mute",interaction,client)};
