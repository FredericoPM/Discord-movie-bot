const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
bot.login(config.token);

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {
    if(message.content.toLowerCase() === 'shutdown'){
        message.channel.send('Shutting down...').then(() => bot.destroy());
    }
});

bot.on('message', message =>{
    if(message.content.toLowerCase() === 'fred'){
        message.channel.send('lindo')
    }
});