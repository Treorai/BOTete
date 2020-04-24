const Discord = require ("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const Money = require("../../models/money.js");

module.exports = {
	config: {
		name: "addrcoins",
        class: "Banco",
		description: "Deposita Razzor Coins.",
        usage: "<@user> <#valor>",
        acessibleby: "Razzor"
	},
	run: async (bot, message, args) => {

        const bankownerid = idtable.users.razzor;
        if(message.author.id !==  bankownerid) { return message.reply("Apenas o banco central pode depositar Razzor Coins."); };

        let rcembed = new Discord.RichEmbed()
            .setDescription("Depósito efetuado.")
            .setColor(botconfig.colors.defaultcolor)
            .setTimestamp()
            .setAuthor('Recibo', message.author.displayAvatarURL)
            .setFooter(`© ${message.guild.me.displayName} | run:bank(rcoins)`, bot.user.displayAvatarURL);

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