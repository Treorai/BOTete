const Discord = require("discord.js");
const userids = require("../../tables/userids.json");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id != userids.treorai) return;
    if(!args[0] || args[0]<='0') return;
    if(isNaN(args)) return;

    message.channel.bulkDelete(args[0]).then(() => {
        console.log(`Deleted ${args} messages from ${message.channel.name} at ${message.guild.name}.`);
    })
    }

module.exports.help = {
    name: "purge"
}