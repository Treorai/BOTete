const Discord = require("discord.js");
const userids = require("../../tables/userids.json");
const color = require("../../tables/colortable.json");
const url = require("../../tables/urltable.json");
const adchannels = require("../../tables/adchtable.json");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    let tomute = message.mention.members.first() || message.guild.members.get(args[0]);
    if(!tomute) return message.reply("Couldn't find user.");
    let muterole = message.guild.roles.find(`name`, "muted");
    if(!muterole){
        try{
            muterole = await message.guild.createRole({
                name: "muted",
                permissions:[]
            });
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SPEAK: false
                });
            });
        }catch(e){
            console.log(e.stack);
        }
    }

    let mutetime = args[1];
    if(!mutetime) return message.reply("Set up time for that");

    await(tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> fica xiu aí!`);

    setTimeout(function(){
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> tá liberado, irmão!`)
    }, ms(mutetime));
}

module.exports.help = {
    name: "mute"
}