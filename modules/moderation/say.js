const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "say",
        class: "Controle",
		description: "Envia texto pelo bot para uma sala recebida em args[0]",
		usage: "<ID da sala>;;<texto>",
		accessibleby: "Bot Owner"
	},
	run: async (bot, message, args) => {
        if(message.author.id != botconfig.ownerid) return;

        let builtstring = args.join(" ");
        let splitarray = builtstring.split(";;");
        if(isNaN(splitarray[0])) { return message.channel.send("Invalid Channel ID."); }
        const sendchannel = bot.channels.cache.get(splitarray[0]);
        if(!sendchannel) { return message.channel.send("Couldn't find Channel ID.") }
        
        sendchannel.send(splitarray[1]);
	}
}