﻿const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543184328717500446")
setInterval(function() {
channel.send(`#credit`);
}, 30)
})

client.login("NDYzMDE0ODQyMjUzNDQzMDgy.Dzts_Q.U3ec3qyyh3hUoSaIII1Ac5ZkGyI");
