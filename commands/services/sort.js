const Discord = require("discord.js");
const userids = require("../../tables/userids.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
    randomnumber = Math.floor(Math.random() * args.length);
    message.channel.send(`O sorteado foi ${args[randomnumber]}`);
    }
module.exports.help = {
    name: "sort"
}