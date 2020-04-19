const Discord = require("discord.js");
const userids = require("../../../tables/userids.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "saych",
		description: "Dá voz ao bot para uma sala recebida em args[0]",
		usage: ".saych <ID da sala>';;'<texto>",
		aliases: [""]
	},
	run: async (bot, message, args) => {
        if(message.author.id != userids.treorai) return;

        let builtstring = args.join(" ");
        let splitarray = builtstring.split(";;");
        if(isNaN(splitarray[0])) { return message.channel.send("Invalid Channel ID."); }
        const sendchannel = bot.channels.get(splitarray[0]);
        if(!sendchannel) { return message.channel.send("Couldn't find Channel ID.") }
        
        sendchannel.send(splitarray[1]);
	}
}