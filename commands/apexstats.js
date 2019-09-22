module.exports.run = (client, message, args) => {
    const plat = args[0]
    const username = args[1]
    const Apex = require('apex-api');
    const apex = new Apex('b9e7a845-2b70-40d0-8ffc-07045f2836f7');
    const { MessageEmbed } = require("discord.js")
    apex.user(username, plat).then((res) => {
   console.log(res.data.children[0].stats);
       const embed = new MessageEmbed()
       .setColor("0040ff")
       .setThumbnail(res.data.metadata.avatarUrl)
       .setTitle('__Statistiques Apex__')
       .addField("- `Pseudo` ",`**${res.data.metadata.platformUserHandle}**`,true)
       .addField("- `ID` →", `**${res.data.id}**`||"**Non fournis**",true)
       .addField("- `Niveau` →", `**${res.data.metadata.level}**`||"**0**",true)
       .addField("- `Tuer` →", `**${res.data.children[0].stats[0].displayValue}**`||"**0**",true)
       .addField("- `Sniper Kills` →", `**${res.data.children[0].stats[1].displayValue}**`||"**0**",true)
       .addField("- `Wins` →", `**${res.data.children[0].stats[3].displayValue}**`||"**0**",true)
       message.channel.send(embed)
    })
    .catch((err) => {
       if (err) { 
   return message.channel.send('Une erreur est survenue avec l\'api')
     }
    });
     }
    module.exports.config = {
        name: "apexstats",
        aliases: []
    }