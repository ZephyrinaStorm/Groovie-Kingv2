import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("move").setDescription("Move a queued track to another position");
data.addIntegerOption(o=>o.setName('from').setDescription('From value').setRequired(true).setMinValue(1).setMaxValue(9999));
data.addIntegerOption(o=>o.setName('to').setDescription('To value').setRequired(true).setMinValue(1).setMaxValue(9999));
export default {data,execute:(interaction,client)=>run("move",interaction,client)};
