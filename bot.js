const botsettings = require("./botsettings.json");
const Discord = require("discord.js");
const prefix = botsettings.prefix

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
	console.log(`Bot is ready! ${bot.user.username}`);

    try {
		let link = await bot.generateInvite(["ADMINSTRATOR"]);
		console.log(link);
 	} catch(e) {
			console.log(e.stack);
   	}
});

	bot.on("message", message => {
		if(message.author.bot) return;
		if(message.channel.type === "dm") return;

		let messageArray = message.content.split(" ");
		let command = messageArray[0];
		let args = messageArray.slice(1);

		if(!command.startsWith(prefix)) return;

		if(command === `${prefix}userinfo`) {
			let embed = new Discord.RichEmbed().setAuthor(message.author.username).setDescription("@everyone This is the user's info!");

			message.channel.send(embed);
		}
	});

bot.login(botsettings.token);
