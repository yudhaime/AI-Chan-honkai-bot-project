import * as Discord from 'discord.js'

import {Valkyrie} from './'
import valkyrieDetail from './detail'
import emoticonOption from '../../utility/emoticonOption'
import * as StringUtil from '../../utility/string'
import * as ArrayUtil from '../../utility/array'

const valkyrieList = (client:Discord.Client, message:Discord.Message, names:string[], valkyries:Valkyrie[], type:'detail' | 'formation' | 'recommendation', reverse?:() => void) => {
  const captain = message.member
  if(names.length > 1) {
    emoticonOption(message, `Captain ${captain}, please choose the valkyrie:`, names.map(name => ({
      name: '`' + name + '`',
      action: (question:Discord.Message) => valkyrieList(client, message, [],
        valkyries.filter(valkyrie =>
          valkyrie.name === name
        ), type, () => {
          question.delete()
          valkyrieList(client, message, names, valkyries, type)
        })
      })
    ))
  } else if(valkyries.length > 1) {
    emoticonOption(message, `Captain ${captain}, please choose the valkyrie battlesuit:`, valkyries.map(valkyrie => ({
      name: '`' + valkyrie.battlesuit + '`',
      action: (question:Discord.Message) => valkyrieList(client, message, names, [valkyrie], type)
    })), reverse)
  } else {
    valkyrieDetail(client, message, valkyries[0], type)
  }
}
export default valkyrieList