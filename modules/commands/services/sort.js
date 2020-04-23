const Discord = require("discord.js");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "sort",
		description: "Sorteia um dos argumentos.",
		usage: "<arg1> <arg2> <arg 3> ... <arg n>",
		aliases: ["sortear", "sorteio"]
	},
	run: async (bot, message, args) => {
        randomnumber = Math.floor(Math.random() * args.length);
        message.channel.send(`O sorteado foi ${args[randomnumber]}`);
	}
}