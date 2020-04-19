const Discord = require("discord.js");
const userids = require("../../../tables/userids.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "saych",
		description: "Dá voz ao bot para uma sala recebida em args[1]",
		usage: ".saych <ID da sala> <texto>",
		aliases: [""]
	},
	run: async (bot, message, args) => {
        console.log(args);
        const sendchannel = bot.channels.get("554071939271098409");
        if(message.author.id != userids.treorai) return;
        
        const sayMessage = args.join(" ");
        sendchannel.startTyping();
        setTimeout(function(){
            sendchannel.send(sayMessage);
            sendchannel.stopTyping(true);
        }, sayMessage.length*150);
	}
}