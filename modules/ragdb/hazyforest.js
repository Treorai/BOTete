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
            'https://cdn.discordapp.com/attachments/550835336750825474/550835444237991939/hazy0.png',
            'https://cdn.discordapp.com/attachments/550835336750825474/550835452870000641/hazy1.png',
            'https://cdn.discordapp.com/attachments/550835336750825474/550835459077570581/hazy2.png',
            'https://cdn.discordapp.com/attachments/550835336750825474/550835464534491166/hazy3.png',
            'https://cdn.discordapp.com/attachments/550835336750825474/550835472117530624/hazy4.png',
            'https://cdn.discordapp.com/attachments/550835336750825474/550835476513423370/hazy5.png',
            'https://cdn.discordapp.com/attachments/550835336750825474/550835483375304714/hazy6.png',
            'https://cdn.discordapp.com/attachments/550835336750825474/550835489184153600/hazy7.png',
            'https://cdn.discordapp.com/attachments/550835336750825474/550835494645399552/hazy8.png',
            'https://cdn.discordapp.com/attachments/550835336750825474/550835501557350416/hazy9.png',
            'https://cdn.discordapp.com/attachments/550835336750825474/550835505994924033/hazyA.png',
            'https://cdn.discordapp.com/attachments/550835336750825474/550835513821757450/hazyB.png'
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