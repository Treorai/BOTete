const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
const { version } = require("../../package.json");
const schedule = require("node-schedule");

module.exports = async (bot) => {
    //login
    console.log(`Bot online, serving ${bot.users.size} users, in ${bot.guilds.size} guilds.`);

    let activities = [ `version ${version}`, `${botconfig.prefix}help`, `${bot.guilds.size} Servers` ], i=0;
    setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, {type: "STREAMING", url:"https://www.twitch.tv/2xttv"}), 15000);

    //UFSM Reminder
    schedule.scheduleJob('0 11 * * 7', async function(){
        bot.channels.get(idtable.channels.wipinkreminders).send("Lembrete: Agende as refeições da semana!");
    });

    //autoposts
    let autoboobs = schedule.scheduleJob('10 * * * *', async function(){
        bot.channels.get(idtable.channels.wipinknsfw).send(`.boobs`);
    });

    let autobutts = schedule.scheduleJob('30 * * * *', async function(){
        bot.channels.get(idtable.channels.wipinknsfw).send(`.butts`);
    });
    
    let autohen = schedule.scheduleJob('50 * * * *', async function(){
        bot.channels.get(idtable.channels.wipinkhen).send(`.hentai`);
    });
    
    let autopupieshour = schedule.scheduleJob('00 * * * *', async function(){
        bot.channels.get(idtable.channels.weeweepupies).send(`.pupies`);
    });
    
    let autopupiesday = schedule.scheduleJob('00 11 * * *', async function(){
        bot.channels.get(idtable.channels.wipinkpupies).send(`.pupies`);
        //bot.channels.get(idtable.channels.mdbpupies).send(`.pupies`);
    });

    let autowaifu = schedule.scheduleJob('00 10 * * *', async function(){
        bot.channels.get(idtable.channels.wipinkwaifus).send(`.waifu`);
    });

};