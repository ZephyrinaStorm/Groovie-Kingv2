import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("tremolo").setDescription("Pulsing tremolo audio");
export default {data,execute:(interaction,client)=>run("tremolo",interaction,client)};
