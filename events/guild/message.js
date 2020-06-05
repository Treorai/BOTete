const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
const sweartb = require("../../tables/sweartable.json");

module.exports = async (bot, message) => {
    
    //replies
    if(message.author.id == idtable.users.treorai && message.content.toLowerCase().endsWith('to mentindo?')){
        message.channel.send("Não está, senhor. É tudo verdade!");
    }
    if(message.author.id == idtable.users.razzor && message.content.toLowerCase().endsWith('ão')){
        message.reply("MEU PAU NA SUA MÃO!!");
    }
    if(message.author.id == idtable.users.razzor && message.content.toLowerCase().endsWith('aco')){
        message.reply("MEU PAU NO SEU BURACO!!");
    }
    if(message.author.id == idtable.users.razzor && message.content.toLowerCase().endsWith('ico')){
        message.reply("MEU PAU NO SEU FURICO!!");
    }
    if(message.content.toLowerCase().includes('i believe your intentions to be hostile')){
        message.channel.send("shhhhhh! I'm here to help!");
    }

    //reacts
    for (var i = 0; i < sweartb.word.length; i++) {
        if (message.content.toLowerCase().includes(sweartb.word[i])) {message.react('😠').catch(console.error);}
    }
    if(message.content.toLowerCase().includes('kkkk')) {message.react('😂').catch(console.error);}

    //command handler
    if(message.author.bot && message.author.client.user.id!==bot.user.id) return;
    if(message.channel.type === "dm") return;
    let args = message.content.slice(botconfig.prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    if(!message.content.startsWith(botconfig.prefix)) return;
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if(commandfile) commandfile.run(bot, message, args);
    
}