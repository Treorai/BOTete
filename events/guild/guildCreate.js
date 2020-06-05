module.exports = async (bot, guild) => {
    console.log(`Joined ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
    if(guild.systemChannel){
        guild.systemChannel.send(`What is this?`).then(guild.systemChannel.send(`What is this place?`))
    };
}