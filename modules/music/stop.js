const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "stop",
        class: "Música",
		description: "Para de reproduzir música."
	},
    run: async (bot, message, args) => {
        if(!message.member.voice.channel) return message.channel.send('Você precisa estar em uma sala pra usar este comando.');
        server_queue.songs = [];
        server_queue.connection.dispatcher.end();
    }
}