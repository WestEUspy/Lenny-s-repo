exports.run = (client, message, args) => {
	if(message.author.id !== "336978244471488523") return message.reply("only the owner of the bot can do this!");
	if(!args[0]) return message.reply("don't forget the guild's ID :P");
	if(!args[0] in client.guilds) return message.reply("invalid guild ID");

	leave(bot.guilds.find("id", args[0]))
		.catch(console.error)
	console.log(`Left the guild ${args[0]}`);
	message.reply("Left guild "+args[0]);
}