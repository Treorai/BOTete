const Discord = require("discord.js");
const userids = require("../tables/userids.json");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");


module.exports.run = async (bot, message, args) => {

    if(message.member.voiceChannel){
        if(!message.guild.voiceConnection){
            message.member.voiceChannel.join()
                .then(connection => {
                    console.log(`Connected to ${message.member.voiceChannel.name} at ${message.guild.name}.`);
                    var server = servers[message.guild.id];
            });
        } else {
            if(message.author.id == userids.treorai){
                message.delete().catch(err=>{});
            message.member.voiceChannel.join()
                .then(connection => {console.log(`Connected to ${message.member.voiceChannel.name} at ${message.guild.name}.`);});
            } else { message.reply("já estou em um canal '-'"); }
        }
    } else {
        message.reply("pls esteja em um canal antes de me invitar...");
    }
}

module.exports.help = {
    name: "join"
}