const Discord = require ("discord.js");
const fs = require("fs");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");
const userids = require("../tables/userids.json");
const mongoose = require("mongoose");
mongoose.connect(preocess.env.MONGODB_URI);
const Money = require("../models/money.js");

module.exports.run = async (bot, message, args) => {
    console.log("teste");
    /*
    if(!rcoins[message.author.id]){
        rcoins[message.author.id] = {
            rcoins: 0
        };
    }

    let userCoins = rcoins[message.author.id].rcoins;
    
    let coinAmt = 1;
    rcoins[message.author.id] = {
    rcoins: rcoins[message.author.id].rcoins+ coinAmt};
    fs.writeFile("./razzorcoinstable.json", JSON.stringify(rcoins), (err) => {
        if (err) console.log(err)
        
	});


    var rcEmb = new Discord.RichEmbed()
            .setTitle("Recibo")
            .setColor(color.LightGreen)
            .addField("Saldo:", `RZ$: ${userCoins}`)
            .setFooter("BOTete Bank(razzorcoins)", url.BOTetePP);
        message.channel.send(rcEmb);
        */
}

module.exports.help = {
    name: "givercoins"
}