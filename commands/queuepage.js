import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("queuepage").setDescription("Show a page of the queue");
data.addIntegerOption(o=>o.setName('page').setDescription('Page value').setRequired(false).setMinValue(1).setMaxValue(9999));
export default {data,execute:(interaction,client)=>run("queuepage",interaction,client)};
