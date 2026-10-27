import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("speed").setDescription("Change playback speed");
data.addNumberOption(o=>o.setName('rate').setDescription('Rate value').setRequired(true).setMinValue(0.5).setMaxValue(2));
export default {data,execute:(interaction,client)=>run("speed",interaction,client)};
