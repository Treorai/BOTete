const Discord = require ("discord.js");
const superagent = require("superagent");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");
const fs = require("fs");
const userids = require("../../tables/userids.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id==userids.BOTete) {message.delete().catch(err=>{});};

    try{
        let {body} = await superagent
            .get(`https://some-random-api.ml/img/birb`);

            if(!{body}) return message.channel.send("Error 404. Source offline.");
        let bimg = body.link;


        let {body} = await superagent
            .get(`https://some-random-api.ml/facts/bird`);

            if(!{body}) return message.channel.send("Error 404. Source offline.");
        let bfact = body.fact;

        
        let birdemb = new Discord.RichEmbed()
            .setColor(color.Verdiagua)
            .setTitle(bfact)
            .setImage(bimg);
        message.channel.send(birdemb);

    } catch(error) { console.error(`${error}`); }
}

module.exports.help = {
    name: "nander"
}