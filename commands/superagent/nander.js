const Discord = require ("discord.js");
const superagent = require("superagent");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");
const fs = require("fs");
const userids = require("../../tables/userids.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id==userids.BOTete) {message.delete().catch(err=>{});}
    bot.channels.get(chtable.console).send(`${message.author.username} called birb at ${message.guild.name}.`);

    try{
        let body = await superagent
            .get(`http://random.birb.pw/tweet.json`);

        if(!{body}) return message.channel.send("Error 404. Source offline.");
        
        var bcutA = body.text.replace('{"file": "','');
        var bcutB = bcutA.replace('"}','');

        var birdimg = "https://random.birb.pw/img/"+bcutB;
        
        let birdemb = new Discord.RichEmbed()
            .setColor(color.Verdiagua)
            .setTitle(":bird:")
            .setImage(birdimg);
        message.channel.send(birdemb);

    } catch(error) { return; }
}

module.exports.help = {
    name: "nander"
}