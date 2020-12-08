const { MessageEmbed } = require ("discord.js");
const superagent = require("superagent");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
const safead = require("./nsfwads.json");

module.exports = {
	config: {
		name: "onlyfans",
        class: "Putaria",
        description: `Illegal leaked content.`,
        usage: ""
	},
	run: async (bot, message, args) => {
		if(message.author.id==bot.user.id) {message.delete().catch(err=>{});}

        if(message.channel.nsfw === false){
            message.reply(safead.negated);
        } else {
            try{
                const { body } = await superagent
                    .get('https://www.reddit.com/r/LEAKEDonlyfans.json?sort=top&t=week')
                    .query({ limit: 800 });
            
                const obj = body.data.children;
console.log(obj[randomnumber].data.content);
                const randomnumber = Math.floor(Math.random() * obj.length)
                const emb34 = new MessageEmbed()
                    .setColor(botconfig.colors.nsfwred)
                    .setTitle(obj[randomnumber].data.title)
                    .setDescription("Author: " + obj[randomnumber].data.author)
                    .setImage(obj[randomnumber].data.url)
                    .setFooter(`© ${message.guild.me.displayName} | ${obj[randomnumber].data.subreddit}`, url.imgurls.redditicon);
                
                message.channel.send(emb34);
                
            } catch(error) { console.log(`${error}`); }
        }
	}
}