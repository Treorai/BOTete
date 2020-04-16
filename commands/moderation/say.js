const Discord = require("discord.js");
const userids = require("../../tables/userids.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id != userids.treorai) return;
    const sayMessage = args.join(" ");
    message.delete().catch(err=>{});
    message.channel.startTyping();
        setTimeout(function(){
            message.channel.send(sayMessage);
            message.channel.stopTyping(true);
        }, sayMessage.length*150);
}

module.exports.help = {
    name: "say"
}