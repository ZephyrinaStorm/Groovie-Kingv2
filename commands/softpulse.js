import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("softpulse").setDescription("Gentle volume pulsing");
export default {data,execute:(interaction,client)=>run("softpulse",interaction,client)};
