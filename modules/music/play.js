const { MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

const queue = new Map();

module.exports = {
	config: {
		name: "play",
		class: "Música",
		description: "Faz uma busca no youtube e mostra uma lista de músicas para reprodução. Digite o número da música a ser reproduzida.",
		usage: "<nome de música>"
	},
	run: async (bot, message, args) => {

		const voice_channel = message.member.voice.channel;
		if(!voice_channel) return message.channel.send("Você precisa estar em uma sala pra eu tocar musiquinhas.");

		const server_queue = queue.get(message.guild.id);

		//play
		if(!args.length) return message.channel.send('Digite um título para pesquisar.');
		let song = {};

		//arg url?
		if(ytdl.validateURL(args[0])){
			const song_info = await ytdl.getInfo(args[0]);
			song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url};
		} else {
			//not url
			const video_finder = async(query) =>{
				const videoResult = await ytSearch(query);
				return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
			}

			const video = await video_finder(args.join(' '));
			if(video){
				song = {title: video.title, url: video.url};
			} else {
				message.channel.send("Erro ao encontrar video.");
			}
		}
		
		if(!server_queue){
			const queue_constructor = {
				voice_channel: voice_channel,
				text_channel: message.channel,
				connection: null,
				songs: []
			}

			queue.set(message.guild.id, queue_constructor);
			queue_constructor.songs.push(song);

			try{
				const connection = await voice_channel.join();
				queue_constructor.connection = connection;
				video_player(message.guild, queue_constructor.songs[0]);
			} catch (err){
				queue.delete(message.guild.id);
				message.channel.send("Erro ao conectar.");
				throw err;
			}
		} else {
			server_queue.songs.push(song);
			return message.channel.send(`**${song.title} foi adicionado à fila.`);
		}
	}
}

const video_player = async (guild, song) => {
	const song_queue = queue.get(guild.id);

	if(!song){
		song_queue.voice_channel.leave();
		queue.delete(guild.id);
		return;
	}

	const stream = ytdl(song.url, {filter: 'audioonly'});
	song_queue.connection.play(stream, {seek: 0, volume: 0.5})
	.on('finish', () => {
		song_queue.songs.shift();
		video_player(guild, song_queue.songs[0]);
	});
	await song_queue.text_channel.send(`Tocando ${song.title}.`);
}