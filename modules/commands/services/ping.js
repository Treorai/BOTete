const Discord = require("discord.js");
const userids = require("../../../tables/userids.json");

module.exports = {
	config: {
		name: "ping",
		description: "Calcula a latência.",
		usage: ".ping",
		aliases: [""]
	},
	run: async (bot, message, args) => {
        if(message.author.id==userids.BOTete) {message.delete().catch(err=>{});}
        const m = await message.channel.send("Pong!");
        m.edit(`Latency is ${m.createdTimestamp - message.createdTimestamp}ms right now. API Latency is ${Math.round(bot.ping)}ms`);
	}
}