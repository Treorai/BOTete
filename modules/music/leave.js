const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "leave",
        class: "Música",
		description: "Desconecta o bot de um canal de voz.",
		aliases: ["disconnect"]
	},
	run: async (bot, message, args) => {
        if(message.guild.voiceConnection){
            message.guild.voiceConnection.disconnect();
        }
	}
}