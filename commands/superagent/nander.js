const Discord = require ("discord.js");
const superagent = require("superagent");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");
const userids = require("../../tables/userids.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id==userids.BOTete) {message.delete().catch(err=>{});};

    try{
        var {body} = await superagent
            .get(`https://some-random-api.ml/img/birb`);

            if(!{body}) return message.channel.send("Error 404. Source offline.");
            let bodyimg = body.link;

        var {body} = await superagent
            .get(`https://some-random-api.ml/facts/bird`);

            if(!{body}) return message.channel.send("Error 404. Source offline.");
        
            let bodytxt = body.fact;

        let birdemb = new Discord.RichEmbed()
            .setColor(color.Verdiagua)
            .setDescription(bodytxt)
            .setImage(bodyimg)
            .setTimestamp()
            .setFooter('BOTete service(superagent)', url.BotetePP);
        message.channel.send(birdemb);

    } catch(error) { console.error(`${error}`); }
}

module.exports.help = {
    name: "nander"
}