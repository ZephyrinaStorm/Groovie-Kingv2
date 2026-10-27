import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data = new SlashCommandBuilder().setName("requester").setDescription("Show who requested this song");
export default {data,execute:(interaction,client)=>run("requester",interaction,client)};
