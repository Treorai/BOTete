const Discord = require("discord.js");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "verus",
		description: "Resumo das missões diárias de verus."
	},
	run: async (bot, message, args) => {

        var verusembed = new Discord.RichEmbed()
            .setTitle("Aventuras em Verus")
            .setURL("https://browiki.org/wiki/Aventuras_em_Verus")
            .setColor(botconfig.colors.poringpink)
            .addField("Limpando o Caminho", "Eliminar 10 Robô de Reconhecimento")
            .addField("Eliminando Robôs", "Eliminar 15 Robôs Reparadores e 15 Robôs Exploradores")
            .addField("Registro de Memórias", "Coletar 5 Registros de Memórias do Abrigo e do Instituto")
            .addField("Relatório Diário de Núcleos", "Coletar 20 Núcleos de Energia")
            .addField("Relatório Diário de Energia", "Com 10 Garrafas Vazias, coletar 10 Energias Condensadas")
            .addField("Relatório Diário", "Após completar as duas quests acima, falar com o Comandante Louis")
            .addField("Brigan Mensal", "Caçar 30 Robôs Reparadores Turbo e 30 Fumaças Verdes")
            .addField("Brigan Mensal", "Trazer 30 Isopteros")
            .setFooter("BASE EXP: 12.200.000 | JOB EXP: 7.800.000", url.imgurls.browikipic);

        message.channel.send(verusembed);
	}
}