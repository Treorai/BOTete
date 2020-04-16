const Discord = require ("../../commands/help/node_modules/discord.js.js");
const fs = require("fs");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");
const userids = require("../../tables/userids.json");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const Money = require("../../models/money.js");

module.exports = {
	config: {
		name: "addrcoins",
		description: "Deposita Razzor Coins.",
		usage: ".addrcoins <@mensão> <#valor>",
		aliases: [""]
	},
	run: async (bot, message, args) => {
        if(message.author.id !== userids.razzor) { return message.reply("Apenas o banco central pode depositar Razzor Coins."); };

        let rcembed = new Discord.RichEmbed()
            .setDescription("Depósito efetuado.")
            .setColor(color.LightGreen)
            .setAuthor('Recibo', message.author.displayAvatarURL)
            .setFooter("BOTete Bank(razzorcoins) | by Treorai", url.BOTetePP);

        let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!target) { return message.channel.send("Especifique para quem você quer transferir Razzor Coins.\nUso correto: `.addrcoins <@destinatário> <#valor>`"); }
        if(!args[1]) { return message.channel.send("Especifique o valor a ser transferido.\nUso correto: `.addrcoins <@destinatário> <#valor>`"); }
        if(isNaN(args[1])) { return message.channel.send(`Não posso manipular ${tradevalue} na sua conta bancária.`+"\nUso correto: `.addrcoins <@destinatário> <#valor>`"); }
        let tradevalue = Math.floor(args[1]);

        Money.findOne({
            userID: target.user.id
        }, (err, money) => {
            if(err) console.log(err);

            if(!money){
                const newMoney = new Money({
                    userID: target.user.id,
                    money: tradevalue
                });
                newMoney.save().catch(err => console.log(err));
                message.channel.send(rcembed);

            } else {
                money.money = money.money+tradevalue;
                money.save().catch(err => console.log(err));
                message.channel.send(rcembed);
            }
        });
	}
}