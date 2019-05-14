const Discord = require("discord.js");
const userids = require("../../tables/userids.json");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");
const adchannels = require("../../tables/adchtable.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id != userids.treorai) return;
    const sayAd = args.join(" ");
    message.delete().catch(O_o=>{});
    var tosayademb = new Discord.RichEmbed()
            .setDescription(sayAd)
            .setColor(color.Red)
            .setTimestamp()
            .setFooter("Notificação", url.advertiseicon);
    
    adchannels.forEach((channelid, index) => {
        bot.channels.get(channelid).send(tosayademb);
        console.log(`Advertisement sent to ${channelid}.`);    
    });
}

module.exports.help = {
    name: "advertise"
}