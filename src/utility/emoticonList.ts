import * as Discord from 'discord.js'
import {sequencial} from './promise'

const displayList = (message:Discord.Message, title:string, list:string[], next:() => void, previous:() => void, last:() => void, first:() => void, tenthIndex:number, pageIndex:string, color:number) => {
  const embed = {
    color,
    fields:[{
      name: '**' + title + '**',
      value: list.map((item, index) => `\`${tenthIndex * 10 + index + 1}.\` ${item}`).join('\n') + (pageIndex? '\n__\n__' +
        'Just click or tap the emoji below':''
      )
    }]
  }
  if(pageIndex) {
    embed['footer'] = {
      text: pageIndex
    }
  }
  message.channel.send({embed}).then((question:Discord.Message) => {
    const answers = []
    if(first) answers.push('⏮')
    if(previous) answers.push('⏪')
    if(next) answers.push('⏩')
    if(last) answers.push('⏭')
    sequencial(answers.map((answer) => () => question.react(answer)))
    const reactionCollector = question.createReactionCollector((reaction, user) => 
      user.id === message.author.id &&
      answers.reduce((valid, emoticon) => valid || emoticon.includes(reaction.emoji.name), false)
    , {time:60000})
    reactionCollector.on('collect', reaction => {
      if(reaction.users.some(user => user.id === message.author.id)) {
        if(reaction.emoji.name === '⏮' && first !== undefined) {
          reactionCollector.stop()
          first()
          question.delete()
        } else if(reaction.emoji.name === '⏪' && previous !== undefined) {
          reactionCollector.stop()
          previous()
          question.delete()
        } else if(reaction.emoji.name === '⏩' && next !== undefined) {
          reactionCollector.stop()
          next()
          question.delete()
        } else if(reaction.emoji.name === '⏭' && last !== undefined) {
          reactionCollector.stop()
          last()
          question.delete()
        }
      }
    })
    reactionCollector.on('end', collected => {
      if(message.channel.type === 'text')
        question.clearReactions()
    })
  })
}
export default (message:Discord.Message, title:string, list:string[], color?:number) => {
  let index = 0
  const totalPage = Math.ceil(list.length / 10)
  const recursiveDisplayList = (index:number) => {
    displayList(
      message,
      title,
      list.slice(index * 10, (index + 1) * 10),
      totalPage > index + 1?
        (() => recursiveDisplayList(index + 1)):undefined,
      index > 0?
        (() => recursiveDisplayList(index - 1)):undefined,
      totalPage > index + 1?
        (() => recursiveDisplayList(totalPage - 1)):undefined,
      index > 0?
        (() => recursiveDisplayList(0)):undefined,
      index,
      totalPage > 1? `page ${index + 1} of ${totalPage}`:undefined,
      color
    )
  }
  recursiveDisplayList(index)
}
