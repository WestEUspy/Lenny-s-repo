exports.run = (client, message, args) => {
	let member = message.mentions.members.first() || message.guild.members.get(args[0]);
	if(!member)
		return message.reply("Please mention a valid member of this server");
	message.channel.send({embed: {
		color: 0xff8800,
		url: member.user.avatarURL,
		author: {
			name: member.user.username + "'s avatar"
		},
		image: {
			url: member.user.avatarURL
		},
		timestamp: new Date(),
		footer: {
			icon_url: message.author.avatarURL,
			text: "Requested by: " + message.author.tag,
		}
	}});
}