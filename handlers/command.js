const { readdirSync } = require("fs");

module.exports = (bot) =>{
    const load = dirs =>{
        const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
        for(let file of commands){
            const pull = require(`../commands/${dirs}/${file}`);
            bot.commands.set(pull.help.name, pull);
            if(pull.help.aliases) pull.help.aliases.forEach(a => bot.aliases.set(a, pull.help.name));
        };
    };
    ["help", "moderation", "rag", "services", "superagent"].forEach(x => load(x));
};