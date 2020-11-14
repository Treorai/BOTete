const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "ping",
        class: "Serviço",
		description: "Calcula a latência.",
		usage: ""
	},
	run: async (bot, message, args) => {
        const m = await message.channel.send("Pong!");
        m.edit(`Bot ping: ${m.createdTimestamp - message.createdTimestamp}ms.`);
	}
}