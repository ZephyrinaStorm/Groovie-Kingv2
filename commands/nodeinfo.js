import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("nodeinfo").setDescription("Show Lavalink node connection details");
export default {data,execute:(interaction,client)=>run("nodeinfo",interaction,client)};
