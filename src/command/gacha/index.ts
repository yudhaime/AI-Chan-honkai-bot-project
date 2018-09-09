import * as Discord from 'discord.js'

import standardGacha from './data/standard'
import focusedGacha from './data/focused'
import expansionGacha from './data/expansion'
import displayGacha from './display'
import Limit from '../../utility/limit'
import * as EmojiUtil from '../../utility/emoji'
import {Stigmata} from '../stigmata'
import stigmataSets from '../stigmata/data/stigmatas'

const limit = new Limit(50000)

export interface Gacha {
  name: string,
  guaranteed: number,
  possibility: {
    name: string,
    factor: number,
    type: string,
    contents: string[]
  }[]
}
const rollGacha = (gacha:Gacha, pulled:{name:string, type:string, contents:string[]}[], index:number) => {
  const upLuck = pulled.length % 20 === 19? (pulled.find(possibility =>
    gacha.possibility.slice(0, gacha.guaranteed).map(possibility => possibility.name).includes(possibility.name)
  )? false : true) : false
  const pullable = (upLuck? gacha.possibility.slice(0, gacha.guaranteed) : gacha.possibility).reduce((gacha, possibility) => ({
    total: gacha.total + possibility.factor,
    possibilities: [...gacha.possibilities, {
      ...possibility,
      range: {
        bottom: gacha.total,
        top: gacha.total + possibility.factor
      }
    }]
  }), {total:0, possibilities:[]} as {total:number, possibilities:{name:string, type:string, contents:string[], range:{bottom:number, top:number}}[]})
  const luck =  Math.random() * pullable.total
  return pullable.possibilities.find(possibility => luck < possibility.range.top && luck >= possibility.range.bottom)
}
const randomStigmata = (stigmaName:string) => {
  const stigmatas = stigmataSets
  const stigmata = stigmatas.find(stigmata => stigmata.name.toLowerCase() === stigmaName.toLowerCase())
  if(!stigmata) console.log(stigmaName)
  return stigmata.variations[Math.floor(Math.random() * stigmata.variations.length)].name
}

export default (client:Discord.Client, message:Discord.Message, args:string[]) => {
  if(limit.exists(message.author.id)) {
    const member = message.guild.member(client.user)
    const reply = [
      `pull frequent won\'t improve your luck! Let me rest a bit~${EmojiUtil.get(member, 'Ai2', '')}`,
      'even though you didn\'t spend any crystal, you can\'t spam gacha command like that',
      'someone says you are gonna make AI Chan into salad, huh?',
      'do you not have any other things to do?',
      'in fact AI Chan is quite happy that you care about me ~_~',
      'no medicine, no sanity!! Yay!!',
      'you won\'t make me happy even if you poke me.. =3=',
      'it\'s tiring to pretend to be moe, you know. Lemme take a break #_#',
      'give me a hug!',
      'stop poking me, the bun is collapsing QAQ',
      'AI Chan is the cutest ever *__*'
    ]
    message.channel.startTyping()
    setTimeout(() => {
      message.reply(reply[Math.floor(Math.random() * reply.length)])
      message.channel.stopTyping()
    }, 2000)
  } else {
    const gacha = [{
      keywords: ['focus', 'focused'],
      type: focusedGacha
    }, {
      keywords: ['expand', 'expansion'],
      type: expansionGacha
    }].reduce((type, next) => next.keywords.some(keyword => args.includes(keyword))? next.type : type, standardGacha)
    const numberArg = args.find(arg => /^\d+$/.test(arg))
    const pullAmount = numberArg? parseInt(numberArg) : 10

    const pulled = []
    for(let i = 0; i < 2 * (pullAmount > 10? 10 : pullAmount); i++) {
      const result = rollGacha(gacha, pulled, i)
      pulled.push({...result, content:
        result.type === 'stigmata'?
          randomStigmata(result.contents[Math.floor(Math.random() * result.contents.length)]) :
          result.contents[Math.floor(Math.random() * result.contents.length)]
      })
    }
    message.channel.startTyping()
    setTimeout(() => {
      displayGacha(client, message, gacha.name, pulled, gacha.possibility.slice(0, gacha.guaranteed).map(possibility => possibility.name))
      limit.add(message.author.id)
      message.channel.stopTyping()
    }, 2000)
  }
}