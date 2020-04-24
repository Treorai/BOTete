const Discord = require("discord.js");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "cls",
        class: "Serviço",
		description: "Cria um espaço em branco em um canal."
	},
	run: async (bot, message, args) => {
        message.delete().catch(O_o=>{});
        message.channel.send("cls command: \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.");
    }
}