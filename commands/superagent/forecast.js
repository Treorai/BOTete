const Discord = require ("discord.js");
const superagent = require("superagent");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");
const userids = require("../../tables/userids.json");
const fccitycode = require("../../tables/citycoordtable.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id==userids.BOTete) {message.delete().catch(err=>{});}

    
    for (var i = 0; i < fccitycode.length; i++){
        if (fccitycode[i].cityname == args){
            let foundcoord = fccitycode[i].coord;
            var fcstring = ('https://fcc-weather-api.glitch.me/api/current?'+foundcoord);
        }
      }

    try{
        let wdata = await superagent
            .get(fcstring);

            let city = wdata.body.name;
            let sky = wdata.body.weather[0].main;
            let skyicon = wdata.body.weather[0].icon;
            let temperature = wdata.body.main.temp;
            let humidity = wdata.body.main.humidity;
            let winds = wdata.body.wind.speed;
        
        let wembed = new Discord.RichEmbed()
            .setColor(color.LightBlue)
            .setTitle("Good morning!")
            .setDescription(`Today I expect **${sky}** for ${city}.\nIt's **${Math.round(temperature)}°C**, and humidity is at ${humidity}%.\nWind speed is at ${winds}km/h.`)
            .setThumbnail(skyicon);

        message.channel.send(wembed);

    } catch(error) { return; }

}

module.exports.help = {
    name: "forecast"
}