const Discord = require ("discord.js");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
        var commandEmb = new Discord.RichEmbed()
            .setTitle("**BOTete Command List**")
            .setURL(url.botetehelp)
            .setColor(color.DarkBlue)
            .addField("Services", "`.help` Show BOTete command list.\n`.ping` Show Ping time.\n`.cls` Clear screen.\n`.sort` Faz sorteio entre os argumentos (separados por espaço).\n`.d20` Roda um d20 (pode-ser passar um argumento mudando o número de faces).\n`.tts` Talks a text message.")
            .addField("Random Posts", '`.auau` Post a random dog img.\n`.meow` Post a random cat img.\n`.nander` Post a random bird meme.\n`.futa` Post a random joke.\n')
            .addField("NFSW Commands", "`.boobs` Post a random boob img.\n`.butts` Post a random butt img.\n`.hentai` Post a random hentai img from reddit.\n`.rule34` If it is exists, there is porn of it.")
            .addField("Ragnarok Quest Guides", "`.mora` Mora daily quests.\n`.hazyforest` Mora's Labirinth Guide\n`.verus` Verus' daily quests.\n`.centrallab` MVP list of Central Lab.\n`.binary` Calculates the binary code to central lab quest.")
            .addField("Ragnarok Farm Guides", "`.alchemist` Prints the PP Alchemist Guide.\n`.pharmacy` Prints the PP Pharmacy Guide.\n`.mixcooking` Prints the PP Cooking Guide.\n`.temporais` Enchatment list of Temporal Boots.\n`.investimento` List of MVP loot that can be traded in Malangdo.")
            .addField("GRF Related", "`.grf` GRF Main Screen")
            .setFooter("BOTete Command(help)", url.BOTetePP);
        message.channel.send(commandEmb);
}

module.exports.help = {
    name: "help"
}