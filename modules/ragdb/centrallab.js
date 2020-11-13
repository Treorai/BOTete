const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "centrallab",
        class: "Ragnarok Online",
        description: "Mostra a lista de MVPs do Laboratório Central, e Calcula a conversão binária da instância.",
        usage: "[#número]"
	},
	run: async (bot, message, args) => {
        var clabembed = new Discord.RichEmbed()
            .setTitle("Lista de MVPs no Laboratório Central")
            .setURL("https://browiki.org/wiki/Laborat%C3%B3rio_Central")
            .setColor(botconfig.colors.poringpink)
            .addField("Wave 1", "Misstress\nBapho\nGTB\nDracula\nDoppel\nEddga\nMoonlight\nFreeoni\nTanee\nMaya\nOsiris\nOrc Hero\nOrcs Lord", true)
            .addField("Wave 2", "Boitata\nStormy Knight\nDrake\nPharaoh\nHatii\nWhite Lady\nLeak\nKtullanux\nThanatos\nDark Lord\nLoD", true)
            .addField("Wave 3", "Atroce\nBeelzebub\nDetale\nDaehyon\nGT\nKhades\nIfrit\nKiel\nGloom\nRSX\nScaraba\nSerpente\nRandgris", true)
            .setFooter(`© ${message.guild.me.displayName} | Laboratório Central`, url.imgurls.browikipic);

        if(args.length == 0) {
            return message.channel.send(clabembed);
        } else {
            if(args <0 || args >= 256) {message.channel.send("Este número é muito grande para ser o código do dia."); return;};
            if(isNaN(args)){message.channel.send("Isso nem um número é :P"); return;};

            binvar = parseInt(args, 10).toString(2);

            var decbinembed = new Discord.RichEmbed()
                .setTitle("Conversão Dec - Bin")
                .setDescription(binvar)
                .addField("Interpretação:", "1=Ligado, 0=Desligado.\nO número mais à direita equivale à placa mais à direita.\nAs placas da esquerda que não aparecem na resposta são zeros.")
                .setFooter(`© ${message.guild.me.displayName}`, bot.user.displayAvatarURL);

            message.channel.send(decbinembed);
        }
	}
}
