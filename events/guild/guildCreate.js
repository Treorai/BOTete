const Discord = require("discord.js");
const fs = require("fs");
const color = require("../../tables/colortable.json");
const userids = require("../../tables/userids.json");
const url = require("../../tables/urltable.json");
const chtable = require("../../tables/channelidtable.json");
const guildtable = require("../../tables/guildidtable.json");

module.exports = (bot, guild) => {
    console.log(`Joined ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);

};