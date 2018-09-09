import * as Discord from 'discord.js'

import {CategorizedWeapon} from '.'
import {Valkyrie} from '../valkyrie'
import valkyries from '../valkyrie/data'
import * as StringUtil from '../../utility/string'
import * as ArrayUtil from '../../utility/array'
import * as EmojiUtil from '../../utility/emoji'
import * as PromiseUtil from '../../utility/promise'

const sendWeaponData = (client:Discord.Client, message:Discord.Message, weapon:CategorizedWeapon, image:{default:string}, thumbnail:{default:string}, icon:{default:string}) =>
  new Promise<Discord.Message | Discord.Message[]>((resolve, reject) => {
    const member = message.guild.member(client.user)
    const glowstar = EmojiUtil.get(member, 'glowstar', '★').toString()
    const emptystar = EmojiUtil.get(member, 'emptystar', '☆').toString()
    const embed = {
      description: [...ArrayUtil.generate(weapon.stars[0], glowstar), ...ArrayUtil.generate(weapon.stars[weapon.stars.length - 1] - weapon.stars[0], emptystar)].join('')
      + ' / ' + [...ArrayUtil.generate(weapon.stars[1], glowstar)].join(''),
      color: weapon.stars[1] <= 3? 4896378 :weapon.stars[1] <= 4? 2065089 : 9519038,
      timestamp: new Date(),
      footer: {
        icon_url: message.author.displayAvatarURL,
        text: `Captain ${message.member.displayName}'s request`
      },
      author: {
        name: weapon.name + ' (' + StringUtil.capitalize(weapon.category) + ')',
        icon_url: 'attachment://icon.png'
      },
      fields: [{
        name: 'ATK',
        value: weapon.atk.toString(),
        inline: true
      }, {
        name: 'CRT',
        inline: true,
        value: weapon.crt.toString()
      }]
    }
    const files = [{name:'icon.png', attachment:icon.default}]
    if(weapon.recommend.length > 0) {
      embed.fields.push({
        name: 'Recommended on:',
        value: StringUtil.conjuctJoin(weapon.recommend.map(recommend =>
          valkyries.find(valkyrie => valkyrie.battlesuit === recommend)
        ).filter(valkyrie => !!valkyrie).map(valkyrie => {
          const emoji = EmojiUtil.get(member, valkyrie.emoji, '')
          return emoji !== ''? `${emoji} ${valkyrie.battlesuit}`:valkyrie.battlesuit
        })),
        inline: true
      })
    }
    if(weapon.active.length > 0) {
      embed.fields.push({
        name: 'Active Skills',
        value: weapon.active.join('\n'),
        inline: false
      })
    }
    if(weapon.passive.length > 0) {
      embed.fields.push({
        name: 'Passive Skills',
        value: weapon.passive.join('\n'),
        inline: false
      })
    }
    if(image) {
      embed['image'] = {url:'attachment://image.png'}
      files.push({name:'image.png', attachment:image.default})
    }
    message.channel.send({embed, files}).then(resolve).catch(reject)
  })

export default (client:Discord.Client, message:Discord.Message, weapon:CategorizedWeapon) => {
  Promise.all([
    import('./images/' + weapon.file),
    import('./thumbnails/' + weapon.file),
    import('./icons/' + weapon.category + '.png')
  ].map(PromiseUtil.resolveError)).then(files =>
    sendWeaponData(client, message, weapon, files[0], files[1], files[2])
  )
}