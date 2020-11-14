const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
const commandfile = require("../helper/help.js");

module.exports = {
	config: {
		name: "purge",
        class: "Serviço",
		description: "Apaga mensagens enviadas.",
        usage: "<#número de mensagens>",
        accessibleby: "Administradores e Moderadores"
	},
	run: async (bot, message, args) => {
        if(message.member.hasPermission("MANAGE_MESSAGES") || message.member.hasPermission("ADMINISTRATOR")){
            if(!args[0] || args[0]<='0') return console.log(this.config);
            if(isNaN(args)) return commandfile.run(bot, message, ["purge"]);

            message.channel.bulkDelete(args[0], true).then(() => {
                console.log(`${message.author.username} deleted ${args} messages from ${message.channel.name} at ${message.guild.name}.`);
            }).catch(console.error);
            
        } else return message.reply("Você não tem permissão para apagar mensagens.");
    }
}