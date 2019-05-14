const Discord = require ("discord.js");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
        var moraDaily = new Discord.RichEmbed()
            .setTitle("Lista de MVPs no Laboratório Central")
            .setURL("https://browiki.org/wiki/Laborat%C3%B3rio_Central")
            .setColor(color.PoringPink)
            .addField("Wave 1", "Misstress\nBapho\nGTB\nDracula\nDoppel\nEddga\nMoonlight\nFreeoni\nTanee\nMaya\nOsiris\nOrc Hero\nOrcs Lord", true)
            .addField("Wave 2", "Boitata\nStormy Knight\nDrake\nPharaoh\nHatii\nWhite Lady\nLeak\nKtullanux\nThanatos\nDark Lord\nLoD", true)
            .addField("Wave 3", "Atroce\nBeelzebub\nDetale\nDaehyon\nGT\nKhades\nIfrit\nKiel\nGloom\nRSX\nScaraba\nSerpente\nRandgris", true)
            .setFooter("BOTete search(Laboratório Central) | Designed by Treorai", url.browikipic);
        message.channel.send(moraDaily);
}

module.exports.help = {
    name: "centrallab"
}