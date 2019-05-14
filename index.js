//setTables
const botconfig = require("./botconfig.json");
const color = require("./tables/colortable.json");
const userids = require("./tables/userids.json");
const swearpd = require("./tables/sweartable.json");
const url = require("./tables/urltable.json");
const hensourse = require("./nsfw/hensoursetable.json");
const nsfwchtable = require("./nsfw/nsfwchannelidtable.json");
const chtable = require("./tables/channelidtable.json");
//setModules
const chalk = require('chalk');
const Discord = require("discord.js");
const schedule = require("node-schedule");
const fs = require("fs");
const superagent = require("superagent");
//setVnC
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const subnick = botconfig.activity;


//command loader
fs.readdir("./commands/", (err, files) => {
  if(err) return;
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) return;

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./commands/admin/", (err, files) => {
  if(err) return;
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) return;

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/admin/${f}`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./nsfw/", (err, files) => {
  if(err) return;
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) return;

  jsfile.forEach((f, i) =>{
    let props = require(`./nsfw/${f}`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./commands/superagent/", (err, files) => {
  if(err) return;
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) return;

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/superagent/${f}`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./commands/rag/", (err, files) => {
  if(err) return;
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) return;

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/rag/${f}`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./commands/help/", (err, files) => {
  if(err) return;
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) return;

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/help/${f}`);
    bot.commands.set(props.help.name, props);
  });
});
fs.readdir("./commands/services/", (err, files) => {
  if(err) return;
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0) return;

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/services/${f}`);
    bot.commands.set(props.help.name, props);
  });
});


bot.on("ready", async () => {
  console.log("Bot Online!");
    bot.user.setActivity(subnick);

    //UFSM Reminders
    schedule.scheduleJob('0 11 * * 7', async function(){
      bot.channels.get(chtable.armadareminders).send("Agendar RU!");
    });

    //autoposts 
    let autoboobs = schedule.scheduleJob('10 * * * *', async function(){
      bot.channels.get(nsfwchtable.armttaboobch).send(`.boobs`);
    });

    let autobutts = schedule.scheduleJob('30 * * * *', async function(){
      bot.channels.get(nsfwchtable.armttabuttch).send(`.butts`);
    });

    let autohen = schedule.scheduleJob('50 * * * *', async function(){
      bot.channels.get(nsfwchtable.armtthench).send(`.hentai`);
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
    let forecastss = schedule.scheduleJob('10 7 * * *', async function(){
      bot.channels.get(chtable.weeweemusic).send(".forecast poa");
      bot.channels.get(chtable.weeweemusic).send(".forecast rj");
    });

  });

bot.on("guildCreate", guild => {
  bot.channels.get(chtable.console).send(`Bot joined ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  }
);

bot.on("guildDelete", guild => {
  bot.channels.get(chtable.console).send(`Bot removed from ${guild.name} (id: ${guild.id})`);
  }
);

bot.on("guildMemberAdd", (member) => {
  bot.channels.get(chtable.console).send(`${member.user.username} joined ${member.guild.name}.`);
  
    //Welcome message to ${Lenhadores Guild}
      if(member.guild.id == "270745177671335938"){
    
      let welcomeLenhadoresEmb = new Discord.RichEmbed()
        .setTitle('Saudações, '+member.user.username+'!')
        .setDescription('Como vocês chegou até aqui, imagino que já saiba quem somos, mas nós ainda não te conhecemos, e estamos anciosos para saber quem você é. Por favor, apresente-se enquanto espera nossa Staff.\n Ja chamei alguém para providenciar uma recepção mais humana pra você.\nAgradeço sua paciência e enquanto espera, por favor leia as '+` ${bot.channels.get('520432740273750036')}`+`\nSe quiser falar diretamente com alguém da liderança, basta mencionar ${member.guild.roles.get('271357413288837120')}.`)
        .setTimestamp()
        .setFooter("BOTete service(receptionist)", "https://cdn.discordapp.com/attachments/550835295143198722/550838466624225282/BOTETE_PROFILE.png");
      bot.channels.get("520433945322455060").send(welcomeLenhadoresEmb);
    }
  }
);

bot.on("message", async message => {

    //music rules
    if(message.guild.id == "527281390417608724" && message.channel.id !== chtable.weeweemusic && message.content.toLowerCase().startsWith(';;play') ){
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

//Event Logger
bot.on("channelCreate", (channel) => {
  bot.channels.get(chtable.console).send(`Channel "${channel.name}" was created in ${channel.guild.name}.`);
});

bot.on("channelDelete", (channel) => {
  bot.channels.get(chtable.console).send(`Channel "${channel.name}" was deleted from ${channel.guild.name}.`);
});

bot.on("guildBanAdd", (guild, user) => {
  bot.channels.get(chtable.console).send(`${user.username} was banned from ${guild.name}.`);
});

bot.on("guildMemberRemove", (member) => {
  bot.channels.get(chtable.console).send(`${member.user.username} left ${member.guild.name}.`);
});

bot.on("error", (error) => {
    return;
});


bot.login(process.env.BOT_TOKEN);