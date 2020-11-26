const { MessageEmbed } = require ("discord.js");
const superagent = require("superagent");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

const sourse = [
    {
        "img": "https://some-random-api.ml/img/birb",
        "txt": "https://some-random-api.ml/facts/bird"
    },
    {
        "img": "https://some-random-api.ml/img/cat",
        "txt": "https://some-random-api.ml/facts/cat"
    },
    {
        "img": "https://some-random-api.ml/img/dog",
        "txt": "https://some-random-api.ml/facts/dog"
    },
    {
        "img": "https://some-random-api.ml/img/panda",
        "txt": "https://some-random-api.ml/facts/panda"
    },
    {
        "img": "https://some-random-api.ml/img/fox",
        "txt": "https://some-random-api.ml/facts/fox"
    },
    {
        "img": "https://some-random-api.ml/img/koala",
        "txt": "https://some-random-api.ml/facts/koala"
    }
];

module.exports = {
	config: {
        name: "puppies",
        class: "Serviço",
        description: "Posta uma foto de bichinho aleatória com uma curiosidade.",
        usage: "[bird, cat, dog, panda, fox, koala]"
	},
	run: async (bot, message, args) => {
        if(message.author.id==bot.user.id) {message.delete().catch(err=>{});}
        let imgid;
        try{
            
            switch (args[0]){
                case "bird":
                    imgid = 0;
                    break;
                case "cat":
                    imgid = 1;
                    break;
                case "dog":
                    imgid = 2;
                    break;
                case "panda":
                    imgid = 3;
                    break;
                case "fox":
                    imgid = 4;
                    break;
                case "koala":
                    imgid = 5;
                    break;
                default:
                    imgid = Math.floor(Math.random() * sourse.length);
            }

            var { body } = await superagent
                .get(sourse[imgid].img);
                let bodyimg = body.link;

            var { body } = await superagent
                .get(sourse[imgid].txt);
                let bodytxt = body.fact;

            let pupiemb = new MessageEmbed()
                .setColor(botconfig.colors.defaultcolor)
                .setDescription(bodytxt)
                .setImage(bodyimg)
                .setTimestamp()
                .setFooter(`© ${message.guild.me.displayName}`);
            message.channel.send(pupiemb);

        } catch(error) { console.error(`${error}`); };

	}
}