const { MessageEmbed } = require ("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const Money = require("./models/money.js");

module.exports = {
	config: {
		name: "givercoins",
        class: "Banco",
		description: "Transfere rcoins.",
		usage: "<@user> <#valor>",
		aliases: ["tradercoins"]
	},
	run: async (bot, message, args) => {
        let rcembed = new MessageEmbed()
            .setDescription("Transferência efetuada.")
            .setColor(botconfig.colors.defaultcolor)
            .setTimestamp()
            .setAuthor('Recibo', message.author.displayAvatarURL)
            .setFooter(`© ${message.guild.me.displayName}`, bot.user.displayAvatarURL);
            
        let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!target) { return message.channel.send("Especifique para quem você quer transferir Razzor Coins.\nUso correto: `.givercoins <@destinatário> <#valor>`"); }
        if(!args[1]) { return message.channel.send("Especifique o valor a ser transferido.\nUso correto: `.givercoins <@destinatário> <#valor>`"); }
        if(isNaN(args[1])) { return message.channel.send(`Não posso manipular ${tradevalue} na sua conta bancária.`+"\nUso correto: `.givercoins <@destinatário> <#valor>`"); }
        let tradevalue = Math.floor(args[1]);
    
        //checkSaldo
        Money.findOne({
            userID: message.author.id
        }, (err, money) => {
            if(err) console.log(err);
    
            if(!money || money.money < tradevalue){
                return message.channel.send("Saldo insuficiente para esta transação.");
            } else {
                money.money = money.money - tradevalue;
                money.save().catch(err => console.log(err));
                //giveValue
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
                        money.money = money.money + tradevalue;
                        money.save().catch(err => console.log(err));
                        message.channel.send(rcembed);
                    }
                });
            }
        });
		
	}
}