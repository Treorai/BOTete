const Discord = require("discord.js");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "ragcommands",
        class: "Ragnarok Online",
		description: "Lista de comandos relacionados ao Ragnarok.",
		aliases: ["ragdb"]
	},
	run: async (bot, message, args) => {
        var commandEmb = new Discord.RichEmbed()
            .setTitle("RO: Guias e Databases")
            .setColor(botconfig.colors.defaultcolor)
            .addField("Instâncias", "`.centrallab` Lista do Laboratório Central e conversor do minigame.\n`.hazyforest` Guia do Labirinto da Neblina.\n`.jackwolf` Guia do Sussurro Sombrio.")
            .addField("Quests", "`.verus` Quests diárias de Verus.\n`.mora` Quests diárias de Mora.\n")
            .addField("Outros", "`.purepotter` Guia para pure potters\n`.investimentorag` Lista de loots para investimento em malangdo.\n`.temporais` Lista de encantamentos das botas temporais.")
            .setFooter(`© ${message.guild.me.displayName} | run:build(ragcommands)`, bot.user.displayAvatarURL);
        
        message.channel.send(commandEmb);
	}
}