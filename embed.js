const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = function getEmbed(title, imgURL){
    var embed = new Discord.MessageEmbed()
    .setColor('032541')
    .setTitle(title)
    .setAuthor('FredericoPM | Brunognovaes', 'https://i.imgur.com/N0gvrCp.png', 'https://github.com/FredericoPM/Discord-movie-bot')
    .setImage(imgURL)
    return embed;
}
