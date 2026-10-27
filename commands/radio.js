import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("radio").setDescription("Radio-style equalization");
export default {data,execute:(interaction,client)=>run("radio",interaction,client)};
