const Discord = require ("discord.js");
const superagent = require("superagent");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");
const hensourse = require("./hensoursetable.json");
const safead = require("./nsfwads.json");
const userids = require("../tables/userids.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id==userids.BOTete) {message.delete().catch(err=>{});}
    bot.channels.get(chtable.console).send(`${message.author.username} called hentai at ${message.guild.name}.`);

    if(message.channel.nsfw === false){
        message.reply(safead.negated);
        bot.channels.get(chtable.console).send(`Forbidden: SFW Channel.`);
    } else {
        try{
            const { body } = await superagent
                .get(hensourse[(Math.floor(Math.random() * hensourse.length))])
                .query({ limit: 800 });
        
            const allowed = body.data.children;

            const randomnumber = Math.floor(Math.random() * allowed.length)
            const henembed = new Discord.RichEmbed()
                .setColor(color.Red)
                .setTitle(allowed[randomnumber].data.title)
                .setDescription("Author: " + allowed[randomnumber].data.author)
                .setImage(allowed[randomnumber].data.url)
                .setFooter(allowed[randomnumber].data.subreddit, url.redditicon);
            
            message.channel.send(henembed);

        } catch(error) { return; }
    }
}

module.exports.help = {
    name: "hentai"
}