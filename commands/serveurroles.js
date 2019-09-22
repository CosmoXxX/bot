module.exports.run = async (bot, message, args) => {
    const Discord = require('discord.js')
    const { Pagination } = require('discord-pagination.js')
    const guilds = message.guild.roles.map(role => role ).sort((a, b) => b.position - a.position).join(" | ")
    const embed = new Discord.RichEmbed()
    embed.setTitle('Voici les rôles du serveur')
    embed.setDescription('{content}')
    embed.setFooter('Page {pageIndex}/{pagesCount}')

            const pag = new Pagination()
            pag.setClient(client)
            pag.setFormat(embed)
            pag.setMaxItemsPerPage(3)
            pag.setContent(guilds)
            // Infinite time
            pag.on('start', async() => {
                await pag.message.react(':arrow_right:')
                await pag.message.react('🗑️')
                await pag.message.react(':arrow_right:')
            })
            pag.on('react', async(user, reaction) => {
             
                if(reaction.name == ":arrow_right:") {
                    pag.turn(1)
                    pag.update()
                }
                if(reaction.name == '🗑️') {
                    pag.end()
                    pag.delete()
                }
                if(reaction.name == ":arrow_left:") {
                    pag.turn(-1)
                    pag.update()
                }
     
            })
            await pag.build(message.channel)
        
}
module.exports.config = {
    name: "serveurroles",
    aliases: ["sr"]
}