module.exports.run = async (client,  message, args) => {
let user = message.mentions.users.first() || message.author;
let avatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=2048`;
 
const ameClient = require("amethyste-api")
 const ameApi = new ameClient("token ")a
let image = ameApi.generate("glitch", { 	 "url" : avatar }) .then(image => {
      console.log(image)
message.channel.send({
   files: [{
       attachment: image, 
       name: "glitch.png" 
   }] 
})
    }).catch(err => {
      throw err;
    })
}
module.exports.config = {
name: "glitch",
aliases: []
}
 
