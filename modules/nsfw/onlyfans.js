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

                const randomnumber = Math.floor(Math.random() * obj.length)
                
                message.channel.send(obj[randomnumber].data.url);
                
            } catch(error) { console.log(`${error}`); }
        }
	}
}