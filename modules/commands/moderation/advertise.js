const Discord = require("discord.js");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
        name: "advertise",
        class: "Controle",
		description: "Manda um broadcast para uma lista de servidores.",
        usage: "<texto>",
        accessibleby: "Bot Owner"
	},
	run: async (bot, message, args) => {
        if(message.author.id != botconfig.ownerid) return;
        const sayAd = args.join(" ");
        message.delete().catch(O_o=>{});
        var tosayademb = new Discord.RichEmbed()
            .setDescription(sayAd)
            .setColor(botconfig.colors.defaultcolor)
            .setTimestamp()
            .setFooter("Notificação", url.advertiseicon);

        botconfig.advertiselist.forEach((channelid, index) => {
            bot.channels.get(channelid).send(tosayademb);
            console.log(`Advertisement sent to ${channelid}.`);
        });
	}
}