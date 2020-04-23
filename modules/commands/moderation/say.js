const Discord = require("discord.js");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "say",
		description: "Envia texto pelo bot.",
        usage: "<texto>",
        accessibleby: "Bot Owner"
	},
	run: async (bot, message, args) => {
        if(message.author.id != botconfig.ownerid) return;
        const sayMessage = args.join(" ");
        message.delete().catch(err=>{});
        message.channel.startTyping();
        setTimeout(function(){
            message.channel.send(sayMessage);
            message.channel.stopTyping(true);
        }, sayMessage.length*150);
	}
}