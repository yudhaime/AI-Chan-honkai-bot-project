import * as Discord from 'discord.js'

export const findChannels = (client:Discord.Client, name:string) =>
  client.guilds.map(guild =>
    guild.channels.filter((channel, key, collection) =>
      channel.type === 'text' && (channel as any).name.indexOf(name) === 0
    ).first() as Discord.TextChannel
  ).filter(channel => !!channel)