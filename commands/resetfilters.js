import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("resetfilters").setDescription("Reset all audio filters");
export default {data,execute:(interaction,client)=>run("resetfilters",interaction,client)};
