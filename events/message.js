const Discord = require("discord.js");
const fs = require("fs");
const botconfig = require("../botconfig.json");
const color = require("../tables/colortable.json");
const userids = require("../tables/userids.json");
const url = require("../tables/urltable.json");
const nsfwchtable = require("../nsfw/nsfwchannelidtable.json");
const chtable = require("../tables/channelidtable.json");
const guildtable = require("../tables/guildidtable.json");

module.exports = (bot, message) => {
    
    //replies
    if(message.author.id == userids.treorai && message.content.toLowerCase().endsWith('to mentindo?')){
        message.channel.send("Não está, senhor. É tudo verdade!");
    }
    if(message.author.id == userids.razzor && message.content.toLowerCase().endsWith('ão')){
        message.reply("MEU PAU NA SUA MÃO!!");
    }
    if(message.author.id == userids.razzor && message.content.toLowerCase().endsWith('aco')){
        message.reply("MEU PAU NO SEU BURACO!!");
    }
    if(message.author.id == userids.razzor && message.content.toLowerCase().endsWith('ico')){
        message.reply("MEU PAU NO SEU FURICO!!");
    }

    //reacts
    for (var i = 0; i < swearpd.word.length; i++) {
        if (message.content.toLowerCase().includes(swearpd.word[i])) {message.react('😠').then(console.log(`Reacted to ${message.author.username}'s curse.`)).catch(console.error);}
    }
    if(message.content.toLowerCase().includes('kkkk')) {message.react('😂').then(console.log(`Reacted to ${message.author.username}'s laugh.`)).catch(console.error);}

    //command handler
    if(message.author.bot && message.author.client.user.id!==userids.BOTete) return;
    if(message.content.indexOf(botconfig.prefix) !== 0) return;
    const args = message.content.slice(botconfig.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let commandfile = bot.commands.get(command);
    if(commandfile) commandfile.run(bot,message,args);
    
};