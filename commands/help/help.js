const Discord = require ("discord.js");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
        var commandEmb = new Discord.RichEmbed()
            .setTitle("**BOTete - Lista de Comandos**")
            .setColor(color.DarkBlue)
            .addField("Serviços", "`.wipink` Manda um convite pro discord da Wipink.\n`.ping` Mostra a latência do cliente.\n`.cls` Cria espaço em branco na sala.\n`.sort <a b c>` Faz sorteio entre os argumentos (separados por espaço).\n`.d20` Roda um d20 (pode-ser passar um argumento mudando o número de faces).\n`.tts` Lê uma mensagem de texto.")
            .addField("NFSW", "`.boobs` Posta uma teta.\n`.butts` Posta um bundão.\n`.hentai` Posta uma otakisse 18+ do reddit.\n`.rule34` Idem .hentai, NSFL")
            .addField("Ragnarok Online", "`.ragdb` Dá a lista de todos comandos relacionados a Ragnarok.\n`.grf` Página para download de GRFs.")
            .setFooter("BOTete command(help)", url.BOTetePP);
        message.channel.send(commandEmb);
}

module.exports.help = {
    name: "help"
}