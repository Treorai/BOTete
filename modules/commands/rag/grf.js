const Discord = require("discord.js");
const botconfig = require("../../../botconfig.json");
const idtable = require("../../../tables/idtable.json");
const url = require("../../../tables/urltable.json");

module.exports = {
	config: {
		name: "grf",
		description: "Página de downloads das GRFs.",
		aliases: ["grfs", "ttgrf"]
	},
	run: async (bot, message, args) => {
        var grfembed = new Discord.RichEmbed()
            .setTitle("Página de Downloads de GRFs")
            .setDescription("O projeto TTGRF foi descontinuado em Julho de 2019. A última versão funcional (v6.0) ainda está disponível para download e uso, mas não receberá mais suporte. As futuras atualizações no bRO podem fazer a(s) GRF(s) não fucionarem.\nAlém disso, o uso de GRFs é passível de punição pelas regras de conduta do jogo. Use por sua conta e risco.")
            .setColor(botconfig.colors.defaultcolor)
            .addField("TTGRF v6.0", url.grfassets.TTGRF, false)
            .addField("Chão cinza (graymap)", url.grfassets.graymap, false)
            .addField("Roupas jRO", url.grfassets.ttgrfnewcostume, false)
            .addField("GRF Editor", url.grfassets.GRFEditor, false)
            .addField("Changelog", url.grfassets.ttgrfchangelog, false)
            .addField("About", url.grfassets.ttgrfabout, false)
            .setFooter("GRFs by Treorai | Latest TTGRF version: 6.0", url.grfassets.grfcubeicon);

        message.channel.send(grfembed);
	}
}