const Discord = require ("discord.js");
const superagent = require("superagent");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");
const sourse = require("./pupiestable.json");

module.exports = {
	config: {
        name: "pupies",
        class: "Superagente",
		description: "Posta uma foto de bichinho aleatória com uma curiosidade."
	},
	run: async (bot, message, args) => {
        if(message.author.id==bot.user.id) {message.delete().catch(err=>{});}

        try{
            const randomnumber = Math.floor(Math.random() * sourse.length);

            var { body } = await superagent
                .get(sourse[randomnumber].img);
                let bodyimg = body.link;

            var { body } = await superagent
                .get(sourse[randomnumber].txt);
                let bodytxt = body.fact;

            let pupiemb = new Discord.RichEmbed()
                .setColor(botconfig.colors.defaultcolor)
                .setDescription(bodytxt)
                .setImage(bodyimg)
                .setTimestamp()
                .setFooter(`© ${message.guild.me.displayName}`);
            message.channel.send(pupiemb);

        } catch(error) { console.error(`${error}`); }

	}
}