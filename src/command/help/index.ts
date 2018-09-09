import * as Discord from 'discord.js'

import generateHelps from './helps'

export default (client:Discord.Client, message:Discord.Message, args:string[], prefix:string) => {
  const lowerCaseArgs = args.map(arg => arg.toLowerCase())
  const helps = generateHelps(prefix)
  if(message.channel.type === 'text') {
    message.reply('I will send you my help via private message...')
  }
  if(helps.reduce((commands, help) => [...commands, ...help.commands], []).some(command => lowerCaseArgs.includes(command))) {
    helps.forEach(help => {
      if(help.commands.some(command => lowerCaseArgs.includes(command))) {
        message.author.send({
          embed: {
            title: `${client.user.username} reporting on usage of ${help.commands[help.commands.length - 1]}!`,
            description: 'Below are some example and notes...',
            color: 14748150,
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: 'Duty reported'
            },
            thumbnail: {
              url: client.user.avatarURL
            },
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            fields: [{
              name: 'Description',
              value: help.description
            }, {
              name: 'Examples',
              value: help.examples.map(example => '`' + PREFIX + example + '`').join('\n')
            }, {
              name: 'Notes',
              value: help.notes.join('\n')
            }].filter(help => help.value !== '')
          }
        })
      }
    })
  } else {
    message.author.send({
      embed: {
        title: `${client.user.username} reporting for duty!`,
        description: 'You can see below are all the commands I can do in our hyperion',
        color: 14748150,
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: 'For more bot information: !info'
        },
        thumbnail: {
          url: client.user.avatarURL
        },
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        fields: [...helps.reduce((all, help) => {
          const category = all.find(category => category.name === help.category)
          if(category) {
            category.value = category.value + `, \`${PREFIX + help.commands[help.commands.length - 1]}\``
            return [...all.filter(category => category.name !== help.category), category]
          } else {
            return [...all, {
              name: help.category,
              value: '`' + PREFIX + help.commands[help.commands.length - 1] + '`'
            }]
          }
        }, []), {
          name: '__\n__',
          value: `Use ${PREFIX}help <command> for more information about the command.\nExample: <${PREFIX}help stigmata>` + 
          `\nPREFIX may be different from each server, to know the prefix that used just mention me and said prefix.\n` + 
          `Example \`@Ai Chan Prefix\`\n__\n__`
        }
        ]
      }
    })
  }
}
