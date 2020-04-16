const Discord = require("discord.js");
const userids = require("../../tables/userids.json");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "join",
		description: "Conecta o bot à um canal de voz.",
		usage: ".join",
		aliases: ["connect"]
	},
	run: async (bot, message, args) => {
        if(message.member.voiceChannel){
            if(!message.guild.voiceConnection){
                message.member.voiceChannel.join()
                    .then(connection => {
                        console.log(`Connected to ${message.member.voiceChannel.name} at ${message.guild.name}.`);
                        var server = servers[message.guild.id];
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