const Discord = require("discord.js");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "temporais",
		description: "Guia de Encantamento das botas temporais.",
		aliases: ["temporalboots", "tboots"]
	},
	run: async (bot, message, args) => {
        var tbootsembed = new Discord.RichEmbed()
            .setTitle("Encantameto das Botas Temporais com Slot")
            .setURL("https://browiki.org/wiki/Glast_Heim#Itens_Temporais")
            .setColor(botconfig.colors.poringpink)
            .addField("Encantamento:", "S1\nS2\nS3\nS4\nF", true)
            .addField("Manas: (C / S)", "3 / 1\n10 / 2\n20 / 4\n40 / 7\n50 / 10", true)
            .addField("Chace", "100%\n82.5%\n66%\n55%\n47%", true)
            .setFooter("BOTete search(Botas Temporais) | by Treorai", url.imgurls.browikipic);
        
        message.channel.send(tbootsembed);
	}
}