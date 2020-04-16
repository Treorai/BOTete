const Discord = require ("discord.js");
const color = require("../../../tables/colortable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "jackwolf",
		description: "Guia da instância Sussurro Sombrio",
		usage: ".jackwolf",
		aliases: ["sussurrosombrio"]
	},
	run: async (bot, message, args) => {
        var jwe = new Discord.RichEmbed()
            .setTitle("Jack Wolf Guide")
            .setColor(color.PoringPink)
            .setImage('https://cdn.discordapp.com/attachments/555512485583650831/693882819558113401/JW.png')
            .setFooter("BOTete search(Jack Wolf) | Designed by Treorai", url.browikipic);
        message.channel.send(jwe);
	}
}