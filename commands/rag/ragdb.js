const Discord = require ("discord.js");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
        var commandEmb = new Discord.RichEmbed()
            .setTitle("RO: Guias e Databases")
            .setColor(color.DarkBlue)
            .addField("Instâncias", "`.centrallab` Lista do Laboratório Central.\n`.binary <número>` Conversor do minigame do Laboratório Central\n`.hazyforest` Guia do Labirinto da Neblina.\n`.jackwolf` Guia do Sussurro Sombrio.")
            .addField("Quests", "`.verus` Quests diárias de Verus.\n`.mora` Quests diárias de Mora.\n")
            .addField("Guia de Pure Potter", "`.alchemist` Guia de Alquimia.\n`.mixcooking` Guia de Culinária.\n`.pharmacy` Guia de Farmacologia.")
            .addField("Outros", "`.investimento` Lista de loots para investimento em malangdo.\n`.temporais` Lista de encantamentos das botas temporais.")
            .setFooter("BOTete database(ragcommands)", url.BOTetePP);
        message.channel.send(commandEmb);
}

module.exports.help = {
    name: "ragdb"
}