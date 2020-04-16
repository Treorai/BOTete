const Discord = require ("discord.js");
const superagent = require("superagent");
const color = require("../../../tables/colortable.json");
const url = require("../../../tables/urltable.json");
const sourse = require("./waifutable.json");
const userids = require("../../../tables/userids.json");

module.exports = {
	config: {
		name: "waifu",
		description: "Posta uma imagem otaka aleatória.",
		usage: ".waifu",
		aliases: ["yourwaifu"]
	},
	run: async (bot, message, args) => {
        if(message.author.id==userids.BOTete) {message.delete().catch(err=>{});}

        try{
            const randomnumber = Math.floor(Math.random() * sourse.length);

            var { body } = await superagent
                .get(sourse[randomnumber]);

            let waifuemb = new Discord.RichEmbed()
                .setColor(color.Verdiagua)
                .setImage(body.link)
                .setTimestamp()
                .setFooter('BOTete service(superagent)');
            message.channel.send(waifuemb);
        
        } catch(error) { console.error(`${error}`); }

	}
}