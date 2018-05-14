const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`https://random.dog/woof.json`);

  message.channel.send({embed: {
	  color: 0xff8800,
	  title: ":dog:",
	  image: {
		  url: body.url
	  }
  }})
}