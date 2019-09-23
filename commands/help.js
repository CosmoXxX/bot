module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const lang = require('../lang/fr.json').help
    const embed = new Discord.MessageEmbed()

.setAuthor(message.author.username, message.author.avatarURL)
.setColor('0040ff')
.setTitle(lang.title)
.setThumbnail(client.user.avatarURL)
.addField("📰 **Informations** →", "`help`")
.addField(lang.jeux,"`apextstats` , `brstats` , `fnstats` , `skin`")
.addField(":tada: **Fun** →","`blague` , `joke`")
.addField(":police_car: **Staff** →", "`eval`")
.setTimestamp()
.setFooter(message.author.username,message.author.avatarURL)
message.channel.send(embed)
}
module.exports.config = {
    name: "help",
    aliases: ["h"]
}
