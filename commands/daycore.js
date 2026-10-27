import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("daycore").setDescription("Slower, lower-pitched daycore");
export default {data,execute:(interaction,client)=>run("daycore",interaction,client)};
