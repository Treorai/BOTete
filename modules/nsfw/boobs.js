const Discord = require ("../../commands/help/node_modules/discord.js.js");
const superagent = require("superagent");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");
const safead = require("./nsfwads.json");
const userids = require("../../tables/userids.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id==userids.BOTete) {message.delete().catch(err=>{});}

    if(message.channel.nsfw === false){
        message.reply(safead.negated);
        console.warn(`Forbidden: SFW Channel.`);
    } else {
        try{
            let {body} = await superagent
                .get(`http://api.oboobs.ru/boobs/0/1/random`);

            let boobjson = body[0];
            let boobimg = "http://media.oboobs.ru/"+boobjson.preview;

            if(!{body}) return message.channel.send("Error 404. Source offline.");

            let boobemb = new Discord.RichEmbed()
                .setColor(color.Red)
                .setTitle(boobjson.model)
                .setImage(boobimg);

            message.channel.send(boobemb);

        } catch(error) { console.error(`${error}`); }
    }
}

module.exports.help = {
    name: "boobs"
}