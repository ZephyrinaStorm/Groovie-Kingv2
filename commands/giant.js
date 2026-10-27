import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("giant").setDescription("Very deep voice pitch");
export default {data,execute:(interaction,client)=>run("giant",interaction,client)};
