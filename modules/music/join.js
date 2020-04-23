const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "join",
		description: "Conecta o bot à um canal de voz.",
		aliases: ["connect"]
	},
	run: async (bot, message, args) => {
        if(message.member.voiceChannel){
            if(!message.guild.voiceConnection){
                message.member.voiceChannel.join()
                    .then(connection => {
                        console.log(`Connected to ${message.member.voiceChannel.name} at ${message.guild.name}.`);
                });
            } else {
                message.delete().catch(err=>{});
                message.member.voiceChannel.join()
                    .then(connection => {console.log(`Connected to ${message.member.voiceChannel.name} at ${message.guild.name}.`);});
            }
        } else {
            message.reply("Você precisa estar em um canal antes de me invitar");
        }
	}
}