const ytdl = require("ytdl-core");

module.exports = function player(connection, message){
	var server = servers[message.guild.id];
	
	server.dispatcher = connection.playStream(ytdl(server.queue[0]), {filter: "audioonly"});
	server.queue.shift();
	
	server.dispatcher.on("end", function(){
		if(server.queue[0]){
			player(connection, message);
		} else {
			connection.disconnect();
		}
	});
};