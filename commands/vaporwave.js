import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("vaporwave").setDescription("Slow dreamy vaporwave sound");
export default {data,execute:(interaction,client)=>run("vaporwave",interaction,client)};
