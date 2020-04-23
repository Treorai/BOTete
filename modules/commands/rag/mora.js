const Discord = require("discord.js");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "mora",
		description: "Guia de quests repetíveis de mora.",
		aliases: ["moradaily"]
	},
	run: async (bot, message, args) => {
        var moraDaily = new Discord.RichEmbed()
            .setTitle("Quests Diárias de Mora")
            .setURL("https://browiki.org/wiki/Aventuras_na_Vila")
            .setColor(botconfig.colors.poringpink)
            .addField("Guia das Almas", "**Tuar** (ilha 2): `4 a 23 moedas`\n**Chaihokin** (ilha 6): `2 moedas`\n**Tazar** (ilha 8): `6 moedas`\n**Niger** (ilha 30) `5 moedas`\n**Messil** (ilha 42) `5 moedas`\n**Noirit** (ilha 49) `6 moedas`\n**Kunmoon** (ilha 63) `5 a 24 moedas`\n**Pajama Sin** (ilha 67) `5 moedas`\n**Mendel** (ilha 74/65) `7 moedas`\n**Milebit** (ilha 75/68) `5 moedas`", false)
            .addField("Chow-chow", "Antenas de Inseto (4)\nCoração Imortal (5)\nBandagem Estragada (1)\nAmuleto de Orc (3)\nOsso (3)", true)
            .addField("Labrador", "Espólio (2)\nCasca (3)\nCasca Escamada (3)\nCanino Venenoso (2)\nMuco Pegajoso (5)", true)
            .addField("Elephantine", "Pom Spider (3)\nAngra Mantis (4)\nChapin (5)\nLittle Fatum (6)\nMiming (7)", true)
            .setFooter("BOTete search(Mora) | by Treorai", url.imgurls.browikipic);
        
        message.channel.send(moraDaily);
	}
}