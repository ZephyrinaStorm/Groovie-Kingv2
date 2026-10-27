import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("preset").setDescription("Apply one of your 90 EQ presets");
data.addStringOption(o=>o.setName('name').setDescription('Name value').setRequired(true));
export default {data,execute:(interaction,client)=>run("preset",interaction,client)};
