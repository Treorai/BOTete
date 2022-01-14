const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
var recqueue = require("./play.js");

module.exports = {
	config: {
		name: "skip",
        class: "Música",
		description: "Para a música atual e reproduz a próxima da fila."
	},
    run: async (bot, message, args) => {
        
        const queue = recqueue.queue;

        const server_queue = queue.get(message.guild.id);
        skip_song(message, server_queue);

    }
}

const skip_song = (message, server_queue) => {
    
        //return message.channel.send("Error. TT is working on that :C ");
        if(!message.member.voice.channel) return message.channel.send('Você precisa estar em uma sala pra usar este comando.');
        if(!server_queue){
            return message.channel.send("Acabou a lista.");
        }
        server_queue.connection.dispatcher.end();
}