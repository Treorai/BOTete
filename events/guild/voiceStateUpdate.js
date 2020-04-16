const Discord = require("discord.js");
const fs = require("fs");
const color = require("../../tables/colortable.json");
const userids = require("../../tables/userids.json");
const url = require("../../tables/urltable.json");
const chtable = require("../../tables/channelidtable.json");
const guildtable = require("../../tables/guildidtable.json");

module.exports = (bot, oldMember, newMember) => {

    //wipink
    if(oldMember.guild.id == guildtable.wipink){
        if(oldMember.voiceChannel === undefined && newMember.voiceChannel !== undefined) {
          // User Joins a voice channel
          bot.channels.get(chtable.wipinklogs).send(`${newMember.user.username} connected to ${newMember.voiceChannel}.`);
        } else if(newMember.voiceChannel === undefined){
          // User leaves a voice channel
          bot.channels.get(chtable.wipinklogs).send(`${oldMember.user.username} disconnected.`);
        } else if(oldMember.voiceChannel !== newMember.voiceChannel){
          // User changes voice channel
          bot.channels.get(chtable.wipinklogs).send(`${newMember.user.username} switched to ${newMember.voiceChannel}.`);
        };
    };

    //weeweecrew
    if(oldMember.guild.id == guildtable.weeweecrew){
        if(oldMember.voiceChannel === undefined && newMember.voiceChannel !== undefined) {
          // User Joins a voice channel
          bot.channels.get(chtable.weeweemusic).send(`${newMember.user.username} conectou-se em ${newMember.voiceChannel}.`);
        } else if(newMember.voiceChannel === undefined){
          // User leaves a voice channel
          bot.channels.get(chtable.weeweemusic).send(`${oldMember.user.username} desconectou-se.`);
        } else if(oldMember.voiceChannel !== newMember.voiceChannel){
          // User changes voice channel
          bot.channels.get(chtable.weeweemusic).send(`${newMember.user.username} moveu-se para ${newMember.voiceChannel}.`);
        };
    };

    //camsguild
    if(oldMember.guild.id == guildtable.camsguild){
        if(oldMember.voiceChannel === undefined && newMember.voiceChannel !== undefined) {
          // User Joins a voice channel
          bot.channels.get(chtable.camsgbotch).send(`${newMember.user.username} conectou-se em ${newMember.voiceChannel}.`);
        } else if(newMember.voiceChannel === undefined){
          // User leaves a voice channel
          bot.channels.get(chtable.camsgbotch).send(`${oldMember.user.username} desconectou-se.`);
        } else if(oldMember.voiceChannel !== newMember.voiceChannel){
          // User changes voice channel
          bot.channels.get(chtable.camsgbotch).send(`${newMember.user.username} moveu-se para ${newMember.voiceChannel}.`);
        };
    };

    //Lenhadores
    if(oldMember.guild.id == guildtable.lenhadores){
        if(oldMember.voiceChannel === undefined && newMember.voiceChannel !== undefined) {
          // User Joins a voice channel
          bot.channels.get(chtable.ldbbotch).send(`${newMember.user.username} conectou-se em ${newMember.voiceChannel}.`);
        } else if(newMember.voiceChannel === undefined){
          // User leaves a voice channel
          bot.channels.get(chtable.ldbbotch).send(`${oldMember.user.username} desconectou-se.`);
        } else if(oldMember.voiceChannel !== newMember.voiceChannel){
          // User changes voice channel
          bot.channels.get(chtable.ldbbotch).send(`${newMember.user.username} moveu-se para ${newMember.voiceChannel}.`);
        };
    };
    
    //notThose
};