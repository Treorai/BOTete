const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "jackwolf",
        class: "Ragnarok Online",
		description: "Guia da instância Sussurro Sombrio",
		usage: "",
		aliases: ["sussurrosombrio"]
	},
	run: async (bot, message, args) => {
        var jwembed = new Discord.RichEmbed()
            .setTitle("Guia do Sussurro Sombrio")
            .setColor(botconfig.colors.poringpink)
            .setImage('https://cdn.discordapp.com/attachments/555512485583650831/693882819558113401/JW.png')
            .setFooter(`© ${message.guild.me.displayName} | Sussurro Sombrio`, url.imgurls.browikipic);
		
		message.channel.send(jwembed);
	}
}