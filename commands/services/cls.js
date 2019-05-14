const Discord = require("discord.js");
const userids = require("../../tables/userids.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
    //if(message.author.id != userids.treorai) return;
    message.delete().catch(O_o=>{});
    message.channel.send("cls command: \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.");
    console.log(`${message.author.username} cleared ${message.channel.name}'s screen at ${message.guild.name}.`);
}
module.exports.help = {
    name: "cls"
}