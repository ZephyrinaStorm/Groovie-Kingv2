import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("shuffle").setDescription("Shuffle the upcoming tracks");
export default {data,execute:(interaction,client)=>run("shuffle",interaction,client)};
