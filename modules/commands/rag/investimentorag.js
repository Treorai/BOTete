const Discord = require("discord.js");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "investimentorag",
        class: "Ragnarok Online",
		description: "Guia de investimento do feudo."
	},
	run: async (bot, message, args) => {
        var investembed = new Discord.RichEmbed()
            .setTitle("Investimentos por loot de MVPs")
            .setDescription("É possível trocar itens derrubados por MVPs por 1 Certificado de Investimento dos Gatos, que equivale a 10 Bilhetes de Agradecimento, falando com Namis `/navi malangdo 218/123`")
            .setURL("https://browiki.org/wiki/Portal_do_Abismo#Investindo")
            .setColor(botconfig.colors.poringpink)
            .addField("Asas da Rainha Inseto","- 2 Pedaço de Asa da Rainha")
            .addField("Coroa do Rei-mosca", "- 2 Coroa Quebrada")
            .addField("Disseram que Escams de Dragão são duras 01", "- 2 Escamas de Dragão de Fogo")
            .addField("O significado do Pesadelo Maternal", "- 3 Pesadelo Maternal")
            .addField("Para refinar minérios", "- 5 Pedras Preciosas")
            .addField("Aaaa, Orcs, Orcs!!", "- 5 Insígnia do Herói")
            .addField("Estudo do Yin-Yang", "- 3 Ba Gua")
            .addField("Segredos do Rei da Pirâmide", "- 3 Cetro do Faraó\n- 3 Máscara do Faraó")
            .addField("Tique-taque, as horas passam", "- 2 Relógio de Bolso")
            .addField("Plantando árvores na Ilha Mellow", "- 3 Graveto de Visco")
            .addField("Pesquisa de língua antiga", "- 5 Lasca de Pedra")
            .addField("Armas feitas com dentes afiados", "- 5 Presa de Hatii")
            .addField("Boneco-chefe de brinquedo 1", "- 3 Boneco de Bafomé")
            .addField("Um tigre é apenas um gato afinal", "- 1 Pata de Tigre\n- 5 Pele de Tigre")
            .addField("A lança e o escudo quebrados?", "- 3 Pedaço de Escudo Colossal\n- 3 Lâmina de Lança Colossal")
            .addField("Boneco-chefe de brinquedo 02", "- 3 Boneco de Osiris")
            .addField("Fica melhor no verão! Escamas frias", "- 1 Escama de Gelo")
            .addField("Pedaço de armadura de Thanatos", "- 1 Peça de Armadura de Esqueleto")
            .addField("Disseram que Escamas de Dragão são duras 02", "- 1 Escama Vermelha-escura")
            .addField("A identidade do olho assustador", "- 2 Desejo das Trevas Escarlate")
            .addField("Se eu pudesse ver...", "- 2 Tolice do Cego")
            .setFooter(`© ${message.guild.me.displayName} | run:search(Portal do Abismo)`, url.imgurls.browikipic);

        message.channel.send(investembed);
	}
}