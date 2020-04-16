const Discord = require("discord.js");
const userids = require("../../../tables/userids.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "saywwc",
		description: "Confunde a dessinha.",
		usage: ".saywwc <texto>",
		aliases: [""]
	},
	run: async (bot, message, args) => {
        const sendchannel = bot.channels.get("527281390417608726");
        if(message.author.id != userids.treorai) return;
        
        const sayMessage = args.join(" ");
        sendchannel.startTyping();
        setTimeout(function(){
            sendchannel.send(sayMessage);
            sendchannel.stopTyping(true);
        }, sayMessage.length*150);
	}
}