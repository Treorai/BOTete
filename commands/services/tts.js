const Discord = require("discord.js");
const userids = require("../../tables/userids.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
    
    const talkMessage = args.join(" ");
    console.log(`Reading ${message.author.username}'s message in ${message.channel.name} at ${message.channel.guild.name}`);
    message.channel.send(talkMessage, {tts:true}).then( msg => { msg.delete(10) } );
}

module.exports.help = {
    name: "read"
}