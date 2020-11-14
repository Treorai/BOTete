const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = async (bot, oldMember, newMember) => {

    //wipink
    if(oldMember.guild.id == idtable.guilds.wipink){
        if(oldMember.channelID === null && newMember.channelID !== null) {
          // User Joins a voice channel
          bot.channels.cache.get(idtable.channels.wipinklogs).send(`${newMember.member.user.username} connected to ${newMember.channel}.`);
        } else if(newMember.channelID === null){
          // User leaves a voice channel
          bot.channels.cache.get(idtable.channels.wipinklogs).send(`${oldMember.member.user.username} disconnected.`);
        } else if(oldMember.channelID !== newMember.channelID){
          // User changes voice channel
          bot.channels.cache.get(idtable.channels.wipinklogs).send(`${newMember.member.user.username} switched to ${newMember.channel}.`);
        };
    };
  
    //weeweecrew
    if(oldMember.guild.id == idtable.guilds.weeweecrew){
        if(oldMember.channelID === null && newMember.channelID !== null) {
          // User Joins a voice channel
          bot.channels.cache.get(idtable.channels.weeweemusic).send(`${newMember.member.user.username} conectou-se em ${newMember.channel}.`);
        } else if(newMember.channelID === null){
          // User leaves a voice channel
          bot.channels.cache.get(idtable.channels.weeweemusic).send(`${oldMember.member.user.username} desconectou-se.`);
        } else if(oldMember.channelID !== newMember.channelID){
          // User changes voice channel
          bot.channels.cache.get(idtable.channels.weeweemusic).send(`${newMember.member.user.username} moveu-se para ${newMember.channel}.`);
        };
    };

    //camsguild
    if(oldMember.guild.id == idtable.guilds.camsguild){
        if(oldMember.channelID === null && newMember.channelID !== null) {
          // User Joins a voice channel
          bot.channels.cache.get(idtable.channels.camsgbotch).send(`${newMember.member.user.username} conectou-se em ${newMember.channel}.`);
        } else if(newMember.channelID === null){
          // User leaves a voice channel
          bot.channels.cache.get(idtable.channels.camsgbotch).send(`${oldMember.member.user.username} desconectou-se.`);
        } else if(oldMember.channelID !== newMember.channelID){
          // User changes voice channel
          bot.channels.cache.get(idtable.channels.camsgbotch).send(`${newMember.member.user.username} moveu-se para ${newMember.channel}.`);
        };
    };

    //Lenhadores
    if(oldMember.guild.id == idtable.guilds.lenhadores){
        if(oldMember.channelID === null && newMember.channelID !== null) {
          // User Joins a voice channel
          bot.channels.cache.get(idtable.channels.ldbbotch).send(`${newMember.member.user.username} conectou-se em ${newMember.channel}.`);
        } else if(newMember.channelID === null){
          // User leaves a voice channel
          bot.channels.cache.get(idtable.channels.ldbbotch).send(`${oldMember.member.user.username} desconectou-se.`);
        } else if(oldMember.channelID !== newMember.channelID){
          // User changes voice channel
          bot.channels.cache.get(idtable.channels.ldbbotch).send(`${newMember.member.user.username} moveu-se para ${newMember.channel}.`);
        };
    };
    
    //notThose
}