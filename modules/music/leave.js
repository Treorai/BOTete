const Discord = require("discord.js");
const userids = require("../tables/userids.json");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");

module.exports.run = async (bot, message, args) => {

    if(message.guild.voiceConnection && message.author.id == userids.treorai){
            message.guild.voiceConnection.disconnect();
    }
}

module.exports.help = {
    name: "leave"
}