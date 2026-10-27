import {SlashCommandBuilder} from 'discord.js';
import {run} from './_shared/operations.js';
const data=new SlashCommandBuilder().setName("resetvoice").setDescription("Remove active audio filters");
export default {data,execute:(interaction,client)=>run("resetvoice",interaction,client)};
