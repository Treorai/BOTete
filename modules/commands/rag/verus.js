const Discord = require ("discord.js");
const color = require("../../../tables/colortable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "verus",
		description: "Guia das missões diárias de verus.",
		usage: ".verus",
		aliases: ["verusmissions"]
	},
	run: async (bot, message, args) => {

        var vadv0 = new Discord.RichEmbed()
            .setTitle("Limpando o Caminho")
            .setURL("https://browiki.org/wiki/Aventuras_em_Verus#Limpando_o_Caminho")
            .setColor(color.PoringPink)
            .addField("1. Fale com a Gerente Michelle", "`/navi ver_eju 113/39`", false)
            .addField("2. Elimine monstros", "10 Robô de Reconhecimento", false)
            .addField("3. Fale com o Comandante Louis", "`/navi verus04 179/165`", false)
            .setFooter("BASE EXP: 1.500.000 | JOB EXP: 1.000.000", url.browikipic);

        var vadv1 = new Discord.RichEmbed()
            .setTitle("Eliminando Robôs")
            .setURL("https://browiki.org/wiki/Aventuras_em_Verus#Eliminando_Rob.C3.B4s")
            .setColor(color.PoringPink)
            .addField("1. Fale com o Comandante Louis", "`/navi verus04 179/165`", false)
            .addField("2. Elimine monstros", "15 Robôs Reparadores e 15 Robôs Exploradores", false)
            .addField("3. Retorne ao Comandante Louis", "`/navi verus04 179/165`", false)
            .setFooter("BASE EXP: 1.500.000 | JOB EXP: 1.000.000", url.browikipic);

        var vadv2 = new Discord.RichEmbed()
            .setTitle("Registro de Memórias")
            .setURL("https://browiki.org/wiki/Aventuras_em_Verus#Registro_de_Mem.C3.B3rias")
            .setColor(color.PoringPink)
            .addField("1. Fale com a Capitã Arquien)", "`/navi verus04 170/148`", false)
            .addField("2. Colete itens falando com npcs", "5 Registros de Memórias do Instituto", false)
            .addField("3. Colete itens falando com npcs",  "5 Registros de Memórias do Abrigo", false)
            .addField("4. Entregue-os para a Capitã Arquien e clique no Reprodutor em seguida.", "`/navi verus04 170/148`", false)
            .addField("5. Ouça o conteúdo do reprodutor até receber o pedaço dos Registros", "Utilizados para a quest Sobrevivendo no Abrigo", false)
            .setFooter("BASE EXP: 1.500.000 | JOB EXP: 1.000.000", url.browikipic);

        var vadv3 = new Discord.RichEmbed()
            .setTitle("Ralatóario Diário de Núcleos")
            .setURL("https://browiki.org/wiki/Aventuras_em_Verus#Relat.C3.B3rio_Di.C3.A1rio_de_N.C3.BAcleos")
            .setColor(color.PoringPink)
            .addField("1. Fale com Ian Atnad", "`/navi verus04 144/193`", false)
            .addField("2. Colete itens eliminando Robôs", "20 Núcleo de Energia", false)
            .addField("3. Retorne a Ian Atnad", "`/navi verus04 144/193`", false)
            .setFooter("BASE EXP: 1.500.000 | JOB EXP: 1.000.000", url.browikipic);

        var vadv4 = new Discord.RichEmbed()
            .setTitle("Ralatóario Diário de Energia")
            .setURL("https://browiki.org/wiki/Aventuras_em_Verus#Relat.C3.B3rio_Di.C3.A1rio_de_Energia")
            .setColor(color.PoringPink)
            .addField("1. Fale com o Maquinista Lloyd", "`/navi verus03 103/177`", false)
            .addField("2. Consiga 10 Energias Condensadas dos Restos de Máquina", "Requer 10x Garrafa Vazia", false)
            .addField("3. Retorne ao Maquinista Lloyd", "`/navi verus03 103/177`", false)
            .setFooter("BASE EXP: 1.500.000 | JOB EXP: 1.000.000", url.browikipic);

        var vadv5 = new Discord.RichEmbed()
            .setTitle("Ralatóario Diário")
            .setDescription("Requer terminar as duas quests acima.")
            .setURL("https://browiki.org/wiki/Aventuras_em_Verus#Relat.C3.B3rio_Di.C3.A1rio")
            .setColor(color.PoringPink)
            .addField("1. Receba o Relatório da Escavação com o Arqueologista", "`/navi verus04 141/193`", false)
            .addField("2. Informe os resultados da escavação para o Comandante Louis", "`/navi verus04 179/165`", false)
            .setFooter("BASE EXP: 300.000 | JOB EXP: 300.000", url.browikipic);

        var viso = new Discord.RichEmbed()
            .setTitle("Brigan Mensal")
            .setURL("https://browiki.org/wiki/Brigan_Mensal")
            .setColor(color.PoringPink)
            .addField("1. Fale mais de uma vez com Krotzel", "`/navi verus02 79/31`", false)
            .addField("2. Encontre o Jornalista Bobão", "`/navi verus01 172/146`", false)
            .addField("3. Retorne a Krotzel", "`/navi verus02 79/31`", false)
            .addField("4. Encontre a Fotógrafa Jornalista", "`/navi verus02 134/169`", false)
            .addField("5. Retorne a Krotzel", "`/navi verus02 79/31`", false)
            .addField("6. Encontre o Jornalista Exausto", "`/navi verus01 41/103`", false)
            .addField("7. Retorne a Krotzel", "`/navi verus02 79/31`", false)
            .addField("8. Encontre a Fotógrafa Jornalista", "`/navi verus02 134/169`", false)
            .addField("9. Elimine", "30 Robôs Reparadores Turbo", false)
            .addField("10. Ajude o Jornalista Exausto", "`/navi verus01 41/103`", false)
            .addField("11. Traga", "30 Isopteros", false)
            .addField("12. Ajude o Jornalista Bobão", "`/navi verus01 172/146`", false)
            .addField("13. Elimine", "30 Fumaças Verdes", false)
            .setFooter("BASE EXP: 4.500.000 | JOB EXP: 2.500.000", url.browikipic);

        var vpolice = new Discord.RichEmbed()
            .setTitle("Posto Policial")
            .setURL("https://browiki.org/wiki/Posto_Policial")
            .setColor(color.PoringPink)
            .addField("1. Ofereça ajuda ao Policial Kesler", "`/navi verus04 133/212`", false)
            .addField("2. Encontre o Policial Piffs", "`/navi verus04 202/258`", false)
            .addField("3. Colete itens nos matagais", "10 Ervas Colhidas", false)
            .addField("4. Fale com o Policial Gerev", "`/navi verus03 116/36`", false)
            .addField("5. Procure NPCs ???", "Desarme 10 armadilhas", false)
            .addField("6. Fale com o Policial Salgran", "`/navi verus03 36/113`", false)
            .addField("7. Elimine Monstros", "10 Propagandas Ilegais", false)
            .addField("8. Fale com o Policial Seiden", "`/navi verus03 81/241`", false)
            .addField("9. Procure NPCs ???", "Colete 10 Pedras", false)
            .addField("10. Retorne ao Policial Kesler", "`/navi verus04 133/212`", false)
            .setFooter("BASE EXP: 1.000.000 | JOB EXP: 0", url.browikipic);

            message.channel.send(vadv0).then(msg =>{
                message.channel.send(vadv1).then(msg =>{
                    message.channel.send(vadv2).then(msg =>{
                        message.channel.send(vadv3).then(msg =>{
                            message.channel.send(vadv4).then(msg =>{
                                message.channel.send(vadv5).then(msg =>{
                                    message.channel.send(viso).then(msg =>{
                                        message.channel.send(vpolice);
                                    })
                                })
                            })
                        })
                    })
                })
            });
	}
}