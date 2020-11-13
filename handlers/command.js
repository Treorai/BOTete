const { readdirSync } = require("fs");

module.exports = (bot) =>{
    const load = dirs =>{
        const commands = readdirSync(`./modules/${dirs}/`).filter(d => d.endsWith('.js'));
        for(let file of commands){
            const pull = require(`../modules/${dirs}/${file}`);
            bot.commands.set(pull.config.name, pull);
            if(pull.config.aliases) pull.config.aliases.forEach(a => bot.aliases.set(a, pull.config.name));
        };
    };

    [
        "commands/moderation",
        "ragdb",
        "commands/services",
        "helper",
        //"currency",
        //"music",
        "nsfw"
    ].forEach(x => load(x));
    
};