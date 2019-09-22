
const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
const Joker = require("blague.xyz");
const joker = new Joker({
    token: "ESC.CqoMAm-G50-rjM2.52L1GMYU.r1qovog_n6BZtFqMbzwaL6M.m1q9rVaY_yr"
});
 
// Obtenir une blague aléatoire
joker.random().then((joke) => {
const em = new MessageEmbed()
.setTitle("__Blague aléatoire__")
.setDescription(`${joke.question}\n||${joke.answer}||`)
}
module.exports.config = {
name: "blague",
aliases: []
}
