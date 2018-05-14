var Discord = require("discord.js");

var client = new Discord.Client();

const fs = require("fs");

const config = require("./config.json");

const superagent = require("superagent");

client.on("ready", () => {
  console.log(`BOT UP AND RUNNING\nGUILDS: ${client.guilds.size}\nMEMBERS: ${client.users.size}`); 

  client.user.setActivity("with WestEUspy | L.help");
});

client.on("guildCreate", guild => {
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
});

client.on("guildDelete", guild => {
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
});

client.on("message", async message => {

  if(message.author.bot) return;
  
  console.log(message.guild.name + ": " + message.channel.name + ": " + message.author.username + ": " + message.content);
  
  if(message.content === "hello") {
	  message.reply("hello there! 😏");
  }
  
  if(message.content === "no u") message.reply("no your mom gay lol");

  if(message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if(command === "ping") {
	const m = await message.channel.send("Ping?");
	m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
	return;
  } catch (err) {
      console.log(err);
  }

  console.log(message.guild.name + ": " + message.channel.name + ": Invalid command by " +message.author.tag);
});

client.login(config.token);
