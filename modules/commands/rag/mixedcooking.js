const Discord = require ("discord.js");
const color = require("../../../tables/colortable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "mixedcooking",
		description: "Guia de Pure Potter.",
		usage: ".mixedcooking",
		aliases: ["culinária", "mixcooking"]
	},
	run: async (bot, message, args) => {
        var cookemb = new Discord.RichEmbed()
            .setTitle("Farmácia")
            .setDescription("Criação = `(Job_Lv ÷ 4) + (DEX ÷ 3) + (LUK ÷ 2) - α(30~150)`")
            .setURL("https://browiki.org/wiki/Culin%C3%A1ria_Avan%C3%A7ada")
            .setColor(color.PoringPink)
            .addField("Churrasco de Selvagem: `+20 FOR`", "- 1 Vasilha Melange\n- 1 Carne de Selvagem\n- 1 Espeto de Cozinha\n- 1 Carvão Negro")
            .addField("Cozido de Drosera: `+20 AGI`", "- 1 Vasilha Melange\n- 3 Erva Vermelha\n- 3 Erva Azul\n- 3 Erva Branca\n- 1 Tentáculo de Drosera\n- 1 Panela")
            .addField("Carne ao Vinho: `+20 VIT`", "- 1 Vasilha Melange\n- 1 Panela\n- 2 Medalhões de Carne")
            .addField("Coquetel Uivante: `+20 INT`", "- 1 Vasilha Melange\n- 3 Sangue de Lobo\n- 2 Gelo")
            .addField("Chá Gelado de Siroma: `+20 DES`","- 1 Vasilha Melange\n- 1 Fruta de Comodo\n- 3 Raspadinha\n- 2 Gelo Cristalino")
            .addField("Macarrão com Petite: `+20 SOR`","- 1 Vasilha Melange\n- 2 Rabo de Petite\n- 1 Macarrão Fino\n- 1 Molho Especial")
            .setFooter("BOTete search(GN_MIX_COOKING) | Designed by Treorai", url.browikipic);
        message.channel.send(cookemb);
	}
}