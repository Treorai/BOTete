const Discord = require ("discord.js");
const fs = require("fs");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");
const userids = require("../tables/userids.json");
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
const Money = require("../models/money.js");

module.exports.run = async (bot, message, args) => {
    var rchelp = new Discord.RichEmbed()
            .setTitle("Razzor Bank:")
            .setColor(color.LightGreen)
            .addField("Comandos:", "`.checkrcoins` Confere o saldo de Razzor Coins.\n`.givercoins <@> <#>` Dá ao <@ mensionado> <# valor> que será descontados do seu saldo.")
            .addField("Admin:", "`.takercoins <@> <#>` Tira do <@ mensionado> <# valor>.\n`.addrcoins <@> <#>` Deposita para <@ mensionado> <# valor>.\n")
            .setFooter("BOTete Bank(razzorcoins)", url.BOTetePP);
        message.channel.send(rchelp);
}

module.exports.help = {
    name: "rcoins"
}