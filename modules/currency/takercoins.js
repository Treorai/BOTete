const { MessageEmbed } = require ("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const Money = require("./models/money.js");

module.exports = {
	config: {
		name: "takercoins",
        class: "Banco",
		description: "Cobra Razzor Coins.",
		usage: "<@user> <#valor>"
	},
	run: async (bot, message, args) => {

        const bankownerid = idtable.users.razzor;
        if(message.author.id !==  bankownerid) { return message.reply("Apenas o gerente pode cobrar Razzor Coins."); };
    
        let rcembed = new MessageEmbed()
            .setDescription("Cobrança efetuada.")
            .setColor(botconfig.colors.defaultcolor)
            .setAuthor('Recibo', message.author.displayAvatarURL)
            .setFooter(`© ${message.guild.me.displayName}`, bot.user.displayAvatarURL);
    
        let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!target) { return message.channel.send("Especifique de quem você quer cobrar Razzor Coins.\nUso correto: `.takercoins <@destinatário> <#valor>`"); }
        if(!args[1]) { return message.channel.send("Especifique o valor a ser cobrado.\nUso correto: `.takercpoms <@destinatário> <#valor>`"); }
        if(isNaN(args[1])) { return message.channel.send(`Não posso manipular ${tradevalue} na sua conta bancária.`+"\nUso correto: `.takercoins <@destinatário> <#valor>`"); }
        let tradevalue = Math.floor(args[1]);
    
        //checkSaldo
        Money.findOne({
            userID: target.user.id
        }, (err, money) => {
            if(err) console.log(err);
    
            if(!money){
                const newMoney = new Money({
                    userID: target.user.id,
                    money: tradevalue*-1
                });
                newMoney.save().catch(err => console.log(err));
                message.channel.send(rcembed);

            } else {
                money.money = money.money - tradevalue;
                money.save().catch(err => console.log(err));
                message.channel.send(rcembed);
            }
        });
	}
}