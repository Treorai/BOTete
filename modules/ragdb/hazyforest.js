const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "hazyforest",
        class: "Ragnarok Online",
        description: "Guia do Labirinto da Neblina.",
        usage: "",
		aliases: ["labirintodaneblina"]
	},
	run: async (bot, message, args) => {

        let pages = [
            'https://cdn.discordapp.com/attachments/743628745369190501/776928259454664744/hazy0.png',
            'https://cdn.discordapp.com/attachments/743628745369190501/776928266626924564/hazy1.png',
            'https://cdn.discordapp.com/attachments/743628745369190501/776928273308712970/hazy2.png',
            'https://cdn.discordapp.com/attachments/743628745369190501/776928278207660072/hazy3.png',
            'https://cdn.discordapp.com/attachments/743628745369190501/776928284293332992/hazy4.png',
            'https://cdn.discordapp.com/attachments/743628745369190501/776928290929377310/hazy5.png',
            'https://cdn.discordapp.com/attachments/743628745369190501/776928298135584799/hazy6.png',
            'https://cdn.discordapp.com/attachments/743628745369190501/776928305076240434/hazy7.png',
            'https://cdn.discordapp.com/attachments/743628745369190501/776928311984390155/hazy8.png',
            'https://cdn.discordapp.com/attachments/743628745369190501/776928318335352872/hazy9.png',
            'https://cdn.discordapp.com/attachments/743628745369190501/776928325394104320/hazyA.png',
            'https://cdn.discordapp.com/attachments/743628745369190501/776928332926418954/hazyB.png'
        ];
        let page = 1;
        let tree = [
            'Árvore de Tom',
            'Árvore de Tomba',
            'Árvore de Remi',
            'Árvore de Rem',
            'Árvore de Ron',
            'Árvore de Rover',
            'Árvore de Mona',
            'Árvore de Namon',
            'Árvore de Neo e Aracnídeo',
            'Árvore de Tito',
            'Árvore de Pumba',
            'Árvore de Tete'
        ]

        const embed = new Discord.RichEmbed()
            .setTitle("Guia: Labirinto da Neblina")
            .setURL("https://browiki.org/wiki/Labirinto_da_Neblina")
            .setImage(pages[0])
            .setDescription(tree[0])
            .setColor(botconfig.colors.poringpink)
            .setFooter(`Page ${page} of ${pages.length}`)
            
        message.channel.send(embed).then(msg => {
            msg.react('⏮️').then( r => {
                msg.react('◀️').then( r => {
                    msg.react('▶️');
                    
                    const beginingFilter = (reaction, user) => reaction.emoji.name === '⏮️' && user.id === message.author.id;
                    const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀️' && user.id === message.author.id;
                    const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶️' && user.id === message.author.id;
                    
                    const begining = msg.createReactionCollector(beginingFilter, { time: 720000 });
                    const backwards = msg.createReactionCollector(backwardsFilter, { time: 720000 });
                    const forwards = msg.createReactionCollector(forwardsFilter, { time: 720000 });
                    
                    begining.on('collect', r => {
                        if(page === 1) return;
                        page = 1;
                        embed.setImage(pages[page-1]);
                        embed.setDescription(tree[page-1]);
                        embed.setFooter(`Page ${page} of ${pages.length}`);
                        msg.edit(embed);
                    });

                    backwards.on('collect', r => {
                        if(page === 1) return;
                        page--;
                        embed.setImage(pages[page-1]);
                        embed.setDescription(tree[page-1]);
                        embed.setFooter(`Page ${page} of ${pages.length}`);
                        msg.edit(embed);
                    });
                    
                    forwards.on('collect', r => {
                        if(page === pages.length) return;
                        page++;
                        embed.setImage(pages[page-1]);
                        embed.setDescription(tree[page-1]);
                        embed.setFooter(`Page ${page} of ${pages.length}`);
                        msg.edit(embed);
                    });
                });
            });
        });
	}
}