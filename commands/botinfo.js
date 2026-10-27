import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("botinfo").setDescription("Show bot version and guild counts");
export default {data,execute:(interaction,client)=>run("botinfo",interaction,client)};
