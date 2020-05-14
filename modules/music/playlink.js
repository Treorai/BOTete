const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const player = require("./models/player.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "playlink",
        class: "Música",
		description: "Reproduz música a partir de um link do youtube.",
		usage: "<link>"
	},
	run: async (bot, message, args) => {
		
		if(!args[0]){
			return message.channel.send("Você precisa especificar um link.");
		}

		if(!message.member.voiceChannel){
			return message.channel.send("Você precisa estar conectado a um canal de voz.");
		}
		
		if(!servers[message.guild.id]) servers[message.guild.id] = {queue: []}
		
		var server = servers[message.guild.id];
		server.queue.push(args[0]);
		
		if(!message.guild.voiceConnection){
			message.member.voiceChannel.join().then(function(connection){
				player(connection, message);
			});
		}
		
	}
}