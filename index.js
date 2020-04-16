//tables
const botconfig = require("./botconfig.json");
const color = require("./tables/colortable.json");
const userids = require("./tables/userids.json");
const swearpd = require("./tables/sweartable.json");
const url = require("./tables/urltable.json");
const hensourse = require("./modules/nsfw/hensoursetable.json");
const nsfwchtable = require("./modules/nsfw/nsfwchannelidtable.json");
const chtable = require("./tables/channelidtable.json");
const guildtable = require("./tables/guildidtable.json");
//modules
const chalk = require('chalk');
const Discord = require("discord.js");
const schedule = require("node-schedule");
const fs = require("fs");
const superagent = require("superagent");
//moneySystem
/*
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const Money = require("./models/money.js");*/
//vnc
const bot = new Discord.Client();

["commands", "aliases"].forEach(x => bot[x] = new Discord.Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.login(process.env.BOT_TOKEN);