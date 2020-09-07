const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const{ token, prefix } = require("./config.json");
const { join } = require("path");
const { Client, MessageEmbed } = require('discord.js');

client.on('ready', () => {
    console.log('Bot is Online!');
});

client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'What is the meaning of life?') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
      const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('Meaning of life')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription('Dm Patriots Breeze#1661 for more info.');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
  });

  client.on('message', message => {
    // If the message is "how to embed"
    if (message.content === 'error') {
      // We can create embeds using the MessageEmbed constructor
      // Read more about all that you can do with the constructor
      // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
      const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('ERROR!')
        // Set the color of the embed
        .setColor(0xff0000)
        // Set the main content of the embed
        .setDescription('ERROR! Dm Patriots Breeze#1661 or The MG (MC DEV)#4193 for more information.');
      // Send the embed to the same channel as the message
      message.channel.send(embed);
    }
  });


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

        if (command === 'ping') {
        message.channel.send('Pong.');
    } 

    {
        if (command === 'beep') {
            message.channel.send('Boop.');
        }
    }
    {
        if (command === 'code') {
            message.channel.send('testingtesting');
        }
    }
    {
        if (command === 'hehe') {
            message.channel.send('hehe');
        }
    }
    {
        if (command === 'help') {
            message.channel.send('Support will be with you shortly! Support Server: https://discord.gg/jGTzpCc');
        }
    }
    {
        if (command === 'private') {
            message.channel.send('Did you mean PrivateNodes?!?! Here is an invite: https://discord.gg/Y6SCUNq');
        }
    }
    {
        if (command === 'test') {
            message.channel.send('one, two, fucking three.');
        }
    }
    {
        if (command === 'porn') {
            message.channel.send('NSFW is for people 18 and above. Are you?');
        }
    }
});

client.login(token);