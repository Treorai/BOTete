const Discord = require ("discord.js");
const color = require("../../../tables/colortable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "alchemist",
		description: "Guia de Pure potter.",
		usage: ".alchemist",
		aliases: ["alquimia"]
	},
	run: async (bot, message, args) => {
        var chimestryemb = new Discord.RichEmbed()
            .setTitle("Alquimia")
            .setDescription("Chance = `[(Nv. de Pesquisa de Poções) + (Nv. de Preparar Poção × 3) + (Nv. de Mudança de Planos) + (Nv. de classe × 0,2) + (DES × 0,1) + (SOR × 0,1) + (INT × 0,05) + (Dificuldade)]%`")
            .setURL("https://browiki.org/wiki/Alquimia")
            .setColor(color.PoringPink)
            .addField("1.Poções: `Dificuldade +20%`","- 1 Erva da cor da poção\n- 1 Garrafa de Poção")
            .addField("1.Poção Azul: `Dificuldade -5%`", "- 1 Erva Azul\n- 1 Garrafa de Poção\n- 1 Scell")
            .addField("2.Álcool: `Dificuldade +10%`", "- 1 Tubo de Ensaio\n- 1 Garrafa Vazia\n- 5 Caule\n- 5 Esporo Venenoso")
            .addField("3.Fogo Grego:", "- 1 Garrafa Vazia\n- 1 Tecido\n- 1 Álcool")
            .addField("4.Ácido:", "- 1 Garrafa Vazia\n- 1 Coração Imortal")
            .addField("5.Frasco de Planta:", "- 1 Garrafa Vazia\n- 2 Flor de Planta Carnívora")
            .addField("6.Esfera Marinha", "- 1 Garrafa Vazia\n- 1 Tendões\n- 1 Neurônios")
            .addField("7.Coat: `Dificuldade -10%`", "- 1 Garrafa Vazia\n- 1 Coração de Sereia\n- 1 Presa de Zenorc\n- 1 Álcool")
            .addField("8.Slim Branca: `Dificuldade -10%`", "- 1 Tubo de Ensaio\n- 1 Poção Branca\n- 1 Areia Estelar de Bruxa")
            .addField("Criação Espiritual de Poções II:","```Grupo com Super Aprendiz\n- 200 Vasilha de Mistura\n- 200 Poção Branca\n- 200 Tubo de Ensaio\n- 200 Areia Estelar de Bruxa```")
            .addField("Criação Espiritual de Poções III:","```Grupo: Taekwon\n- 200 Vasilha de Mistura\n- 200 Garrafa Vazia\n- 100 Tubo de Ensaio\n- 500 Caule\n- 500 Esporo Venenoso\n- 50 Coração Imortal\n- 50 Tecido\n- 50 Álcool```")
            .setFooter("BOTete search(AM_PHARMACY) | by Treorai", url.browikipic);
        message.channel.send(chimestryemb);
	}
}