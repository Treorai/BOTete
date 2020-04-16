const Discord = require ("discord.js");
const color = require("../../../tables/colortable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "wipink",
		description: "Convite para o discord da Wipink.",
		usage: ".wipink",
		aliases: ["convitewipink"]
	},
	run: async (bot, message, args) => {
        message.channel.send("https://discord.gg/ZNxzbBA");
    }
}