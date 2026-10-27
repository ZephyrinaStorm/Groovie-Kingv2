import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("repeatoff").setDescription("Disable repeating");
export default {data,execute:(interaction,client)=>run("repeatoff",interaction,client)};
