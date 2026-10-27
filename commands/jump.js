import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("jump").setDescription("Jump to a queued track");
data.addIntegerOption(o=>o.setName('position').setDescription('Position value').setRequired(true).setMinValue(1).setMaxValue(9999));
export default {data,execute:(interaction,client)=>run("jump",interaction,client)};
