const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = async (bot, oldMember, newMember) => {

    //wipink
    if(oldMember.guild.id == idtable.guilds.wipink){
        if(oldMember.channel === undefined && newMember.channel !== undefined) {
          // User Joins a voice channel
          bot.channels.cache.get(idtable.channels.wipinklogs).send(`${newMember.member.user.username} connected to ${newMember.channel}.`);
        } else if(newMember.channel === undefined){
          // User leaves a voice channel
          bot.channels.cache.get(idtable.channels.wipinklogs).send(`${oldMember.member.user.username} disconnected.`);
        } else if(oldMember.channel !== newMember.channel){
          // User changes voice channel
          bot.channels.cache.get(idtable.channels.wipinklogs).send(`${newMember.member.user.username} switched to ${newMember.channel}.`);
        };
    };
  
    //weeweecrew
    if(oldMember.guild.id == idtable.guilds.weeweecrew){
        if(oldMember.channel === undefined && newMember.channel !== undefined) {
          // User Joins a voice channel
          bot.channels.cache.get(idtable.channels.weeweemusic).send(`${newMember.user.username} conectou-se em ${newMember.channel}.`);
        } else if(newMember.channel === undefined){
          // User leaves a voice channel
          bot.channels.cache.get(idtable.channels.weeweemusic).send(`${oldMember.user.username} desconectou-se.`);
        } else if(oldMember.channel !== newMember.channel){
          // User changes voice channel
          bot.channels.cache.get(idtable.channels.weeweemusic).send(`${newMember.user.username} moveu-se para ${newMember.channel}.`);
        };
    };

    //camsguild
    if(oldMember.guild.id == idtable.guilds.camsguild){
        if(oldMember.channel === undefined && newMember.channel !== undefined) {
          // User Joins a voice channel
          bot.channels.cache.get(idtable.channels.camsgbotch).send(`${newMember.user.username} conectou-se em ${newMember.channel}.`);
        } else if(newMember.channel === undefined){
          // User leaves a voice channel
          bot.channels.cache.get(idtable.channels.camsgbotch).send(`${oldMember.user.username} desconectou-se.`);
        } else if(oldMember.channel !== newMember.channel){
          // User changes voice channel
          bot.channels.cache.get(idtable.channels.camsgbotch).send(`${newMember.user.username} moveu-se para ${newMember.channel}.`);
        };
    };

    //Lenhadores
    if(oldMember.guild.id == idtable.guilds.lenhadores){
        if(oldMember.channel === undefined && newMember.channel !== undefined) {
          // User Joins a voice channel
          bot.channels.cache.get(idtable.channels.ldbbotch).send(`${newMember.user.username} conectou-se em ${newMember.channel}.`);
        } else if(newMember.channel === undefined){
          // User leaves a voice channel
          bot.channels.cache.get(idtable.channels.ldbbotch).send(`${oldMember.user.username} desconectou-se.`);
        } else if(oldMember.channel !== newMember.channel){
          // User changes voice channel
          bot.channels.cache.get(idtable.channels.ldbbotch).send(`${newMember.user.username} moveu-se para ${newMember.channel}.`);
        };
    };
    
    //notThose
}