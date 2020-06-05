const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const search = require("yt-search");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "clearqueue",
        class: "Música",
		description: "Limpa a lista de músicas."
	},
    run: async (bot, message, args) => {
        var server = servers[message.guild.id];
        if(message.guild.voiceConnection){
            for(var i = server.queue.length -1; i >= 0; i--){
                server.queue.splice(i, 1);
            }
        }
    }
}