const Discord = require("discord.js");
const ms = require("ms");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
        name: "mute",
        class: "Loja",
		description: "Muta alguém conectado em uma sala.",
        usage: "<@user> <#tempo><unidade de tempo (s,m,h)>"
	},
	run: async (bot, message, args) => {
        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!tomute) return message.reply("Couldn't find user.");
        if(tomute.id == idtable.users.treorai) return message.reply("Nem fodendo rs xD");
        let muterole = message.guild.roles.find(`name`, "muted");
        if(!muterole){
            try{
                muterole = await message.guild.createRole({
                    name: "muted",
                    permissions:[]
                });
                message.guild.channels.forEach(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                        SPEAK: false
                    });
                });
            }catch(e){
                console.log(e.stack);
            };
        };

        let mutetime = args[1];
        if(!mutetime) return message.reply("Especifique um tempo em s, m, ou h.");

        await(tomute.addRole(muterole.id));
        message.channel.send(`<@${tomute.id}> fica xiu aí!`);

        reconnect = tomute.voiceChannel.id;
        tomute.setVoiceChannel(reconnect);

        setTimeout(function(){
            tomute.removeRole(muterole.id).then(msg =>{
                tomute.setVoiceChannel(reconnect);
            });
            message.channel.send(`<@${tomute.id}> tá liberado, irmão!`);
        }, ms(mutetime));
	}
}