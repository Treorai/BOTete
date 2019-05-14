const Discord = require ("discord.js");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
        var moraDaily = new Discord.RichEmbed()
            .setTitle("Encantameto das Botas Temporais com Slot")
            .setURL("https://browiki.org/wiki/Glast_Heim#Itens_Temporais")
            .setColor(color.PoringPink)
            .addField("Coagulada:", "3\n10\n20\n40\n50", true)
            .addField("Sombria:", "1\n2\n4\n7\n10", true)
            .addField("Chace", "100%\n82.5%\n66%\n55%\n47%", true)
            .setFooter("BOTete search(Botas Temporais) | Designed by Treorai", url.browikipic);
        message.channel.send(moraDaily);
}

module.exports.help = {
    name: "temporais"
}