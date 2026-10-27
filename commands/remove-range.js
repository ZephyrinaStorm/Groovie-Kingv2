import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("remove-range").setDescription("Remove a range of tracks");
data.addIntegerOption(o=>o.setName('from').setDescription('From value').setRequired(true).setMinValue(1).setMaxValue(9999));
data.addIntegerOption(o=>o.setName('to').setDescription('To value').setRequired(true).setMinValue(1).setMaxValue(9999));
export default {data,execute:(interaction,client)=>run("remove-range",interaction,client)};
