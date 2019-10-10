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
const YTDL = require("ytdl-core-discord");
const superagent = require("superagent");
const ms = require("ms");
//vnc
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const subnick = botconfig.activity;
//musicVars
global.servers = {};

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


bot.on("ready", async () => {
  //login
    console.log(`Bot online, serving ${bot.users.size} users, in ${bot.guilds.size} guilds.`);
    bot.user.setActivity(subnick);

  //guildDedicated
    //UFSM Reminders
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

    let autobird = schedule.scheduleJob('00 * * * *', async function(){
      bot.channels.get(chtable.weeweepupies).send(`.nander`);
    });

    let autocat = schedule.scheduleJob('20 * * * *', async function(){
      bot.channels.get(chtable.weeweepupies).send(`.meow`);
    });

    let autodog = schedule.scheduleJob('40 * * * *', async function(){
      bot.channels.get(chtable.weeweepupies).send(`.auau`);
    });

    //Forecast
    let autoforecasts = schedule.scheduleJob('50 7 * * *', async function(){
      bot.channels.get(chtable.weeweemusic).send(".forecast poa");
      bot.channels.get(chtable.weeweemusic).send(".forecast rj");
      bot.channels.get(chtable.weeweemusic).send(".forecast sp");
    });

  });

bot.on("guildCreate", guild => {
    console.info(`New guild joined ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    }
);

bot.on("guildDelete", guild => {
    console.info(`Bot removed from ${guild.name} (id: ${guild.id})`);
    }
);

bot.on("guildMemberAdd", (member) => {
  console.info(`${member.user.username} joined ${member.guild.name}.`);
  
    //Welcome message to ${Lenhadores Guild}
      if(member.guild.id == guildtable.lenhadores){
        let welcomeLenhadoresEmb = new Discord.RichEmbed()
        .setTitle('Saudações, '+member.user.username+'!')
        .setDescription('Como vocês chegou até aqui, imagino que já saiba quem somos, mas nós ainda não te conhecemos, e estamos anciosos para saber quem você é. Por favor, apresente-se enquanto espera nossa Staff.\n Ja chamei alguém para providenciar uma recepção mais humana pra você.\nAgradeço sua paciência e enquanto espera, por favor leia as '+` ${bot.channels.get('520432740273750036')}`+`\nSe quiser falar diretamente com alguém da liderança, basta mencionar ${member.guild.roles.get('271357413288837120')}.`)
        .setTimestamp()
        .setFooter("BOTete service(receptionist)", "https://cdn.discordapp.com/attachments/550835295143198722/550838466624225282/BOTETE_PROFILE.png");
      bot.channels.get("520433945322455060").send(welcomeLenhadoresEmb);

      console.info(`A welcome message was sent to ${member.guild.name}.`);
    }
  }
);

bot.on("message", async message => {

    //music rules
    if(message.guild.id == guildtable.weeweecrew && message.channel.id !== chtable.weeweemusic && message.content.toLowerCase().startsWith(';;play') ){
      message.reply(`use o canal ${bot.channels.get(chtable.weeweemusic)} para pedir musiquinhas!`);
    }

    //replies
    if(message.author.id == userids.treorai && message.content.toLowerCase().endsWith('to mentindo?')){
          message.channel.send("Não está, senhor. É tudo verdade!").then(console.log(`Message answer sent to ${message.author.username} at channel ${message.channel.name} of ${message.guild.name}.`));
    }
    if(message.author.id == userids.razzor && message.content.toLowerCase().endsWith('ão')){
      message.reply("MEU PAU NA SUA MÃO!!").then(console.log(`Message reply sent to ${message.author.username} at channel ${message.channel.name} of ${message.guild.name}.`));
    }
    if(message.author.id == userids.razzor && message.content.toLowerCase().endsWith('aco')){
      message.reply("MEU PAU NO SEU BURACO!!").then(console.log(`Message reply sent to ${message.author.username} at channel ${message.channel.name} of ${message.guild.name}.`));
    }
    if(message.author.id == userids.razzor && message.content.toLowerCase().endsWith('ico')){
      message.reply("MEU PAU NO SEU FURICO!!").then(console.log(`Message reply sent to ${message.author.username} at channel ${message.channel.name} of ${message.guild.name}.`));
    }

    //reacts
    for (var i = 0; i < swearpd.word.length; i++) {
      if (message.content.toLowerCase().includes(swearpd.word[i])) {message.react('😠').then(console.log(`Reacted to ${message.author.username}'s curse.`)).catch(console.error);}
    }
    if(message.content.toLowerCase().includes('kkkk')) {message.react('😂').then(console.log(`Reacted to ${message.author.username}'s laugh.`)).catch(console.error);}
    

    //command handler
    if(message.author.bot && message.author.client.user.id!==userids.BOTete) return;
    if(message.content.indexOf(botconfig.prefix) !== 0) return;
    const args = message.content.slice(botconfig.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    let commandfile = bot.commands.get(command);
    if(commandfile) commandfile.run(bot,message,args);
  }
);
//Voice Channel Logger
bot.on('voiceStateUpdate', (oldMember, newMember) => {
  if(oldMember.guild.id == guildtable.weeweecrew){ //weeweecrew
      if(oldMember.voiceChannel === undefined && newMember.voiceChannel !== undefined) {
        // User Joins a voice channel
        bot.channels.get(chtable.weeweemusic).send(`${newMember.user.username} joined ${newMember.voiceChannel}.`);
 
      } else if(newMember.voiceChannel === undefined){
        // User leaves a voice channel
        bot.channels.get(chtable.weeweemusic).send(`${oldMember.user.username} left ${oldMember.voiceChannel}.`);
      } else if(oldMember.voiceChannel !== newMember.voiceChannel){
        // User changes voice channel
        bot.channels.get(chtable.weeweemusic).send(`${newMember.user.username} switched to ${newMember.voiceChannel}.`);
      };

  };
  //notWWC

});

//Event Logger
bot.on("channelCreate", (channel) => {
  console.info(`Channel "${channel.name}" was created in ${channel.guild.name}.`);
});

bot.on("channelDelete", (channel) => {
  console.info(`Channel "${channel.name}" was deleted from ${channel.guild.name}.`);
});

bot.on("guildBanAdd", (guild, user) => {
  console.info(`${user.username} was banned from ${guild.name}.`);
});

bot.on("guildMemberRemove", (member) => {
  console.info(`${member.user.username} left ${member.guild.name}.`);
});

bot.on("error", (error) => {
    console.error("Unexpected error occurred.");
});


bot.login(process.env.BOT_TOKEN);