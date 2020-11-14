const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

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
            if(!args[0] || args[0]<='0') return;
            if(isNaN(args)) return;

            try {
                message.channel.bulkDelete(args[0]).then(() => {
                    console.log(`${message.author.username} deleted ${args} messages from ${message.channel.name} at ${message.guild.name}.`);
                });
            } catch(err){
                return message.channel.send("Você não pode apagar mensagens muito antigas.");
            }
            
        } else return message.reply("Você não tem permissão para apagar mensagens.");
    }
}