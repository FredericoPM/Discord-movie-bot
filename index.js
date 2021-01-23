const Discord = require('discord.js');
const getEmbed = require('./embed.js');
const bot = new Discord.Client();
const config = require("./config.json");

bot.login(config.token);

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', message => {
    message.content = message.content.toLowerCase();
    switch(message.content){
        case '!break':
            message.channel.send('Shutting down...').then(() => bot.destroy());
        break;
        case '!fred':
            message.channel.send(getEmbed("FRED", "https://i.imgur.com/C2nPuMk.png"));
        break;
        case '!help':
            message.channel.send('nem!');
        break;
    }
});