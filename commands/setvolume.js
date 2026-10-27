import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("setvolume").setDescription("Set current volume");
data.addIntegerOption(o=>o.setName('level').setDescription('Level value').setRequired(true).setMinValue(0).setMaxValue(150));
export default {data,execute:(interaction,client)=>run("setvolume",interaction,client)};
