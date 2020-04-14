const Discord = require ("discord.js");
const fs = require("fs");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");
const userids = require("../tables/userids.json");
const mongoose = require("mongoose");
mongoose.connect(preocess.env.MONGODB_URI);
const Money = require("../models/money.js");

module.exports.run = async (bot, message, args) => {
    console.log("reboottest");
/*
    if(!rcoins[message.author.id]){
        rcoins[message.author.id] = {
            coins: 0
        };
    }



    var rcemb = new Discord.RichEmbed()
            .setTitle("")
            .setColor(color.LightGreen)
            .addField("", "")
            .setFooter("BOTete Bank(razzorcoins)", url.BOTetePP);
        message.channel.send(rcemb);
*/
}

module.exports.help = {
    name: "takercoins"
}