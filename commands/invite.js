exports.run = (client, message, args) => {
	message.channel.sendMessage("Use this link to add me to your awesome server!\n"+config.invite);
}