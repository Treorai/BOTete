const Discord = require ("discord.js");
const superagent = require("superagent");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

const sourse = [
    "https://some-random-api.ml/animu/wink",
    "https://some-random-api.ml/animu/pat",
    "https://some-random-api.ml/animu/hug"
];

module.exports = {
	config: {
		name: "waifu",
        class: "Serviço",
        description: "Posta uma imagem otaka aleatória.",
        usage: ""
	},
	run: async (bot, message, args) => {
        if(message.author.id==bot.user.id) {message.delete().catch(err=>{});}

        try{
            const randomnumber = Math.floor(Math.random() * sourse.length);

            var { body } = await superagent
                .get(sourse[randomnumber]);

            let waifuemb = new Discord.MessageEmbed()
                .setColor(botconfig.colors.defaultcolor)
                .setImage(body.link)
                .setTimestamp()
                .setFooter(`© ${message.guild.me.displayName}`);
            message.channel.send(waifuemb);
        
        } catch(error) { console.error(`${error}`); };

	}
}