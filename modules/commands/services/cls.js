const Discord = require("discord.js");
const userids = require("../../../tables/userids.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "cls",
		description: "Cria um espaço em branco em um canal.",
		usage: ".cls",
		aliases: [""]
	},
	run: async (bot, message, args) => {
        message.delete().catch(O_o=>{});
        message.channel.send("cls command: \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.");
    }
}