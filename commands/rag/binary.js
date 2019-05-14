const Discord = require ("discord.js");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
    if(args <0 || args >= 256) {message.channel.send("Este número é muito grande para ser o código do dia."); return;};
    if(isNaN(args)){message.channel.send("Isso nem um número é :P"); return;};
    if(args.length == 0) {message.channel.send("Defina o código a ser convertido."); return;};
    
    binvar = parseInt(args, 10).toString(2);

        var decbinemb = new Discord.RichEmbed()
            .setTitle("Conversão Dec - Bin")
            .setDescription("Output:")
            .addField(binvar, "Memo: O número mais à direita equivale à placa mais à direia.")
            .setFooter("BOTete calculator(dec-bin)", url.BOTetePP);
        message.channel.send(decbinemb);
}

module.exports.help = {
    name: "binary"
}