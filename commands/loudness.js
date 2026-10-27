import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("loudness").setDescription("Smile curve with bass and treble");
export default {data,execute:(interaction,client)=>run("loudness",interaction,client)};
