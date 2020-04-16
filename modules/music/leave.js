const Discord = require("discord.js");
const userids = require("../../tables/userids.json");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "leave",
		description: "Desconecta o bot de um canal de voz.",
		usage: ".leave",
		aliases: ["disconnect"]
	},
	run: async (bot, message, args) => {
        if(message.guild.voiceConnection && message.author.id == userids.treorai){
            message.guild.voiceConnection.disconnect();
        }
	}
}