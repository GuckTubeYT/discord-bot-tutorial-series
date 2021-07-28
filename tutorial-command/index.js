const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () {
  console.log("Bot is Ready")
})

client.on("message", async message => {
  const command = message.content; //For make easier
  if (command === "hello") { // if command is hello
    message.channel.send("Hello World") // bot message "Hello World"
  }
})

client.login("Your token")
