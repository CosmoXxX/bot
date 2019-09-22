module.exports.run = (client, message, args) => {
    const lang = require('../lang/fr.json').fnstats
    try {
    const lang = require('../lang/fr.json').fnstats
const Discord = require("discord.js");
const Client = require("fortnite")
const fortnite = new Client("b9e7a845-2b70-40d0-8ffc-07045f2836f7")

let username = args.join(" ")

if(!username) return message.reply(lang.notag)//Please provide a username");

let data = fortnite.user(username, 'platform [pc, xbl, psn]').then(data => {

    let stats = data.stats
    let lt = stats.lifetime
    let em = new Discord.MessageEmbed()
    .setTitle(lang.title)
    .setColor('0040ff')
    .addField(lang.nom, `**${data.username}**`,true)
    .addField(lang.id, `**${data.id}**`,true)
    .addField(lang.kd, `**${lt.kd}**`||'0',true)  
    .addField(lang.kill, `**${lt.kills}**`||'0',true) 
    .addField(lang.match, `**${lt.matches}**`||'0',true)  
    .addField(lang.top1, `**${lt.wins}**`||'0',true) 
    .addField(lang.top3, `**${lt.top_3}**`||'0',true) 
    .addField(lang.top5, `**${lt.top_5}**`||'0',true) 
    .setTimestamp()
    .setFooter(message.author.username,message.author.avatarURL)
    message.channel.send(em)

})
}catch(e) {
    message.channel.send(lang.err)
    }
}
module.exports.config = {
    "name": "fnstats",
    "aliases": []
}