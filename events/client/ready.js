const {bot} = require("../../index");
const Discord = require("discord.js");
const schedule = require("node-schedule");
const fs = require("fs");
const botconfig = require("../../botconfig.json");
const color = require("../../tables/colortable.json");
const userids = require("../../tables/userids.json");
const url = require("../../tables/urltable.json");
const nsfwchtable = require("../../modules/nsfw/nsfwchannelidtable.json");
const chtable = require("../../tables/channelidtable.json");
const guildtable = require("../../tables/guildidtable.json");
const subnick = botconfig.activity;

module.exports = (bot) => {
    //login
    console.log(`Bot online, serving ${bot.users.size} users, in ${bot.guilds.size} guilds.`);
    bot.user.setActivity(subnick, {type: "STREAMING", url:"https://www.twitch.tv/2xttv"});

    //UFSM Reminder
    schedule.scheduleJob('0 11 * * 7', async function(){
        bot.channels.get(chtable.wipinkreminders).send("Lembrete: Agende as refeições da semana!");
    });

    //autoposts
    let autoboobs = schedule.scheduleJob('10 * * * *', async function(){
        bot.channels.get(nsfwchtable.wipinkaboobch).send(`.boobs`);
    });

    let autobutts = schedule.scheduleJob('30 * * * *', async function(){
        bot.channels.get(nsfwchtable.wipinkabuttch).send(`.butts`);
    });
    
    let autohen = schedule.scheduleJob('50 * * * *', async function(){
        bot.channels.get(nsfwchtable.wipinkhench).send(`.hentai`);
    });
    
    let autopupies = schedule.scheduleJob('00 * * * *', async function(){
        bot.channels.get(chtable.weeweepupies).send(`.pupies`);
        bot.channels.get(chtable.wipinkpupies).send(`.pupies`);
    });
    
    let autowaifu = schedule.scheduleJob('00 10 * * *', async function(){
        bot.channels.get(chtable.wipinkwaifus).send(`.waifu`);
    });

};