const Discord = require ("discord.js");
const superagent = require("superagent");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
const safead = require("./nsfwads.json");

module.exports = {
	config: {
		name: "butts",
        class: "Superagente",
        description: "Mostra uma raba.",
		aliases: ["bunda", "bundas", "raba"]
	},
	run: async (bot, message, args) => {
        if(message.author.id==bot.user.id) {message.delete().catch(err=>{});}

        if(message.channel.nsfw === false){
            message.reply(safead.negated);
        } else {
            try{
                let {body} = await superagent
                    .get(`http://api.obutts.ru/butts/0/1/random`);

                let buttjson = body[0];
                let buttimg = "http://media.obutts.ru/"+buttjson.preview;

                if(!{body}) return message.channel.send("[Error] Source offline.");

                let buttembed = new Discord.RichEmbed()
                    .setColor(botconfig.colors.nsfwred)
                    .setTitle(buttjson.model)
                    .setImage(buttimg)
                    .setFooter(`© ${message.guild.me.displayName}`);

                message.channel.send(buttembed);

            } catch(error) { console.error(`${error}`); }
        }
	}
}