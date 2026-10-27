import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("chipmunk").setDescription("High pitched voice effect");
export default {data,execute:(interaction,client)=>run("chipmunk",interaction,client)};
