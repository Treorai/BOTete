const Discord = require("discord.js");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "d20",
        class: "Serviço",
		description: "Roda um dado. Digitar um argumento para mudar o número de faces do dado.",
		usage: "[#número de faces]"
	},
	run: async (bot, message, args) => {
        if(isNaN(args)){message.channel.send(`Não é possível rodar um dado com "${args}" lados...`);
        } else if(args.length == 0) {
            let randomnumber = 1 + Math.floor(Math.random() * 20);
            message.channel.send(`Deu ${randomnumber}.`);
        } else if(args <=0) {
            message.channel.send(`Um dado não pode ter ${args} lados...`);
        } else {
            let randomarg = 1 + Math.floor(Math.random() * args);
            message.channel.send(`O dado de ${args} lados caiu no ${randomarg}`);
        };
	}
}