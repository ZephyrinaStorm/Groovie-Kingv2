import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("skipmultiple").setDescription("Skip multiple queued songs");
data.addIntegerOption(o=>o.setName('count').setDescription('Count value').setRequired(true).setMinValue(1).setMaxValue(9999));
export default {data,execute:(interaction,client)=>run("skipmultiple",interaction,client)};
