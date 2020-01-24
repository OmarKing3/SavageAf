const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("586876925566386177")
setInterval(function() {
channel.send(`OMAR KING OMAR KING OMAR KING OMAR KING`);
}, 30)
})

client.login(process.env.BOT_TOKEN);