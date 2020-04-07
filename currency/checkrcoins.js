const Discord = require ("discord.js");
const fs = require("fs");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");
const userids = require("../tables/userids.json");
const rcoins = require("./razzorcoinstable.json");

module.exports.run = async (bot, message, args) => {
    if(!rcoins[message.author.id]){
        rcoins[message.author.id] = {
            rcoins: 0
        };
        fs.writeFile("./razzorcoinstable.json", JSON.stringify(coins), (err) => {
            if (err) console.log(err)
        });
    }

    let userCoins = rcoins[message.author.id].rcoins;
    

    var rcEmb = new Discord.RichEmbed()
            .setTitle("Recibo")
            .setColor(color.LightGreen)
            .addField("Saldo:", `RZ$: ${userCoins}`)
            .setFooter("BOTete Bank(razzorcoins)", url.BOTetePP);
        message.channel.send(rcEmb);
}

module.exports.help = {
    name: "checkrcoins"
}