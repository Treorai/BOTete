const Discord = require("discord.js");
const userids = require("../../tables/userids.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
    randomnumber = Math.floor(Math.random() * args.length);
    message.channel.send(`O sorteado foi ${args[randomnumber]}`);
    
    console.log(`${args[randomnumber]} was picked from ${message.author.username}'s sort between ${args} at ${message.guild.name}.`);
}
module.exports.help = {
    name: "sort"
}