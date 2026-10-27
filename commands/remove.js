import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("remove").setDescription("Remove a queued track");
data.addIntegerOption(o=>o.setName('position').setDescription('Position value').setRequired(true).setMinValue(1).setMaxValue(9999));
export default {data,execute:(interaction,client)=>run("remove",interaction,client)};
