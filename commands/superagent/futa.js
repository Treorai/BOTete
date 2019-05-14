const Discord = require ("discord.js");
const superagent = require("superagent");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");
const userids = require("../../tables/userids.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id==userids.BOTete) {message.delete().catch(err=>{});}
    console.log(`${message.author.username} called a joke at ${message.guild.name}.`);

    try{
        let {body} = await superagent
            .get(`https://official-joke-api.appspot.com/jokes/random`);

        if(!{body}) return message.channel.send("Error 404. Source offline.");

        let jokeemb = new Discord.RichEmbed()
            .setColor(color.DarkBlue)
            .setTitle(body.setup)
            .setDescription(body.punchline);

        message.channel.send(jokeemb);

    } catch(error) { console.error(`${error}`); }
}

module.exports.help = {
    name: "futa"
}