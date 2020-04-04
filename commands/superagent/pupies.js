const Discord = require ("discord.js");
const superagent = require("superagent");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");
const sourse = require("./pupiestable.json");
const userids = require("../tables/userids.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id==userids.BOTete) {message.delete().catch(err=>{});}

        try{
            const randomnumber = Math.floor(Math.random() * sourse.length);

            var { body } = await superagent
                .get(sourse[randomnumber].img);
                let bodyimg = body.link;

            var { body } = await superagent
                .get(sourse[randomnumber].txt);
                let bodytxt = body.fact;


            let pupiemb = new Discord.RichEmbed()
                .setColor(color.Verdiagua)
                .setDescription(bodytxt)
                .setImage(bodyimg)
                .setTimestamp()
                .setFooter('BOTete service(superagent)');
            message.channel.send(pupiemb);
        



        } catch(error) { console.error(`${error}`); }
    }

module.exports.help = {
    name: "pupies"
}