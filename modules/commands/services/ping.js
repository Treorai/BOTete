const Discord = require("discord.js");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "ping",
		description: "Calcula a latência."
	},
	run: async (bot, message, args) => {
        const m = await message.channel.send("Pong!");
        m.edit(`Bot ping: ${m.createdTimestamp - message.createdTimestamp}ms. API ping: ${Math.round(bot.ping)}ms`);
	}
}