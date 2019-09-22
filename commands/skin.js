module.exports.run = (client, message, args) => {
    const lang = require('../lang/fr.json').skin
    const Discord = require("discord.js");
const user = args.join(" ")
const em = new Discord.MessageEmbed()
.setColor('0040ff')
.setTitle(lang.title)
.setURL(`https://minotar.net/skin/${user}`)
.setImage(`https://minotar.net/body/${user}/100.png`)
message.channel.send(em)
}
module.exports.config = {
    name: "skin",
    aliases: []
}
