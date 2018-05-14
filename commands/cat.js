const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

  let {body} = await superagent
  .get(`http://aws.random.cat/meow`);

  message.channel.send({embed: {
	  color: 0xff8800,
	  title: ":cat:",
	  image: {
		  url: body.url
	  }
  }})

}