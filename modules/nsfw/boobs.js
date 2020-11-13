const Discord = require ("discord.js");
const superagent = require("superagent");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
const safead = require("./nsfwads.json");

module.exports = {
	config: {
		name: "boobs",
        class: "Putaria",
        description: "Mostra uma teta.",
        usage: "",
		aliases: ["tits", "teta", "tetas"]
	},
	run: async (bot, message, args) => {
        if(message.author.id==bot.user.id) {message.delete().catch(err=>{});}

        if(message.channel.nsfw === false){
            message.reply(safead.negated);
        } else {
            try{
                let {body} = await superagent
                .get(`http://api.oboobs.ru/boobs/0/1/random`);

                let boobjson = body[0];
                let boobimg = "http://media.oboobs.ru/"+boobjson.preview;

                if(!{body}) return message.channel.send("[Error] Source offline.");

                let boobembed = new Discord.MessageEmbed()
                    .setColor(botconfig.colors.nsfwred)
                    .setTitle(boobjson.model)
                    .setImage(boobimg)
                    .setFooter(`© ${message.guild.me.displayName}`);

                message.channel.send(boobembed);

            } catch(error) { console.log(`${error}`); }
        }
	}
}