const Discord = require ("discord.js");
const fs = require("fs");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");
const userids = require("../tables/userids.json");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
const Money = require("../models/money.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.id == userids.razzor) return message.react('😑').then(message.channel.send("Não fode, André!"));
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
    //if(!target){
        Money.findOne({
            userID: message.author.id,
            serverID: message.guild.id
        }, (err, money) => {
            if(err) console.log(err);
        
            let embed = new Discord.RichEmbed()
            .setTitle(":moneybag: Recibo")
            .setColor(color.LightGreen)
            .setFooter("BOTete Bank(razzorcoins)", url.BOTetePP);
            if(!money){
                embed.addField("Saldo:", "RZ$: 0", true);
                return message.channel.send(embed);
            } else {
                embed.addField("Saldo:", `RZ$: ${money.money}`, true);
                return message.channel.send(embed);
            }
        });
    //} else {

    //}
}

module.exports.help = {
    name: "checkrcoins"
}