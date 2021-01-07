const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'Nzk1MzE5NjY3NjIyNDEyMjg5.X_HpKQ.yZoQ9Wfk9VDMz-lRok8B9bJVdZg';
bot.login(token);

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