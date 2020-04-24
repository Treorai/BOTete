const Discord = require("discord.js");
const { readdirSync } = require("fs");
const { stripIndents } = require("common-tags");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");
const classes = require("../../../tables/classes.json");

module.exports = {
	config: {
		name: "help",
        class: "Serviço",
		description: "Lista os comandos do bot.",
		usage: "<comando>",
		aliases: ["h", "commands", "ajuda"]
	},
	run: async (bot, message, args) => {
        
        const embed = new Discord.RichEmbed()
            .setColor(botconfig.colors.defaultcolor)
            .setAuthor(`${message.guild.me.displayName} Help`, bot.user.displayAvatarURL);

        if(!args[0]) {
            embed.setDescription("Estes são os comandos disponíveis:");
            embed.setFooter(`© ${message.guild.me.displayName}`, bot.user.displayAvatarURL);

            const cmdlist = bot.commands.filter(c => c.config.accessibleby !== "Bot Owner");

            classes.forEach(classes => {
                const dir = cmdlist.filter(c => c.config.class === classes);
                const capitalise = classes.slice(0, 1).toUpperCase() + classes.slice(1);
                try {
                    embed.addField(`❯ ${capitalise} [${dir.size}]:`, dir.map(c => `\`${c.config.name}\``).join(" "))
                } catch(e) {
                    console.log(e);
                }
            });

            return message.channel.send(embed)
        } else {
            let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase());
            if(!command) return message.channel.send(embed.setTitle("Comando não encontrado.").setDescription(`Do \`${botconfig.prefix}help\` for the list of the commands.`));
            command = command.config;

            embed.setDescription(stripIndents` \`<argumento obrigatório>\` \`[argumento opicional]\`\n\`#\`= número \`@\`= marcação \n
            **Comando:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}
            **Descrição:** ${command.description || "No Description provided."}
            **Uso correto:** ${command.usage ? `\`${botconfig.prefix}${command.name} ${command.usage}\`` : `\`${botconfig.prefix}${command.name} ${command.usage}\``}
            **Permissão:** ${command.accessableby || "Todos"}`);

            return message.channel.send(embed);
        }
	}
}