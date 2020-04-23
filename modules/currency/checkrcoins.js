const Discord = require ("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const Money = require("../../models/money.js");

module.exports = {
	config: {
		name: "checkrcoins",
		description: "Verifica o saldo de Razzor Coins.",
        usage: "|| .checkrcoins <@user>",
		aliases: ["myrcoins"]
	},
	run: async (bot, message, args) => {
        let rcembed = new Discord.RichEmbed()
            .setColor(botconfig.colors.defaultcolor)
            .setTimestamp()
            .setFooter("BOTete Bank", bot.user.displayAvatarURL);
    
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