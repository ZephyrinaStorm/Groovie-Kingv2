import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("forward").setDescription("Seek forward in the song");
data.addIntegerOption(o=>o.setName('seconds').setDescription('Seconds value').setRequired(true).setMinValue(1).setMaxValue(3600));
export default {data,execute:(interaction,client)=>run("forward",interaction,client)};
