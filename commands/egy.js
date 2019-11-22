const Discord = require ("discord.js");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");

module.exports.run = async (bot, message, args) => {
    if(args <=0 || args > 9999999) {message.channel.send("Ta exagerando, irmão :c"); return;};
    if(isNaN(args)){message.channel.send("Não inventa moda!"); return;};
    if(args.length == 0) {message.channel.send("..."); return;};
    

    argArray = args.toString().split('');

    for(i=0; i<(7*6-argArray.length*6); i++){
        argArray.unshift('0');
    }

    newArray = Array(0);

    for(i=0; (i<argArray[6]); i++){
        newArray.unshift(':cricket_game:');
    }
    for(i=0; (i<argArray[5]); i++){
        newArray.unshift(':foot:');
    }
    for(i=0; (i<argArray[4]); i++){
        newArray.unshift(':link:');
    }
    for(i=0; (i<argArray[3]); i++){
        newArray.unshift(':tulip:');
    }
    for(i=0; (i<argArray[2]); i++){
        newArray.unshift(':point_right:');
    }
    for(i=0; (i<argArray[1]); i++){
        newArray.unshift(':fish:');
    }
    for(i=0; (i<argArray[0]); i++){
        newArray.unshift(':man_running:');
    }

    message.channel.send(newArray.join(''));



}

module.exports.help = {
    name: "egy"
}