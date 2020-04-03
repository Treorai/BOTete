const Discord = require ("discord.js");
const superagent = require("superagent");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");
const fs = require("fs");
const userids = require("../../tables/userids.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id==userids.BOTete) {message.delete().catch(err=>{});};

    try{
        let bodyimg = await superagent
            .get(`https://some-random-api.ml/img/birb`);

            if(!{bodyimg}) return message.channel.send("Error 404. Source offline.");
        
        let bodyfact = await superagent
            .get(`https://some-random-api.ml/facts/bird`);

            if(!{bodyfact}) return message.channel.send("Error 404. Source offline.");
        
        let birdemb = new Discord.RichEmbed()
            .setColor(color.Verdiagua)
            .setTitle(bodyfact.fact)
            .setImage(bodyimg.link);
        message.channel.send(birdemb);

    } catch(error) { console.error(`${error}`); }
}

module.exports.help = {
    name: "nander"
}