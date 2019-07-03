const Discord = require("discord.js");
const userids = require("../tables/userids.json");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");
const YTDL = require("ytdl-core");

function Play(connection, message){
    var server = servers[message.guild.id];
    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();

    server.dispatcher.on("end", function(){
        if(server.queue[0]){
            Play(connection, message);
        } else { connection.disconnect(); }
    });
}

module.exports.run = async (bot, message, args) => {

    if(message.member.voiceChannel){
        if(!message.guild.voiceConnection){
            if(!servers[message.guild.id]){
                servers[message.guild.id] = { queue: [] }
            }

            message.member.voiceChannel.join()
                .then(connection => {
                    var server = servers[message.guild.id];
                    console.log(`Connected to ${message.member.voiceChannel.name} at ${message.guild.name}.`);
                    
                    server.queue.push(args);
                    
        console.log(server.queue[0]); console.log(server.queue);
                    Play(connection, message);
                });
        }
    } else {
        message.reply("tu precisas estar em um canal pra eu cantar pra ti ^^");
    }
}

module.exports.help = {
    name: "play"
}