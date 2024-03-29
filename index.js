const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", async () => {
    console.log(`${client.user.username} is now Active!`);
    client.user.setActivity('*help');
})

const fs = require('fs');
client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    const jsfile = files.filter(f => f.endsWith('.js'));
    if (jsfile.length <= 0) return console.log("[FS] Couldn't Find Commands!");

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, Object.assign(pull, { 
            triggers: [ pull.config.name, ...(pull.config.aliases || []) ]
        }));
    })
});

client.on("message", async message => {
    const prefix = "*";
    if(message.author.bot || message.channel.type === 'dm') return;
    if(!message.content.startsWith(prefix)) return;

    const [ cmd, ...args ] = message.content.slice(prefix.length).split(/ +/g) 

    let commandFile = client.commands.find(c => c.triggers.includes(cmd.toLowerCase()));
    if(commandFile) commandFile.run(client, message, args)
})

client.login("NjIwMTM3NDA0Nzk5NjQ3NzYz.XYcTpw.4QVZ7AOrDhZdkpCg6ebo8_KLJ9k")