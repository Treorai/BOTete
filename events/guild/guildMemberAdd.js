const Discord = require("discord.js");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = async (bot, member) => {
    console.log(`${member.user.username} joined ${member.guild.name}.`);

    //Welcome message to ${Wipink}
    if(member.guild.id == idtable.guilds.wipink){
        let welcomeWipinkEmb = new Discord.RichEmbed()
            .setTitle('Oii '+member.user.username+'! Seja bem vindo ao discord da Wipink!')
            .setDescription('Se você chegou aqui para participar de um grupo no ragnarok, as salas já estão abertas, é só colar com nós!\nCaso tenha chegado por outro motivo, por favor, apresente-se enquanto esperamos alguém vir buscá-lo.')
            .setTimestamp()
            .setColor(botconfig.colors.defaultcolor)
            .setFooter("BOTete | Recepcionista", bot.user.displayAvatarURL);
        
        bot.channels.get(idtable.channels.wipinkwelcome).send(welcomeWipinkEmb);
    }

    //Welcome message to ${Lenhadores Guild}
    if(member.guild.id == idtable.guilds.lenhadores){
        let welcomeLenhadoresEmbed = new Discord.RichEmbed()
            .setTitle('Saudações, '+member.user.username+'!')
            .setDescription('Como vocês chegou até aqui, imagino que já saiba quem somos, mas nós ainda não te conhecemos, e estamos anciosos para saber quem você é. Por favor, apresente-se enquanto espera nossa Staff.\n Ja chamei alguém para providenciar uma recepção mais humana pra você.\nAgradeço sua paciência e enquanto espera, por favor leia as '+` ${bot.channels.get('520432740273750036')}`+`\nSe quiser falar diretamente com alguém da liderança, basta mencionar ${member.guild.roles.get('271357413288837120')}.`)
            .setTimestamp()
            .setColor(botconfig.colors.defaultcolor)
            .setFooter("BOTete | Recepcionista", bot.user.displayAvatarURL);
       
        bot.channels.get(idtable.channels.ldbwelcome).send(welcomeLenhadoresEmbed);
    }

    //Welcome message to other channels:
}