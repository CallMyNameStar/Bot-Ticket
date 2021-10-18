const Command = require('../../structures/Command');
const config = require('../../config.json');
const Discord = require('discord.js');

module.exports = class extends Command {
    constructor(...args) {
      super(...args, {
        name: 'ticket',
        aliases: ["create", "setup"],
        description: `Create A Ticket sent to a channel.`,
        category: 'Ticket',
        cooldown: 3,
        userPermission: ['MANAGE_GUILD']
      });
    }

    async run(message, args) {

      
        let channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

        if(!channel){
            channel = message.channel;
        };
        

        let ticketEmbed = new Discord.MessageEmbed()
       .setTitle(`Tickets!`)
       .setColor(config.color || '#00FF93')
       .setTimestamp()
       .setDescription(`Please react with '🎫'} to create a ticket`)
       .setFooter(`Bot created by AlmightyNan`)



        channel.send(ticketEmbed).then(m => {
        m.react(config.emoji || '🎫');
        });


      }
};