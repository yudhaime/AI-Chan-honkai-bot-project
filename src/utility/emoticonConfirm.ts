import * as Discord from 'discord.js'
import {sequencial} from './promise'

export default (message:Discord.Message, question:string, confirm:() => void) => {
  message.channel.send(
    '`' + question + '`'
  ).then((question:Discord.Message) => {
    const answers = ['✅', '❎']
    sequencial(answers.map((answer) => () => question.react(answer)))
    const reactionCollector = question.createReactionCollector((reaction, user) =>
      user.id === message.author.id &&
      answers.reduce((valid, emoticon) => valid || emoticon.includes(reaction.emoji.name), false)
    , {time:60000})
    reactionCollector.on('collect', reaction => {
      if(reaction.users.some(user => user.id === message.author.id)) {
        if(reaction.emoji.name === '✅' && confirm !== undefined) {
          reactionCollector.stop()
          confirm()
        } else if(reaction.emoji.name === '❎') {
          reactionCollector.stop()
        }
      }
    })
    reactionCollector.on('end', collected => {
      question.clearReactions()
      question.delete()
    })
  })
}
