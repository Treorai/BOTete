const { MessageEmbed } = require ("discord.js");
const superagent = require("superagent");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
const safead = require("./nsfwads.json");

module.exports = {
	config: {
		name: "belleonlyfans",
        class: "Putaria",
        description: `Dedicated album for mrs Delphine.`,
        usage: ""
	},
	run: async (bot, message, args) => {
		if(message.author.id==bot.user.id) {message.delete().catch(err=>{});}

        if(message.channel.nsfw === false){
            message.reply(safead.negated);
        } else {
            try{
                const { body } = await superagent
                    .get('https://www.reddit.com/r/BelleDelphineOnlyfans.json?sort=top&t=week')
                    .query({ limit: 800 });
            
                const allowed = body.data.children;

                const randomnumber = Math.floor(Math.random() * allowed.length)
                const emb34 = new MessageEmbed()
                    .setColor(botconfig.colors.nsfwred)
                    .setTitle(allowed[randomnumber].data.title)
                    .setDescription("Author: " + allowed[randomnumber].data.author)
                    .setImage(allowed[randomnumber].data.url)
                    .setFooter(`© ${message.guild.me.displayName} | ${allowed[randomnumber].data.subreddit}`, url.imgurls.redditicon);
                
                message.channel.send(emb34);
                
            } catch(error) { console.log(`${error}`); }
        }
	}
}