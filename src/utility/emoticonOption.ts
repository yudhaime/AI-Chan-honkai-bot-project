import * as Discord from 'discord.js'

import * as PromiseUtil from './promise'
import * as StringUtil from './string'

const emoticons = [
  '1⃣',
  '2⃣',
  '3⃣',
  '4⃣',
  '5⃣',
  '6⃣',
  '7⃣',
  '8⃣',
  '9⃣',
  '🔟'
]
const askQuestions = (message:Discord.Message, question:string, options:{name:string, action:(question:Discord.Message) => void}[], next:() => void, previous:() => void, last:() => void, first:() => void, pageIndex:string, reverse?:() => void) => {
  message.channel.send(
    '**' + question + '**\n__\n__' +
    options.map((option, index) =>
      ` \`${StringUtil.fillInBlank(index + 1, 3, '.')} \`${option.name}`.replace('``', '')
    ).join('\n')
    + '\n__\n__' +
    'Just click or tap the emoji below' +
    (pageIndex? (
    `\n*- ${pageIndex}*`):'') + '\n'
  ).then((question:Discord.Message) => {
    const answers = emoticons.slice(0, options.length)
    if(reverse) answers.unshift('⏫')
    if(first) answers.push('⏮')
    if(previous) answers.push('⏪')
    if(next) answers.push('⏩')
    if(last) answers.push('⏭')
    PromiseUtil.sequencial(answers.map((answer) => () => question.react(answer)))
    const reactionCollector = question.createReactionCollector((reaction, user) =>
      user.id === message.author.id &&
      answers.reduce((valid, emoticon) => valid || emoticon.includes(reaction.emoji.name), false)
    , {time:60000})
    reactionCollector.on('collect', reaction => {
      if(reaction.users.some(user => user.id === message.author.id)) {
        const chosen = emoticons.indexOf(reaction.emoji.name)
        if(chosen !== -1) {
          reactionCollector.stop()
          options[chosen].action(question)
        } else if(reaction.emoji.name === '⏫' && reverse !== undefined) {
          question.delete()
          reverse()
        } else if(reaction.emoji.name === '⏮' && first !== undefined) {
          question.delete()
          first()
        } else if(reaction.emoji.name === '⏪' && previous !== undefined) {
          question.delete()
          previous()
        } else if(reaction.emoji.name === '⏩' && next !== undefined) {
          question.delete()
          next()
        } else if(reaction.emoji.name === '⏭' && last !== undefined) {
          question.delete()
          last()
        }
      }
    })
    reactionCollector.on('end', collected => {
      if(message.channel.type === 'text')
        question.clearReactions()
    })
  })
}
export default (message:Discord.Message, question:string, options:{name:string, action:(question:Discord.Message) => void}[], reverse?:() => void) => {
  let index = 0
  const totalPage = Math.ceil(options.length / 10)
  const recursiveAskQuestion = (index:number) => {
    askQuestions(
      message,
      question,
      options.slice(index * 10, (index + 1) * 10),
      totalPage > index + 1?
        (() => recursiveAskQuestion(index + 1)):undefined,
      index > 0?
        (() => recursiveAskQuestion(index - 1)):undefined,
      totalPage > index + 1?
        (() => recursiveAskQuestion(totalPage - 1)):undefined,
      index > 0?
        (() => recursiveAskQuestion(0)):undefined,
      totalPage > 1? `page ${index + 1} of ${totalPage}`:undefined,
      reverse
    )
  }
  recursiveAskQuestion(index)
}
