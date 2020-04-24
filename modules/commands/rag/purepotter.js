const Discord = require("discord.js");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "purepotter",
        class: "Ragnarok Online",
		description: "Guia de Alquimia, Culinária e Farmácia",
		usage: "|| .purepotter <opção>"
	},
	run: async (bot, message, args) => {
        //embedbuilds:
        var potterembed = new Discord.RichEmbed()
            .setTitle("Comandos para Pure Potters:")
            .setDescription("Digite o comando mais adequado ao que você procura:")
            .setColor(botconfig.colors.defaultcolor)
            .addField("Guia de Alquimia:", "`.purepotter alquimia`")
            .addField("Guia de Culinária:", "`.purepotter culinária`")
            .addField("Guia de Farmácia", "`.purepotter farmácia`")
            .setFooter(`© ${message.guild.me.displayName} | run:search(Guia de Pure Potter)`, bot.user.displayAvatarURL);

        var chimestryembed = new Discord.RichEmbed()
            .setTitle("Alquimia")
            .setDescription("Chance = `[(Nv. de Pesquisa de Poções) + (Nv. de Preparar Poção × 3) + (Nv. de Mudança de Planos) + (Nv. de classe × 0,2) + (DES × 0,1) + (SOR × 0,1) + (INT × 0,05) + (Dificuldade)]%`")
            .setURL("https://browiki.org/wiki/Alquimia")
            .setColor(botconfig.colors.poringpink)
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
            .setFooter(`© ${message.guild.me.displayName} | run:search(AM_PHARMACY)`, url.imgurls.browikipic);

        var cookembed = new Discord.RichEmbed()
            .setTitle("Farmácia")
            .setDescription("Criação = `(Job_Lv ÷ 4) + (DEX ÷ 3) + (LUK ÷ 2) - α(30~150)`")
            .setURL("https://browiki.org/wiki/Culin%C3%A1ria_Avan%C3%A7ada")
            .setColor(botconfig.colors.poringpink)
            .addField("Churrasco de Selvagem: `+20 FOR`", "- 1 Vasilha Melange\n- 1 Carne de Selvagem\n- 1 Espeto de Cozinha\n- 1 Carvão Negro")
            .addField("Cozido de Drosera: `+20 AGI`", "- 1 Vasilha Melange\n- 3 Erva Vermelha\n- 3 Erva Azul\n- 3 Erva Branca\n- 1 Tentáculo de Drosera\n- 1 Panela")
            .addField("Carne ao Vinho: `+20 VIT`", "- 1 Vasilha Melange\n- 1 Panela\n- 2 Medalhões de Carne")
            .addField("Coquetel Uivante: `+20 INT`", "- 1 Vasilha Melange\n- 3 Sangue de Lobo\n- 2 Gelo")
            .addField("Chá Gelado de Siroma: `+20 DES`","- 1 Vasilha Melange\n- 1 Fruta de Comodo\n- 3 Raspadinha\n- 2 Gelo Cristalino")
            .addField("Macarrão com Petite: `+20 SOR`","- 1 Vasilha Melange\n- 2 Rabo de Petite\n- 1 Macarrão Fino\n- 1 Molho Especial")
            .setFooter(`© ${message.guild.me.displayName} | run:search(GN_MIX_COOKING)`, url.imgurls.browikipic);

        var pharmacyembed = new Discord.RichEmbed()
            .setTitle("Farmácia")
            .setDescription("Criação = `INT + (DES ÷ 2) + SOR + Nv. de classe + Δ + (Nv. de base − 100) + (Nv. de Pesquisa de Poções × 5) + (Nv. de Proteção Química Total × α(30~150)`")
            .setURL("https://browiki.org/wiki/Farmacologia_Avan%C3%A7ada")
            .setColor(botconfig.colors.poringpink)
            .addField("Suco Celular Enriquecido: Livro de Farmacologia", "- 10 Tubo de Ensaio\n- 5 Poção da Concentração\n- 5 Poção do Despertar\n- 5 Molho Picante")
            .addField("Poção de Recuperação: Livro de Farmacologia", "- 10 Tubo de Ensaio\n- 5 Panacéia\n- 20 Erva Verde\n- 1 Mastela\n- 1 Folha de Ygg")
            .addField("Poção Grande de HP: Aumentar sua Força", "- 10 Garrafa Vazia\n- 15 Erva Branca\n- 3 Mastela\n- 1 Água Benta\n- 1 Molho Picante")
            .addField("Poção Grande de SP: Aumentar sua Energia", "- 10 Garrafa Vazia\n- 10 Geleia Real\n- 15 Erva Azul\n- 1 Molho Doce")
            .addField("Semente de Planta Selvagem: Genética Vegetal", "- 10 Fruta Espinhosa")
            .addField("Semente de Planta Sanguessuga: Genética Vegetal", "- 10 Raíz de Planta Carnívora")
            .setFooter(`© ${message.guild.me.displayName} | run:search(GN_S_PHARMACY)`, url.imgurls.browikipic);
        
        //code:
        if(args == "alquimia"){
            message.channel.send(chimestryembed);
        } else if(args == "culinária"){
            message.channel.send(cookembed);
        } else if(args == "farmácia"){
            message.channel.send(pharmacyembed);
        } else {
            message.channel.send(potterembed);
        }
	}
}