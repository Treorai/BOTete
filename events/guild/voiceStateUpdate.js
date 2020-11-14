const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = async (bot, oldMember, newMember) => {

    //wipink
    if(oldMember.guild.id == idtable.guilds.wipink){
        if(oldMember.voiceChannel === undefined && newMember.voiceChannel !== undefined) {

          // User Joins a voice channel
          bot.channels.cache.get(idtable.channels.wipinklogs).send(`${newMember.user.username} connected to ${newMember.voiceChannel}.`);
        console.log(newMember);
        console.log(oldMember);
        } else if(newMember.voiceChannel === undefined){
          // User leaves a voice channel
          bot.channels.cache.get(idtable.channels.wipinklogs).send(`${oldMember.user.username} disconnected.`);
        } else if(oldMember.voiceChannel !== newMember.voiceChannel){
          // User changes voice channel
          bot.channels.cache.get(idtable.channels.wipinklogs).send(`${newMember.user.username} switched to ${newMember.voiceChannel}.`);
        };
        
    };
  }
    //weeweecrew
    if(oldMember.guild.id == idtable.guilds.weeweecrew){
        if(oldMember.voiceChannel === undefined && newMember.voiceChannel !== undefined) {
          // User Joins a voice channel
          bot.channels.cache.get(idtable.channels.weeweemusic).send(`${newMember.user.username} conectou-se em ${newMember.voiceChannel}.`);
        } else if(newMember.voiceChannel === undefined){
          // User leaves a voice channel
          bot.channels.cache.get(idtable.channels.weeweemusic).send(`${oldMember.user.username} desconectou-se.`);
        } else if(oldMember.voiceChannel !== newMember.voiceChannel){
          // User changes voice channel
          bot.channels.cache.get(idtable.channels.weeweemusic).send(`${newMember.user.username} moveu-se para ${newMember.voiceChannel}.`);
        };
    };

    //camsguild
    if(oldMember.guild.id == idtable.guilds.camsguild){
        if(oldMember.voiceChannel === undefined && newMember.voiceChannel !== undefined) {
          // User Joins a voice channel
          bot.channels.cache.get(idtable.channels.camsgbotch).send(`${newMember.user.username} conectou-se em ${newMember.voiceChannel}.`);
        } else if(newMember.voiceChannel === undefined){
          // User leaves a voice channel
          bot.channels.cache.get(idtable.channels.camsgbotch).send(`${oldMember.user.username} desconectou-se.`);
        } else if(oldMember.voiceChannel !== newMember.voiceChannel){
          // User changes voice channel
          bot.channels.cache.get(idtable.channels.camsgbotch).send(`${newMember.user.username} moveu-se para ${newMember.voiceChannel}.`);
        };
    };

    //Lenhadores
    if(oldMember.guild.id == idtable.guilds.lenhadores){
        if(oldMember.voiceChannel === undefined && newMember.voiceChannel !== undefined) {
          // User Joins a voice channel
          bot.channels.cache.get(idtable.channels.ldbbotch).send(`${newMember.user.username} conectou-se em ${newMember.voiceChannel}.`);
        } else if(newMember.voiceChannel === undefined){
          // User leaves a voice channel
          bot.channels.cache.get(idtable.channels.ldbbotch).send(`${oldMember.user.username} desconectou-se.`);
        } else if(oldMember.voiceChannel !== newMember.voiceChannel){
          // User changes voice channel
          bot.channels.cache.get(idtable.channels.ldbbotch).send(`${newMember.user.username} moveu-se para ${newMember.voiceChannel}.`);
        };
    };
    
    //notThose
}