import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("queuelast").setDescription("Show the last queued track");
export default {data,execute:(interaction,client)=>run("queuelast",interaction,client)};
