import * as Discord from 'discord.js'

import * as PromiseUtil from '../utility/promise'

export default (message:Discord.Message, originalAuthor:Discord.User, options:{emoji:string | Discord.Emoji, action:() => void}[]) => {
  PromiseUtil.sequencial(options.map((option) => () => message.react(option.emoji)))
  const reactionCollector = message.createReactionCollector((reaction, user) => 
    user.id === originalAuthor.id &&
    options.some(option => reaction.emoji.name === (typeof option.emoji === 'string'? option.emoji:option.emoji.name))
  , {time:60000})
  reactionCollector.on('collect', reaction => {
    if(reaction.users.some(user => user.id === originalAuthor.id)) {
      const found = options.find(option => reaction.emoji.name === (typeof option.emoji === 'string'? option.emoji:option.emoji.name))
      if(found) {
        reactionCollector.stop()
        found.action()
      }
    }
  })
  reactionCollector.on('end', collected => message.clearReactions())
}