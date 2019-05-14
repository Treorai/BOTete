const Discord = require("discord.js");
const userids = require("../../tables/userids.json");
const url = require("../../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
    if(isNaN(args)){message.channel.send(`Não é possível rodar um dado com "${args}" lados...`);
    }
    else if(args.length == 0) {
        let randomnumber = 1 + Math.floor(Math.random() * 20);
        message.channel.send(`Deu ${randomnumber}.`);
        console.log(`${message.author.username} rolled a d20 and got ${randomnumber}.`);
    }
    else if(args <=0) {message.channel.send(`Um dado não pode ter ${args} lados...`);    
    }
    else {
        let randomarg = 1 + Math.floor(Math.random() * args);
        message.channel.send(`O dado de ${args} lados caiu no ${randomarg}`);
        console.log(`${message.author.username} rolled a d${args} and got ${randomarg}.`);
    };

}
module.exports.help = {
    name: "d20"
}