const Discord = require ("discord.js");
const superagent = require("superagent");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");
const safead = require("./nsfwads.json");
const userids = require("../tables/userids.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id==userids.BOTete) {message.delete().catch(err=>{});}
    bot.channels.get(chtable.console).send(`${message.author.username} called butts at ${message.guild.name}.`);

    if(message.channel.nsfw === false){
        message.reply(safead.negated);
        bot.channels.get(chtable.console).send(`Forbidden: SFW Channel.`);
    } else {
        try{
            let {body} = await superagent
                .get(`http://api.obutts.ru/butts/0/1/random`);

            let buttjson = body[0];
            let buttimg = "http://media.obutts.ru/"+buttjson.preview;

            if(!{body}) return message.channel.send("Error 404. Source offline.");

            let buttemb = new Discord.RichEmbed()
                .setColor(color.Red)
                .setTitle(buttjson.model)
                .setImage(buttimg);

            message.channel.send(buttemb);

        } catch(error) { return; }
    }
}

module.exports.help = {
    name: "butts"
}