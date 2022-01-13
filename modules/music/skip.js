const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const search = require("yt-search");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "skip",
        class: "Música",
		description: "Para a música atual e reproduz a próxima da fila."
	},
    run: async (bot, message, args) => {
        //
    }
}