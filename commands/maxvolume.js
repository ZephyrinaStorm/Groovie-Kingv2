import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("maxvolume").setDescription("Limit the maximum volume in this guild session");
data.addIntegerOption(o=>o.setName('level').setDescription('Level value').setRequired(true).setMinValue(1).setMaxValue(150));
export default {data,execute:(interaction,client)=>run("maxvolume",interaction,client)};
