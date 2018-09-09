import * as Discord from 'discord.js'

import {Stigmata} from './'
import weaponDetail from './detail'
import emoticonOption from '../../utility/emoticonOption'
import * as StringUtil from '../../utility/string'
import * as ArrayUtil from '../../utility/array'

const stigmataList = (client:Discord.Client, message:Discord.Message, stars:number[][], stigmatas:Stigmata[], reverse?:() => void) => {
  const captain = message.member
  if(stars.length > 1) {
    emoticonOption(message, `Captain ${captain}, please choose the stars of the stigmata:`, stars.map(starRange => ({
      name: '`' + [...ArrayUtil.generate(starRange[0], '★'), ...ArrayUtil.generate(starRange[starRange.length - 1] - starRange[0], '☆')].join('') + '`',
      action: (question:Discord.Message) => stigmataList(client, message, [],
        stigmatas.filter(stigmata =>
          starRange.toString().includes(stigmata.stars.toString())
        ), () => {
          question.delete()
          stigmataList(client, message, stars, stigmatas, reverse)
        }
      )
    })))
  } else if(stigmatas.length > 1) {
    emoticonOption(message, `Captain ${captain}, please choose the stigmata:`, stigmatas.map(stigmatas => ({
      name: '`' + stigmatas.name + '`',
      action: (question:Discord.Message) => stigmataList(client, message, stars, [stigmatas])
    })), reverse)
  } else {
    weaponDetail(client, message, stigmatas[0])
  }
}
export default stigmataList