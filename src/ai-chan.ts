import * as Discord from 'discord.js'

import gacha from './command/gacha'
import help from './command/help'
import ping from './command/ping'
import stigmata from './command/stigmata'
import valkyrie from './command/valkyrie'
import weapon from './command/weapon'

let client:Discord.Client
let dbl

export const start = () => {
  client = new Discord.Client()

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
    
    function random () {
      interface Status {
        type: 'PLAYING' | 'STREAMING' | 'LISTENING' | 'WATCHING'
        message: string
    }
      const statuses:Status[] = [{
        type: 'PLAYING',
        message: 'Honkai Impact 3rd'
      }, {
        type: 'PLAYING',
        message: 'with Captain\'s Crystal'
      }, {
        type: 'PLAYING',
        message: 'with Hyperion\'s Electricity'
      }, {
        type: 'WATCHING',
        message: 'Mei sleep'
      }, {
        type: 'WATCHING',
        message: 'HOMU FANTASY'
      }, {
        type: 'WATCHING',
        message: 'all captain here'
      }, {
        type: 'LISTENING',
        message: 'to music from Bunny 19c'
      }, {
        type: 'LISTENING',
        message: 'Himeko mad at me'
    }]
    
    const status = statuses[Math.floor(Math.random() * statuses.length)]
    client.user.setActivity(status.message, {type: status.type})
  }
    setInterval(random, 600000)
  })

  const executeCommand = (command:string, actions: {
    commands:string[],
    lambda:(client:Discord.Client, message:Discord.Message, args:string[], ...params:any[]) => void,
    directMessage:boolean,
    params?:any
  }[], client:Discord.Client, message:Discord.Message, args:string[]):void => {
    const action = actions.find(action =>
      action.commands.includes(command.toLowerCase())
    )
    if(action) {
      if(message.channel.type === 'dm' && !action.directMessage) {
        message.channel.send('Captain if you are looking for me, I\'ll be standing by in the hyperion~')
      } else {
        action.lambda(client, message, args, ...action.params && Array.isArray(action.params[command.toLowerCase()])? action.params[command.toLowerCase()]:[])
      }
    }
  }
  client.on('message', message => {
      const startsWith = [PREFIX, `<@${client.user.id}> `, `<@!${client.user.id}> `].find(startWith => message.content.startsWith(startWith))
      if(startsWith && !message.author.bot && message.author.id !== client.user.id) {
        const contents = message.content.slice(startsWith.length).split(' ').filter(word => word !== '')
        executeCommand(
          contents[0],
          [{
            commands: ['gacha'],
            lambda: gacha,
            directMessage: false
          }, {
            commands: ['help'],
            lambda: help,
            directMessage: true,
            params: {
              ...['help'].reduce((object, key) => ({...object, [key]:[PREFIX]}), {})
            }
          }, {
            commands: ['ping'],
            lambda: ping,
            directMessage: false
          }, {
            commands: ['s', 'stig', 'stigma', 'stigmata'],
            lambda: stigmata,
            directMessage: false
          }, {
            commands: ['v', 'valk', 'valkyrie', 'r', 'recom', 'recommendation', 'f', 'form','formation'],
            lambda: valkyrie,
            directMessage: false,
            params: {
              ...['v', 'valk', 'valkyrie'].reduce((object, key) => ({...object, [key]:['detail']}), {}),
              ...['f', 'form', 'formation'].reduce((object, key) => ({...object, [key]:['formation']}), {}),
              ...['r', 'recom', 'recommendation'].reduce((object, key) => ({...object, [key]:['recommendation']}), {})
            }
          }, {
            commands: ['w', 'weap', 'weapon'],
            lambda: weapon,
            directMessage: false
          }],
          client,
          message,
          contents.slice(1)
        )
      }
  })

  if(AI_CHAN_TOKEN) {
    client.login(AI_CHAN_TOKEN)
  }
}

export const stop = () =>
  client.destroy()