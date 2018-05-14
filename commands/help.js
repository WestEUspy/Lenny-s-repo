exports.run = (client, message, args) => {
	message.author.send("Here you go!")
	message.author.send({embed: {
		color: 0xff8800,
		fields: [{
			name: "About the bot",
			value: "Name: `Lenny McLemony#1468`\nCreator: `WestEUspy#6020`\nPrefix: `L.`"
			},
			{
			name: "General Commands",
			value: "`help` - This lol\n`server` - Sends and invite to West's server\n`invite` - Sends bot invite link\n`ping` - Sends Latency and API Latency\n`say <message>` - Makes the bot say something\n`avatar <mention>` - replies with mentioned user's avatar"
			},
			{
			name: "Other Bots (Coming Soon™)",
			value: "`Moderation` - Fair Play#9756 (Prefix: `P.`)\n`Music` - GameJuicer#3035 (Prefix: `J.`)\n`Game Stats` - Eternal Gamer (Prefix: `G.`)"
			}
		],
		timestamp: new Date(),
		thumbnail: {
			url: "https://cdn.discordapp.com/attachments/443519879627407380/444532987074445323/LennyThink.png"
		},
		footer: {
			icon_url: message.author.avatarURL,
			text: "Requested by: " + message.author.tag
		}
	  }
	});
}