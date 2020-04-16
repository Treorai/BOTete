const Discord = require("discord.js");
const userids = require("../../../tables/userids.json");
const color = require("../../../tables/colortable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "purge",
		description: "Apaga mensagens enviadas.",
		usage: ".purge <número de mensagens>",
		aliases: [""]
	},
	run: async (bot, message, args) => {
        if(!message.author.hasPermission("MANAGE_MESSAGES")) return;
        if(!args[0] || args[0]<='0') return;
        if(isNaN(args)) return;

        message.channel.bulkDelete(args[0]).then(() => {
            console.log(`${message.author} deleted ${args} messages from ${message.channel.name} at ${message.guild.name}.`);
        });
    }
}