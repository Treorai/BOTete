const Discord = require ("discord.js");
const fs = require("fs");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");
const userids = require("../tables/userids.json");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
const Money = require("../models/money.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.id == userids.razzor) return message.channel.send(new Discord.RicheEmbed().setTitle("Recibo").setColor(color.LightGreen).setFooter("BOTete Bank(razzorcoins)", url.BOTetePP).addField("Saldo:", "RZ$: ∞", true));
    let target = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
    //if(!target) return message.reply("Couldn't find user.");


    Money.findOne({
        userID: message.author.id,
        serverID: message.guild.id
    }, (err, money) => {
        if(err) console.log(err);
        
        let embed = new Discord.RichEmbed()
        .setTitle("Recibo")
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
}

module.exports.help = {
    name: "checkrcoins"
}