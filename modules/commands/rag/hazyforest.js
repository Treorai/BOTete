const Discord = require ("discord.js");
const color = require("../../../tables/colortable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "hazyforest",
		description: "Guia do Labirinto da Neblina.",
		usage: ".hazyforest",
		aliases: ["labirintodaneblina"]
	},
	run: async (bot, message, args) => {
        var hazyTitle = new Discord.RichEmbed()
            .setTitle("Labirinto da Neblina")
            .setURL("https://browiki.org/wiki/Labirinto_da_Neblina")
            .setDescription("Loki aparece na ilha 56 após matar o Dragão Púrpura.\nO MVP pode estar nos andares 28, 38, 49, 50, 55, 59, 60 ou 68.")
            .setColor(color.PoringPink)
            .setFooter("BOTete search(Hazy Forest) | Designed by Treorai", url.browikipic);

        var hazy0 = new Discord.RichEmbed()
            .setTitle("Árvore de Tom")
            .setColor(color.PoringPink)
            .setImage('https://cdn.discordapp.com/attachments/550835336750825474/550835444237991939/hazy0.png')
            .setFooter("BOTete search(Hazy Forest) | Designed by Treorai", url.browikipic);

        var hazy1 = new Discord.RichEmbed()
            .setTitle("Árvore de Tomba")
            .setColor(color.PoringPink)
            .setImage('https://cdn.discordapp.com/attachments/550835336750825474/550835452870000641/hazy1.png')
            .setFooter("BOTete search(Hazy Forest) | Designed by Treorai", url.browikipic);

        var hazy2 = new Discord.RichEmbed()
            .setTitle("Árvore de Remi")
            .setColor(color.PoringPink)
            .setImage('https://cdn.discordapp.com/attachments/550835336750825474/550835459077570581/hazy2.png')
            .setFooter("BOTete search(Hazy Forest) | Designed by Treorai", url.browikipic);

        var hazy3 = new Discord.RichEmbed()
            .setTitle("Árvore de Rem")
            .setColor(color.PoringPink)
            .setImage('https://cdn.discordapp.com/attachments/550835336750825474/550835464534491166/hazy3.png')
            .setFooter("BOTete search(Hazy Forest) | Designed by Treorai", url.browikipic);

        var hazy4 = new Discord.RichEmbed()
            .setTitle("Árvore de Ron")
            .setColor(color.PoringPink)
            .setImage('https://cdn.discordapp.com/attachments/550835336750825474/550835472117530624/hazy4.png')
            .setFooter("BOTete search(Hazy Forest) | Designed by Treorai", url.browikipic);

        var hazy5 = new Discord.RichEmbed()
            .setTitle("Árvore de Rover")
            .setColor(color.PoringPink)
            .setImage('https://cdn.discordapp.com/attachments/550835336750825474/550835476513423370/hazy5.png')
            .setFooter("BOTete search(Hazy Forest) | Designed by Treorai", url.browikipic);

        var hazy6 = new Discord.RichEmbed()
            .setTitle("Árvore de Mona")
            .setColor(color.PoringPink)
            .setImage('https://cdn.discordapp.com/attachments/550835336750825474/550835483375304714/hazy6.png')
            .setFooter("BOTete search(Hazy Forest) | Designed by Treorai", url.browikipic);

        var hazy7 = new Discord.RichEmbed()
            .setTitle("Árvore de Namon")
            .setColor(color.PoringPink)
            .setImage('https://cdn.discordapp.com/attachments/550835336750825474/550835489184153600/hazy7.png')
            .setFooter("BOTete search(Hazy Forest) | Designed by Treorai", url.browikipic);

        var hazy8 = new Discord.RichEmbed()
            .setTitle("Árvore de Neo e Aracnídeo")
            .setColor(color.PoringPink)
            .setImage('https://cdn.discordapp.com/attachments/550835336750825474/550835494645399552/hazy8.png')
            .setFooter("BOTete search(Hazy Forest) | Designed by Treorai", url.browikipic);

        var hazy9 = new Discord.RichEmbed()
            .setTitle("Árvore de Tito")
            .setColor(color.PoringPink)
            .setImage('https://cdn.discordapp.com/attachments/550835336750825474/550835501557350416/hazy9.png')
            .setFooter("BOTete search(Hazy Forest) | Designed by Treorai", url.browikipic);

        var hazyA = new Discord.RichEmbed()
            .setTitle("Árvore de Pumba")
            .setColor(color.PoringPink)
            .setImage('https://cdn.discordapp.com/attachments/550835336750825474/550835505994924033/hazyA.png')
            .setFooter("BOTete search(Hazy Forest) | Designed by Treorai", url.browikipic);

        var hazyB = new Discord.RichEmbed()
            .setTitle("Árvore de Tete")
            .setColor(color.PoringPink)
            .setImage('https://cdn.discordapp.com/attachments/550835336750825474/550835513821757450/hazyB.png')
            .setFooter("BOTete search(Hazy Forest) | Designed by Treorai", url.browikipic);


            message.channel.send(hazyTitle).then(msg =>{
                message.channel.send(hazy0).then(msg =>{
                    message.channel.send(hazy1).then(msg =>{
                        message.channel.send(hazy2).then(msg =>{
                            message.channel.send(hazy3).then(msg =>{
                                message.channel.send(hazy4).then(msg =>{
                                    message.channel.send(hazy5).then(msg =>{
                                        message.channel.send(hazy6).then(msg =>{
                                            message.channel.send(hazy7).then(msg =>{
                                                message.channel.send(hazy8).then(msg =>{
                                                    message.channel.send(hazy9).then(msg =>{
                                                        message.channel.send(hazyA).then(msg =>{
                                                            message.channel.send(hazyB);
                                                        })
                                                    })

                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
            ;
	}
}