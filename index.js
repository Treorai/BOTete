//tables
const botconfig = require("./botconfig.json");
const color = require("./tables/colortable.json");
const userids = require("./tables/userids.json");
const swearpd = require("./tables/sweartable.json");
const url = require("./tables/urltable.json");
const hensourse = require("./nsfw/hensoursetable.json");
const nsfwchtable = require("./nsfw/nsfwchannelidtable.json");
const chtable = require("./tables/channelidtable.json");
const guildtable = require("./tables/guildidtable.json");
//modules
const chalk = require('chalk');
const Discord = require("discord.js");
const schedule = require("node-schedule");
const fs = require("fs");
//const YTDL = require("ytdl-core-discord");
const superagent = require("superagent");
const ms = require("ms");
//moneySystem
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
const Money = require("./models/money.js");
//vnc
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
//musicVars
global.servers = {};


//event loader
fs.readdir("./events/",(err, files) =>{
  console.info("Loading event listener.");
  if(err) console.error(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.warn("Couldn't find events.");
    return;
  }
  jsfile.forEach((f, i) =>{
    let props = require(`./events/${f}`);
    console.info(`${f} loaded.`);
    bot.on(jsfile, props.bind(null, bot));
  });
});

//command loader
fs.readdir("./commands/", (err, files) => {
  console.info("Loading general commands.");
  if(err) console.error(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.warn("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.info(`${f} loaded.`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./commands/admin/", (err, files) => {
  console.info("Loading adm commands.");
  if(err) console.error(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.warn("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/admin/${f}`);
    console.info(`${f} loaded.`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./nsfw/", (err, files) => {
  console.info("Loading nsfw commands.");
  if(err) console.error(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.warn("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) =>{
    let props = require(`./nsfw/${f}`);
    console.info(`${f} loaded.`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./music/", (err, files) => {
  console.log("Loading music commands.");
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) =>{
    let props = require(`./music/${f}`);
    console.log(`${f} loaded.`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./commands/superagent/", (err, files) => {
  console.info("Loading search engines.");
  if(err) console.error(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.warn("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/superagent/${f}`);
    console.info(`${f} loaded.`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./commands/rag/", (err, files) => {
  console.info("Loading ragnarok related.");
  if(err) console.error(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.warn("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/rag/${f}`);
    console.info(`${f} loaded.`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./commands/help/", (err, files) => {
  console.info("Loading helper.");
  if(err) console.error(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.warn("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/help/${f}`);
    console.info(`${f} loaded.`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./commands/services/", (err, files) => {
  console.info("Loading Services.");
  if(err) console.error(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.warn("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/services/${f}`);
    console.info(`${f} loaded.`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./currency/", (err, files) => {
  console.info("Loading bank protocols.");
  if(err) console.error(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.warn("Couldn't find commands.");
    return;
  }
  jsfile.forEach((f, i) =>{
    let props = require(`./currency/${f}`);
    console.info(`${f} loaded.`);
    bot.commands.set(props.help.name, props);
  });
});


bot.login(process.env.BOT_TOKEN);