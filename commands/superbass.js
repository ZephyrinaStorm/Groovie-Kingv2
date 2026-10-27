import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("superbass").setDescription("Strong bass boost");
export default {data,execute:(interaction,client)=>run("superbass",interaction,client)};
