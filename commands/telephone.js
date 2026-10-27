import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("telephone").setDescription("Telephone-like narrow sound");
export default {data,execute:(interaction,client)=>run("telephone",interaction,client)};
