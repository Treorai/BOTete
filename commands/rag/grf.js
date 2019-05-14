const Discord = require ("discord.js");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
        var grfProvider = new Discord.RichEmbed()
            .setTitle("GRF Link Utility Page")
            .setDescription("GRF Tools may cause bans. Use carefully!")
            .setColor(color.DarkBlue)
            .addField("TTGRF v6.0", url.TTGRF, false)
            .addField("Graymap", url.graymap, false)
            .addField("Roupas jRO", url.ttgrfnewcostume, false)
            .addField("GRF Editor", url.GRFEditor, false)
            .addField("Changelog", url.ttgrfchangelog, false)
            .addField("About", url.ttgrfabout, false)
            .setFooter("GRFs by Treorai | Latest version: 6.0", url.grfcubeicon);
        message.channel.send(grfProvider);
}

module.exports.help = {
    name: "grf"
}