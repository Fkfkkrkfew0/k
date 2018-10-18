const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("500272956677816320")
setInterval(function() {
channel.send(`اني كفو`);
}, 25)
})




client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
