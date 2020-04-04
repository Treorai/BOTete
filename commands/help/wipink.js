const Discord = require ("discord.js");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
    message.channel.send("https://discord.gg/ZNxzbBA");
}

module.exports.help = {
    name: "wipink"
}