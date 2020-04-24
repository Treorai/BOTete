const Discord = require ("discord.js");
const superagent = require("superagent");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
const safead = require("./nsfwads.json");

module.exports = {
	config: {
		name: "rule34",
        class: "Superagente",
		description: `"If it exists, there is porn of it."`,
		aliases: ["r34"]
	},
	run: async (bot, message, args) => {
		if(message.author.id==bot.user.id) {message.delete().catch(err=>{});}

        if(message.channel.nsfw === false){
            message.reply(safead.negated);
        } else {
            try{
                const { body } = await superagent
                    .get('https://www.reddit.com/r/rule34.json?sort=top&t=week')
                    .query({ limit: 800 });
            
                const allowed = body.data.children;

                const randomnumber = Math.floor(Math.random() * allowed.length)
                const emb34 = new Discord.RichEmbed()
                    .setColor(botconfig.colors.nsfwred)
                    .setTitle(allowed[randomnumber].data.title)
                    .setDescription("Author: " + allowed[randomnumber].data.author)
                    .setImage(allowed[randomnumber].data.url)
                    .setFooter(allowed[randomnumber].data.subreddit, url.redditicon);
                
                message.channel.send(emb34);
                
            } catch(error) { console.log(`${error}`); }
        }
	}
}