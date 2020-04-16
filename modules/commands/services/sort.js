const Discord = require("discord.js");
const userids = require("../../../tables/userids.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "sort",
		description: "Sorteia um dos argumentos.",
		usage: ".sort <arg1> <arg2> ... <argn>",
		aliases: ["sortear", "sorteio"]
	},
	run: async (bot, message, args) => {
        randomnumber = Math.floor(Math.random() * args.length);
        message.channel.send(`O sorteado foi ${args[randomnumber]}`);
	}
}