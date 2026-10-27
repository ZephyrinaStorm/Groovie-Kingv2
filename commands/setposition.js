import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("setposition").setDescription("Seek to an absolute time");
data.addIntegerOption(o=>o.setName('seconds').setDescription('Seconds value').setRequired(true).setMinValue(0).setMaxValue(999999));
export default {data,execute:(interaction,client)=>run("setposition",interaction,client)};
