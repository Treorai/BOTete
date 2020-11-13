const Discord = require("../services/node_modules/discord.js.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

const advertiselist = [
    "743593036801507432", // Geral @CMD
    "533348958127259685", // Papo Reto @Wipink
    "528805531742371840", // All @Karuna
    "534141992930770955", // Falem @TRC
    "270745177671335938", // Geral @Lenhadores
];

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
            .setFooter(`© ${message.guild.me.displayName} | Notificação`, url.advertiseicon);

        advertiselist.forEach((channelid, index) => {
            bot.channels.get(channelid).send(tosayademb);
            console.log(`Advertisement sent to ${channelid}.`);
        });
	}
}