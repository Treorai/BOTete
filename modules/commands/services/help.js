const Discord = require("discord.js");
const { readdirSync } = require("fs");
const { stripIndents } = require("common-tags");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "help",
		description: "Lista os comandos do bot.",
		usage: "<comando>",
		aliases: ["h", "commands", "ajuda"]
	},
	run: async (bot, message, args) => {
        const embed = new Discord.RichEmbed()
            .setColor(botconfig.colors.defaultcolor)
            .setAuthor(`${message.guild.me.displayName} Help`, bot.user.displayAvatarURL);

        if(!args[0]) {
            let load = dirs =>{
                const categories = readdirSync(`./modules/${dirs}/`).filter(d => d.endsWith('.js'));
            };
            [
                "commands/moderation",
                "commands/rag",
                "commands/services",
                "commands/superagent",
                "currency",
                "music",
                "nsfw"
            ].forEach(x => load(x));

            console.log(load);


            /*
            const groupMod = readdirSync("../../commands/moderation/");
            const groupRag = readdirSync("../../commands/rag/");
            const groupSvc = readdirSync("../../commands/services/");
            const groupSag = readdirSync("../../commands/superagent/");
            const groupBnk = readdirSync("../../currency/");
            const groupMsc = readdirSync("../../music/");
            const groupNsf = readdirSync("../../nsfw/");

            const groups = [groupMod, groupRag, groupSvc, groupSag, groupBnk, groupMsc, groupNsf ];

            embed.setDescription(`These are the avaliable commands for ${message.guild.me.displayName}`)
            embed.setFooter(`© ${message.guild.me.displayName}`, bot.user.displayAvatarURL);

            categories.forEach(category => {
                const dir = bot.commands.filter(c => c.config.category === category)
                const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1)
                try {
                    embed.addField(`❯ ${capitalise} [${dir.size}]:`, dir.map(c => `\`${c.config.name}\``).join(" "))
                } catch(e) {
                    console.log(e)
                }
            })

            return message.channel.send(embed)
        } else {
            let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase())
            if(!command) return message.channel.send(embed.setTitle("Invalid Command.").setDescription(`Do \`${prefix}help\` for the list of the commands.`))
            command = command.config

            embed.setDescription(stripIndents`The bot's prefix is: \`${prefix}\`\n
            **Command:** ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}
            **Description:** ${command.description || "No Description provided."}
            **Usage:** ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : "No Usage"}
            **Accessible by:** ${command.accessableby || "Members"}
            **Aliases:** ${command.aliases ? command.aliases.join(", ") : "None."}`)

            return message.channel.send(embed)*/
        }
		
	}
}