const Discord = require ("discord.js");
const superagent = require("superagent");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");
const userids = require("../../tables/userids.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id==userids.BOTete) {message.delete().catch(err=>{});}
    console.log(`${message.author.username} called doggo at ${message.guild.name}.`);

    try{
        let {body} = await superagent
            .get(`https://random.dog/woof.json`);

        if(!{body}) return message.channel.send("Error 404. Source offline.");

        let dogemb = new Discord.RichEmbed()
            .setColor(color.Orange)
            .setTitle(":dog:")
            .setImage(body.url);

        message.channel.send(dogemb);

    } catch(error) { console.error(`${error}`); }
}

module.exports.help = {
    name: "auau"
}