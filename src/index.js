require('dotenv').config();


const { Client, IntentsBitField} = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildEmojisAndStickers,
        IntentsBitField.Flags.GuildMessageReactions,
    ],
});
 
client.on("ready", () => console.log(client.user.tag))

client.on('messageCreate', (msg) =>{
    if (msg.author.bot){
        return;
    }
    const shershen = msg.guild.emojis.cache.find((emoji) => emoji.name === 'SHERSHNI');
    
    if (msg.content.toLowerCase().includes("шершни") || msg.content.toLowerCase().includes("дыра")){
        msg.react(shershen);
        msg.reply({ content: 'Шершни, в атаку!!', fetchReply: true})
    }

    if (msg.content.toLowerCase().includes("засосу")){
        msg.channel.send(`${shershen}${shershen}${shershen}${shershen}${shershen}${shershen}${shershen}`);
    }

    if (Math.random() <= 0.01) {
        const emojis = Array.from(msg.guild.emojis.cache.values());
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        msg.react(randomEmoji);
    }

});



client.login(process.env.TOKEN);
