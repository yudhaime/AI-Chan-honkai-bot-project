import * as Discord from 'discord.js'

export default (client:Discord.Client, message:Discord.Message, args:string[]) => {
  message.delete()
  message.channel.send('Ping?').then((ping:Discord.Message) => {
    ping.edit({embed: {
      color: message.member.displayColor,
      author: {
        name: `${message.member.displayName}'s Ping Connection:`,
        icon_url: message.member.user.displayAvatarURL
      },
      description: `\`\`\`${ping.createdTimestamp - message.createdTimestamp}ms...\`\`\` \nMy ping from server is **${Math.round(client.ping)}ms**`,
    }})
  })
}
