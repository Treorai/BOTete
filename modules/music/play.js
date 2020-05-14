const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const search = require("yt-search");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "play",
        class: "Música",
		description: "Faz uma busca no youtube e mostra uma lista de músicas para reprodução. Digite o número da música a ser reproduzida.",
		usage: "<args>"
	},
	run: async (bot, message, args) => {
		
		search(args.join(' '), function(err, res){
			if(err) return message.channel.send('Pesquisa inválida ou ocorreu um erro. Contate Teteh pra arrumar saporra.');
			
			let videos = res.videos.slice(0, 10);
			
			let resp = `Escolha uma das opções \`1-${videos.length}\`:\n`;
			for(var i in videos){
				resp += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`;
			}
			
			message.channel.send(resp);
			
			const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;
			const collector = message.channel.createMessageCollector(filter);
			
			collector.videos = videos;
			collector.once('collect', function(m){
				let commandfile = require('./playlink.js');
				commandfile.run(bot, message, [this.videos[parseInt(m.content)-1].url]);
			});
		
		});
	
		

	}
}