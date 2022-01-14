const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const botconfig = require("../../botconfig.json");
const idtable = require("../../tables/idtable.json");
const url = require("../../tables/urltable.json");

module.exports = {
	config: {
		name: "nowplaying",
        class: "Música",
		description: "Mostra detalhes sobre a música atual."
	},
    run: async (bot, message, args) => {
        return;
    }
}