const Discord = require ("discord.js");
const fs = require("fs");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");
const userids = require("../../tables/userids.json");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const Money = require("../../models/money.js");

module.exports = {
	config: {
		name: "checkrcoins",
		description: "Verifica o saldo de Razzor Coins.",
		usage: ".checkrcoins <(opicional) @mensão>",
		aliases: ["myrcoins"]
	},
	run: async (bot, message, args) => {
        let rcembed = new Discord.RichEmbed()
            .setColor(color.LightGreen)
            .setFooter("BOTete Bank(razzorcoins)", url.BOTetePP);
    
        let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!target){
            rcembed.setAuthor('Recibo', message.author.displayAvatarURL);
            Money.findOne({
                userID: message.author.id
            }, (err, money) => {
                if(err) console.log(err);
    
                if(!money){
                    rcembed.addField("Saldo:", ":moneybag: 0", true);
                    return message.channel.send(rcembed);
                } else {
                    rcembed.addField("Saldo:", `:moneybag: ${money.money}`, true);
                    return message.channel.send(rcembed);
                }
            });
        } else {
            rcembed.setAuthor('Recibo', target.user.displayAvatarURL);
            Money.findOne({
                userID: target.id
            }, (err, money) => {
                if(err) console.log(err);
    
                if(!money){
                    rcembed.addField("Saldo:", ":moneybag: 0", true);
                    return message.channel.send(rcembed);
                } else {
                    rcembed.addField("Saldo:", `:moneybag: ${money.money}`, true);
                    return message.channel.send(rcembed);
                }
            });
        }
	}
}