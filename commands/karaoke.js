import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("karaoke").setDescription("Reduce centered vocals");
export default {data,execute:(interaction,client)=>run("karaoke",interaction,client)};
