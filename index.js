const Discord = require("discord.js");
const bot = new Discord.Client();

["commands", "aliases"].forEach(x => bot[x] = new Discord.Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

bot.login(process.env.BOT_TOKEN);