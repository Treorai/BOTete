const {Client, Collection} = require("discord.js");
const bot = new Client();

["commands", "aliases"].forEach(x => bot[x] = new Collection());
["command", "event"].forEach(x => require(`./handlers/${x}`)(bot));

const queue = new Map();

bot.login(process.env.BOT_TOKEN);