import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("playradio").setDescription("Play an Icecast or radio stream URL");
data.addStringOption(o=>o.setName('query').setDescription('Query value').setRequired(true));
export default {data,execute:(interaction,client)=>run("playradio",interaction,client)};
