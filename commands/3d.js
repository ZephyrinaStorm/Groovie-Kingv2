import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("3d").setDescription("Rotating spatial 3D audio");
export default {data,execute:(interaction,client)=>run("3d",interaction,client)};
