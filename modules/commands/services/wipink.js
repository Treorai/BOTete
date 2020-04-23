const Discord = require("discord.js");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "wipink",
		description: "Convite para o discord da Wipink.",
		aliases: ["convitewipink"]
	},
	run: async (bot, message, args) => {
        message.channel.send("https://discord.gg/ZNxzbBA");
    }
}