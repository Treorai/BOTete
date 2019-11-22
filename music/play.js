const Discord = require("discord.js");
const userids = require("../tables/userids.json");
const color = require("../tables/colortable.json");
const url = require("../tables/urltable.json");
//const YTDL = require("ytdl-core-discord");
/*
async function Play(connection, message) {
	const server = servers[message.guild.id];
	server.dispatcher = connection.playOpusStream(await YTDL(server.queue[0], {filter: "audioonly"}));
	server.queue.shift();

	server.dispatcher.on('end', () => {
		if (server.queue[0]) {
			Play(connection, message);
		} else { connection.disconnect(); }
	});
}
*/
module.exports.run = async (bot, message, args) => {
/*    if (!servers[message.guild.id]) servers[message.guild.id] = { queue: [] };


	message.member.voiceChannel.join()
		.then(connection => {
			const server = servers[message.guild.id];
			server.queue.push(args[0]);
			Play(connection, message);
        });
*/
message.channel.send("indisponível :c");
}


module.exports.help = {
    name: "play"
}