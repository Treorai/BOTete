const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
const { version } = require("../../package.json");
const schedule = require("node-schedule");
/*
let boobscmd = require('../../modules/nsfw/boobs.js');
let buttscmd = require('../../modules/nsfw/butts.js');
let hentaicmd = require('../../modules/nsfw/hentai.js');
let puppiescmd = require('../../modules/services/puppies.js');
let waifucmd = require('../../modules/services/waifu.js');
*/
/*
cmd.run(bot, message, [selectedSong.url]);

boobs / butts / hentai / puppies / waifu
*/

module.exports = async (bot) => {
    //login
    console.log(`Bot online, serving ${bot.guilds.cache.size} guilds.`);

    let activities = [ `version ${version}`, `${botconfig.prefix}help`, `to ${bot.guilds.cache.size} Servers` ], i=0;
    setInterval(() => bot.user.setActivity(`${activities[i++ % activities.length]}`, {type: "STREAMING", url:"https://www.twitch.tv/c9teteh"}), 15000);

    //UFSM Reminder 
    /*schedule.scheduleJob('0 11 * * 7', async function(){
        bot.channels.cache.get(idtable.channels.wipinkreminders).send("Lembrete: Agende as refeições da semana!");
    });

    /* beta run autopost
    let betarun = schedule.scheduleJob('1 * * * * *', async function(){

        let autoch = bot.channels.cache.get(idtable.channels.wipinkreminders);
    
        boobscmd.run(bot, message, autoch, args);
    });
*/

    //autoposts
    let autoboobs = schedule.scheduleJob('10 * * * *', async function(){
        bot.channels.cache.get(idtable.channels.wipinknsfw).send(`.boobs`);
    });

    let autobutts = schedule.scheduleJob('30 * * * *', async function(){
        bot.channels.cache.get(idtable.channels.wipinknsfw).send(`.butts`);
    });
    
    let autohen = schedule.scheduleJob('50 * * * *', async function(){
        bot.channels.cache.get(idtable.channels.wipinkhen).send(`.hentai`);
    });
    
    let autopupieshour = schedule.scheduleJob('00 * * * *', async function(){
        bot.channels.cache.get(idtable.channels.weeweepupies).send(`.puppies`);
    });
    
    let autopupiesday = schedule.scheduleJob('00 11 * * *', async function(){
        bot.channels.cache.get(idtable.channels.wipinkpupies).send(`.puppies`);
    });

    let autowaifu = schedule.scheduleJob('00 10 * * *', async function(){
        bot.channels.cache.get(idtable.channels.wipinkwaifus).send(`.waifu`);
    });

};