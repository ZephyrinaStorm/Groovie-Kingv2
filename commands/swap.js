import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("swap").setDescription("Swap two queued tracks");
data.addIntegerOption(o=>o.setName('first').setDescription('First value').setRequired(true).setMinValue(1).setMaxValue(9999));
data.addIntegerOption(o=>o.setName('second').setDescription('Second value').setRequired(true).setMinValue(1).setMaxValue(9999));
export default {data,execute:(interaction,client)=>run("swap",interaction,client)};
