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
            .setDescription('Eu sou BOTete, e estarei lhe servindo nesse discord. Para ver minha lista de comandos, basta digitar `.help`, e se precisar de ajuda com algum comando, digite esse comando e em seguida o comando para qual deseja receber ajuda.')
            .addField('O que fazer agora?', 'Se você chegou aqui para participar de um grupo no Ragnarok, as salas estão abertas, pode entrar que já estamos te esperando. Se for convidado, provavelmente nem está lendo isso. E caso tenha chegado sem convite, por favor, fale um pouco sobre você e como chegou aqui, que logo alguém virá recebe-lo(a).')
            .addField('Sobre o Discord', 'As salas referentes ao Ragnarok já estão liberadas. Temos 3 canais de voz que podem ser utilizados para fazer grupos, instâncias, etc.\nPara os outros jogos, utilize a sala correspondente a cada jogo para não misturar os assuntos. Temos dois canais de voz para possíveis grupo vs grupo naqueles jogos.\nPor fim, um canal para resenha, com o respectivo bate-papo para assuntos diversos. É normalmente nesse canal que todos se reúnem.\nSinta-se em casa!')
            .addField('Entediado?', 'No Cantinho do BOT, eu providencio conteúdo programado para entretenimento. Recomendo que você desligue as notificações para estes canais, pois eu spammo bastante coisa lá, e as notificações podem aborrecer você.\nTenha preferência para usar o canal '+`${bot.channels.get(idtable.channels.wipinkmusic)}`+' quando for pedir pra eu tocar música. Quando quiser música, certifíque-se antes de que eu não esteja já tocando música em outro canal.\nSe for usar algum comando meu listado como NSFW, utilize as salas correspondentes para esse conteúdo.')
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