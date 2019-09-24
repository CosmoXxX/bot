const { MessageEmbed } = require("discord.js")
module.exports.run = async  (bot, message, args) => {
let verifLevels = ["Aucun", Faible", "Moyen", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
        let region = {
            "brazil": ":flag_br: Braizil",
            "eu-central": ":flag_eu: Europe Centrale",
            "singapore": ":flag_sg: Singapoure",
            "us-central": ":flag_us: U.S. Central",
            "sydney": ":flag_au: Sydney",
            "us-east": ":flag_us: U.S. Est",
            "us-south": ":flag_us: U.S. SuD",
            "us-west": ":flag_us: U.S. Ouest",
            "eu-west": ":flag_eu: Western Europe",
            "vip-us-east": ":flag_us: VIP U.S. Est",
            "london": ":flag_gb: London",
            "amsterdam": ":flag_nl: Amsterdam",
            "hongkong": ":flag_hk: Hong Kong",
            "russia": ":flag_ru: Russie",
            "southafrica": ":flag_za:  Sud Afrique"
        };
        let serverembed = new MessageEmbed()
        .setColor(0x0040ff)
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("Nom", message.guild.name, true)
        .addField("ID", message.guild.id, true)
        .addField("Créateur", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Région", region[message.guild.region], true)
        .addField("Total | Humains | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Niveau de vérification", verifLevels[message.guild.verificationLevel], true)
        .addField("Salons", `${message.guild.channels.filter(channel => channel.type === 'voice').size} Voice Channels / ${message.guild.channels.filter(channel => channel.type === 'text').size} Text Channels`, true)
        .addField("Rôles ", message.guild.roles.size, true)
        .setThumbnail(message.guild.iconURL)
        message.channel.send(serverembed)
}
module.exports.config = {
name: "serveurinfos",
aliases: ["si","Serveurinfos","serveurinfo"]
}
