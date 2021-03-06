const { MessageEmbed } = require ("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "rcoins",
        class: "Banco",
		description: "Tabela de comandos do BOTete Bank.",
		aliases: ["razzorcoins"]
	},
	run: async (bot, message, args) => {
        var rchelp = new MessageEmbed()
            .setTitle("Razzor Bank:")
            .setColor(botconfig.colors.defaultcolor)
            .addField("Comandos:", "`.checkrcoins` Confere o saldo de Razzor Coins.\n`.givercoins <@> <#>` Dá ao <@ mensionado> <# valor> que será descontados do seu saldo.")
			.addField("Reservado à Gerência:", "`.takercoins <@> <#>` Tira do <@ mensionado> <# valor>.\n`.addrcoins <@> <#>` Deposita para <@ mensionado> <# valor>.\n")
			.addField("Loja:", "`.rstore` Abre a loja de rcoins.")
			.setFooter(`© ${message.guild.me.displayName} Bank`, bot.users.displayAvatarURL);
        message.channel.send(rchelp);
	}
}