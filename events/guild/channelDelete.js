const Discord = require("discord.js");
const fs = require("fs");
const color = require("../../tables/colortable.json");
const userids = require("../../tables/userids.json");
const url = require("../../tables/urltable.json");
const chtable = require("../../tables/channelidtable.json");
const guildtable = require("../../tables/guildidtable.json");

module.exports = async (bot, channel) => {
    //Verify if channel was on channeltable;
    if(chtable.hasOwnProperty(channel.id)){
        console.log(`[WARNING!] ID'ed channel "${channel.name}" was deleted from ${channel.guild.name}.`);
    }
}