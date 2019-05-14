const Discord = require("discord.js");
const userids = require("../../tables/userids.json");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id != userids.treorai) return;
    const sayMessage = args.join(" ");
    message.delete().catch(err=>{});
    var tosayemb = new Discord.RichEmbed()
            .setDescription(sayMessage)
            .setColor(color.White);
        message.channel.send(tosayemb);
    }

module.exports.help = {
    name: "sayembed"
}