const { MessageEmbed } = require ("discord.js");
const superagent = require("superagent");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
const safead = require("./nsfwads.json");
const hensourse = require("./hensoursetable.json");

module.exports = {
	config: {
		name: "hentai",
        class: "Putaria",
        description: "Posta uma otakisse 18+",
        usage: "",
		aliases: ["ecchi"]
	},
	run: async (bot, message, args) => {
        if(message.author.id==bot.user.id) {message.delete().catch(err=>{});}

        if(message.channel.nsfw === false){
            message.reply(safead.negated);
        } else {
            try{
                const { body } = await superagent
                    .get(hensourse[(Math.floor(Math.random() * hensourse.length))])
                    .query({ limit: 800 });
            
                const obj = body.data.children;

                const randomnumber = Math.floor(Math.random() * obj.length)
                const henembed = new MessageEmbed()
                    .setColor(botconfig.colors.nsfwred)
                    .setTitle(obj[randomnumber].data.title)
                    .setDescription("Author: " + obj[randomnumber].data.author)
                    .setImage(obj[randomnumber].data.url)
                    .setFooter(`© ${message.guild.me.displayName} | ${obj[randomnumber].data.subreddit}`, url.imgurls.redditicon);

                message.channel.send(henembed);

            } catch(error) { console.log(`${error}`); }
        }
	}
}