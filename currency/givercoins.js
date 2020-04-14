const Discord = require ("discord.js");
const fs = require("fs");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");
const userids = require("../tables/userids.json");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
const Money = require("../models/money.js");

module.exports.run = async (bot, message, args) => {

    let rcembed = new Discord.RichEmbed()
        .setTitle("Recibo")
        .setDescription("Transferência efetuada.")
        .addField("Confira seu saldo digitando `.checkrcoins`.")
        .setColor(color.LightGreen)
        .setAuthor('Recibo', message.author.displayAvatarURL)
        .setFooter("BOTete Bank(razzorcoins)", url.BOTetePP);

    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!target) { return message.channel.send("Especifique para quem você quer transferir Razzor Coins.\nUso correto: `.givercoins <@destinatário> <#valor>`"); }
    if(!args[1]) { return message.channel.send("Especifique o valor a ser transferido.\nUso correto: `.givercoins <@destinatário> <#valor>`"); }
    tradevalue = args[1];
    if(isNaN(tradevalue)) { return message.channel.send(`Não posso manipular ${tradevalue} na sua conta bancária.`+"\nUso correto: `.givercoins <@destinatário> <#valor>`"); }
        console.log(args[1]);
        console.log(args[0]);

    //checkSaldo
    Money.findOne({
        userID: message.author.id,
        serverID: message.guild.id
    }, (err, money) => {
        if(err) console.log(err);

        if(!money || money.money < tradevalue){
            return message.channel.send("Saldo insuficiente para esta transação.");
        } else {
            money.money = money.money - tradevalue;
            money.save().catch(err => console.log(err));
            //giveValue
            Money.findOne({
                userID: target.user.id,
                serverID: message.guild.id
            }, (err, money) => {
                if(err) console.log(err);

                if(!money){
                    const newMoney = new Money({
                        userID: message.author.id,
                        serverID: message.guild.id,
                        money: tradevalue
                    });
                    newMoney.save().catch(err => console.log(err));

                } else {
                    money.money = money.money + tradevalue;
                    money.save().catch(err => console.log(err));
                }
            });
        }
    });

}

module.exports.help = {
    name: "givercoins"
}