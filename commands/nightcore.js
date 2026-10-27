import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("nightcore").setDescription("Faster, higher-pitched nightcore");
export default {data,execute:(interaction,client)=>run("nightcore",interaction,client)};
