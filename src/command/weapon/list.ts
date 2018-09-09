import * as Discord from 'discord.js'

import {CategorizedWeapon} from './'
import weaponDetail from './detail'
import emoticonOption from '../../utility/emoticonOption'
import * as EmojiUtil from '../../utility/emoji'
import * as StringUtil from '../../utility/string'
import * as ArrayUtil from '../../utility/array'

const weaponList = (client:Discord.Client, message:Discord.Message, categories:string[], stars:number[][], weapons:CategorizedWeapon[], reverse?:() => void) => {
  const captain = message.member
  const member = message.guild.member(client.user)
  if(categories.length > 1) {
    emoticonOption(message, `Captain ${captain}, please choose the category of the weapon:`, categories.map(category => {
      const filteredWeapons = weapons.filter(weapon => weapon.category === category.toLowerCase())
      return {
        name: EmojiUtil.get(member, category.toLowerCase(), '') + '`' + StringUtil.capitalize(category) + '`',
        action: (question:Discord.Message) => weaponList(client, message, [category],
          filteredWeapons.reduce((stars, weapon) =>
            stars.find(star => star.toString() === weapon.stars.toString())? stars:[...stars, weapon.stars]
          , []).sort((a, b) => a[a.length - 1] - b[b.length - 1]),
          filteredWeapons, () => {
            question.delete()
            weaponList(client, message, categories, stars, weapons, reverse)
          }
        )
      }
    }))
  } else if(stars.length > 1) {
    emoticonOption(message, `Captain ${captain}, please choose the stars of the weapon:`, stars.map(starRange => ({
      name: '`' + [...ArrayUtil.generate(starRange[0], '★'), ...ArrayUtil.generate(starRange[starRange.length - 1] - starRange[0], '☆')].join('') + '`',
      action: (question:Discord.Message) => weaponList(client, message, categories, [],
        weapons.filter(weapon =>
          starRange.toString().includes(weapon.stars.toString())
        ), () => {
          question.delete()
          weaponList(client, message, categories, stars, weapons, reverse)
        }
      )
    })), reverse)
  } else if(weapons.length > 1) {
    emoticonOption(message, `Captain ${captain}, please choose the weapon:`, weapons.map(weapon => ({
      name: EmojiUtil.get(member, weapon.category.toLowerCase(), '') + '`' + weapon.name + '`',
      action: (question:Discord.Message) => weaponList(client, message, categories, stars, [weapon])
    })), reverse)
  } else {
    weaponDetail(client, message, weapons[0])
  }
}
export default weaponList