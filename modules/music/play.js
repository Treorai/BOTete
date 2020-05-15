const {RichEmbed} = require("discord.js");
const ytdl = require("ytdl-core");
const search = require("yt-search");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");
let commandfile = require('./playlink.js');

module.exports = {
	config: {
		name: "play",
		class: "Música",
		description: "Faz uma busca no youtube e mostra uma lista de músicas para reprodução. Digite o número da música a ser reproduzida.",
		usage: "<nome de música>"
	},
	run: async (bot, message, args) => {
		
		search(args.join(' '), function(err, res){
			if(err) return message.channel.send('Pesquisa inválida ou ocorreu um erro. Contate Teteh pra arrumar saporra.');
			
			let videos = res.videos.slice(0, 10);
			
			//constuctor
			let resp = `\`\`\`md\n##  Escolha uma das opções entre 1 e ${videos.length}:\n\n`;
			for(var i in videos){
				resp += `${parseInt(i)+1}. ${videos[i].title}\n`;
			}
			resp += "```";
			
			message.channel.send(resp);
			
			const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;
			const collector = message.channel.createMessageCollector(filter);
			
			collector.videos = videos;
			collector.once('collect', function(m){

				let selectedSong = this.videos[parseInt(m.content)-1];

				let selectedEmbed = new RichEmbed()
				.addField("Música:", selectedSong.title, true)
				.addField('\u200b', '\u200b', true)
				.addField("Duração:", selectedSong.timestamp, true)
				.setAuthor(`${message.author.username} adicionou à fila:`, `${message.author.displayAvatarURL}`)
				.setFooter(`© ${message.guild.me.displayName}`, url.imgurls.musicIcon)
				.setTimestamp();
				message.channel.send(selectedEmbed);

				commandfile.run(bot, message, selectedSong.url);
			});
		
		});
	
		

	}
}