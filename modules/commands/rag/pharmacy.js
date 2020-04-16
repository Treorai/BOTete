const Discord = require ("discord.js");
const color = require("../../../tables/colortable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "pharmacy",
		description: "Guia de Pure Potter.",
		usage: ".pharmacy",
		aliases: ["farmácia", "farmacologia"]
	},
	run: async (bot, message, args) => {
        var farmacyemb = new Discord.RichEmbed()
            .setTitle("Farmácia")
            .setDescription("Criação = `INT + (DES ÷ 2) + SOR + Nv. de classe + Δ + (Nv. de base − 100) + (Nv. de Pesquisa de Poções × 5) + (Nv. de Proteção Química Total × α(30~150)`")
            .setURL("https://browiki.org/wiki/Farmacologia_Avan%C3%A7ada")
            .setColor(color.PoringPink)
            .addField("Suco Celular Enriquecido: Livro de Farmacologia", "- 10 Tubo de Ensaio\n- 5 Poção da Concentração\n- 5 Poção do Despertar\n- 5 Molho Picante")
            .addField("Poção de Recuperação: Livro de Farmacologia", "- 10 Tubo de Ensaio\n- 5 Panacéia\n- 20 Erva Verde\n- 1 Mastela\n- 1 Folha de Ygg")
            .addField("Poção Grande de HP: Aumentar sua Força", "- 10 Garrafa Vazia\n- 15 Erva Branca\n- 3 Mastela\n- 1 Água Benta\n- 1 Molho Picante")
            .addField("Poção Grande de SP: Aumentar sua Energia", "- 10 Garrafa Vazia\n- 10 Geleia Real\n- 15 Erva Azul\n- 1 Molho Doce")
            .addField("Semente de Planta Selvagem: Genética Vegetal", "- 10 Fruta Espinhosa")
            .addField("Semente de Planta Sanguessuga: Genética Vegetal", "- 10 Raíz de Planta Carnívora")
            .setFooter("BOTete search(GN_S_PHARMACY) | by Treorai", url.browikipic);
        message.channel.send(farmacyemb);
	}
}