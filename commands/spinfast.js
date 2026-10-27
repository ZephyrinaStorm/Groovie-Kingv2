import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("spinfast").setDescription("Fast rotating stereo audio");
export default {data,execute:(interaction,client)=>run("spinfast",interaction,client)};
