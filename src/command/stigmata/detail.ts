import * as Discord from 'discord.js'

import {Stigmata, StigmataVariation} from './'
import stigmataSets from './data/stigmatas'
import valkyries from '../valkyrie/data'
import emoticonAction from '../../utility/emoticonAction'
import * as PromiseUtil from '../../utility/promise'
import * as StringUtil from '../../utility/string'
import * as ArrayUtil from '../../utility/array'
import * as EmojiUtil from '../../utility/emoji'

const sendStigmataVariation = (client:Discord.Client, message:Discord.Message, stigmata:StigmataVariation, image:{default:string}, thumbnail:{default:string}, icon:{default:string}, additional?:{stars:string, description:string, fields:{name:string, value:string}[]}) =>
  new Promise<Discord.Message | Discord.Message[]>((resolve, reject) => {
    const member = message.guild.member(client.user)
    const embed = {
      description: (additional && additional.stars? '' + additional.stars:'') + '\n' +
      (additional && additional.description? additional.description:''),
      color: stigmata.type === 'top'? 16486259:stigmata.type === 'middle'? 10726387:stigmata.type === 'bottom'? 11650416:undefined,
      fields: []
    }
    const files = []
    if(stigmata.skills.length > 0 && stigmata.recommend.length > 0) {
      embed.fields.push({
        name: EmojiUtil.get(member, 'stigmata', '') + ' Effect',
        value: stigmata.skills.join('\n') + (!additional?
          '\n' + stigmata.recommend.map(recommend =>
            valkyries.find(valkyrie => valkyrie.battlesuit === recommend)
          ).filter(valkyrie => !!valkyrie).map(valkyrie =>
            EmojiUtil.get(member, valkyrie.emoji, '')
          ).join(''):''
        )
      })
    }
    if(stigmata.skills.length > 0 && stigmata.recommend.length < 1) {
      embed.fields.push({
        name: EmojiUtil.get(member, 'stigmata', '') + ' Effect',
        value: stigmata.skills.join('\n') 
      })
    }
    if(additional) {
      if(stigmata.recommend.length > 0) {
        embed.fields.push({
          name: 'Recommended For',
          value: StringUtil.conjuctJoin(stigmata.recommend.map(recommend =>
            valkyries.find(valkyrie => valkyrie.battlesuit === recommend)
          ).filter(valkyrie => !!valkyrie).map(valkyrie => {
            const emoji = EmojiUtil.get(member, valkyrie.emoji, '')
            return emoji !== ''? `${emoji} ${valkyrie.battlesuit}`:valkyrie.battlesuit
          }))
        })
      }
    }
    if(image) {
      embed['image'] = {url:'attachment://image.png'}
      files.push({name:'image.png', attachment:image.default})
    } else if(thumbnail) {
      embed['thumbnail'] = {url:'attachment://thumbnail.png'}
      files.push({name:'thumbnail.png', attachment:thumbnail.default})
    }
    if(icon) {
      embed['author'] = {
        name: stigmata.name,
        icon_url: 'attachment://icon.png'
      }
      files.push({name:'icon.png', attachment:icon.default})
    }
    const stigmatas:Stigmata[] = stigmataSets
    const stigmataSet = stigmatas.find(stigmataSet => !! stigmataSet.variations.find(variation => variation.name === stigmata.name))
    const stigmataVariations = stigmataSet.variations.filter(variation => variation.name !== stigmata.name)
    const stigmaSetAvailable = additional && stigmataVariations.length > 0
    if(stigmaSetAvailable) {
      embed['footer'] = {
        text: `Press stigmata for stigmata set`
      }
    }
    message.channel.send({embed, files}).then(embedMessage => {
      if(stigmaSetAvailable) {
        const member = message.guild.member(client.user)
        emoticonAction(embedMessage as Discord.Message, message.author, [{
          emoji: EmojiUtil.get(member, 'stigmata', '🔱'),
          action: () => {
            (embedMessage as Discord.Message).delete()
            sendStigmataData(client, message, stigmataSet)
          }
        }, ...stigmataVariations.map(variation => ({
          emoji: variation.type === 'top'?
            EmojiUtil.get(member, 'stigmat', '🔺'):
            variation.type === 'bottom'?
            EmojiUtil.get(member, 'stigmab', '🔻'):
            EmojiUtil.get(member, 'stigmam', '🔴'),
          action: () => {
            (embedMessage as Discord.Message).delete()
            sendStigmataData(client, message, {
              ...stigmataSet,
              name: variation.name,
              variations: [variation]
            })
          }
        }))])
      }
      resolve(embedMessage)
    }).catch(reject)
  })
const sendStigmataSet = (client:Discord.Client, message:Discord.Message, stigmata:Stigmata, detail:{stars:string, description:string, fields:{name:string, value:string}[]}, sentMessages:Discord.Message[]) =>
  new Promise<Discord.Message | Discord.Message[]>((resolve, reject) => {
    const embed = {
      description: '**' + stigmata.name + '** - ' + detail.stars + '\n' +
        (detail.description? detail.description:''),
      color: stigmata.stars[1] <= 3? 4896378:stigmata.stars[1] <= 4? 2065089:9519038,
      timestamp: new Date(),
      fields: detail.fields
    }
    const stigmaVariationAvailable = stigmata.variations.length > 0
    if(stigmaVariationAvailable) {
      embed['footer'] = {
        text: 'Press type for stigmata detail'
      }
    }
    message.channel.send({embed}).then(embedMessage => {
      if(stigmaVariationAvailable) {
        const member = message.guild.member(client.user)
        emoticonAction(embedMessage as Discord.Message, message.author, stigmata.variations.map(variation => ({
          emoji: variation.type === 'top'?
            EmojiUtil.get(member, 'stigmat', '🔺'):
            variation.type === 'bottom'?
            EmojiUtil.get(member, 'stigmab', '🔻'):
            EmojiUtil.get(member, 'stigmam', '🔴'),
          action: () => {
            PromiseUtil.sequencial([...sentMessages, embedMessage as Discord.Message].map(message => () =>
              message.delete()
            ))
            sendStigmataData(client, message, {
              ...stigmata,
              name: variation.name,
              variations: [variation]
            })
          }
        })))
      }
      resolve(embedMessage)
    }).catch(reject)
  })

const sendStigmataData = (client:Discord.Client, message:Discord.Message, stigmata:Stigmata) => {
  Promise.all([
    Promise.all(stigmata.variations.map(variation => import('./images/' + variation.file)).map(PromiseUtil.resolveError)),
    Promise.all(stigmata.variations.map(variation => import('./thumbnails/' + variation.file)).map(PromiseUtil.resolveError)),
    Promise.all(stigmata.variations.map(variation => import('./icons/' + variation.type + '.png')).map(PromiseUtil.resolveError)),
  ]).then((images:any[][]) =>
    new Promise<Discord.Message | Discord.Message[]>((resolve, reject) => {
      const member = message.guild.member(client.user)
      const glowstar = EmojiUtil.get(member, 'glowstar', '★').toString()
      const emptystar = EmojiUtil.get(member, 'emptystar', '☆').toString()
      const setDetail = {
        stars: [...ArrayUtil.generate(stigmata.stars[0], glowstar), ...ArrayUtil.generate(stigmata.stars[stigmata.stars.length - 1] - stigmata.stars[0], emptystar)].join(''),
        description: undefined,
        fields: stigmata.setSkills.map(setSkill => ({
          name: setSkill.set + ' Set' + (setSkill.set > 1? 's':''),
          value: setSkill.skills.join('\n')
        })).filter(setSkill => !!setSkill.value)
      }
      if(stigmata.variations.length > 1) {
        PromiseUtil.sequencial([
          ...stigmata.variations.map((variation, index) =>
            () => sendStigmataVariation(client, message, variation, undefined, images[1][index], images[2][index])
          ),
        ]).then((messages:Discord.Message[]) =>
          sendStigmataSet(client, message, stigmata, setDetail, messages)
        )
      } else {
        const variation = stigmata.variations[0]
        const clean = variation.growth.map(growth => ['lvl', 'hp', 'atk', 'def', 'crt', 'load', 'rarity'].reduce((object, key) => ({
          ...object,
          ...{[key]: key !== 'rarity'?
            growth[key]:
            growth[key].map(rarity =>
              [...ArrayUtil.generate(rarity[0], '★'), ...ArrayUtil.generate(rarity[rarity.length - 1] - rarity[0], '☆')].join('')
            ).join('/')
          }
        }), {}))
        setDetail.stars = [...ArrayUtil.generate(stigmata.stars[0], glowstar), ...ArrayUtil.generate(stigmata.stars[stigmata.stars.length - 1] - stigmata.stars[0], emptystar)].join('')
        setDetail.description = '```ml\n' +
          Object.keys(clean[0]).map(key => StringUtil.fillInBlank(key.toUpperCase(), Math.max(key.length, ...clean.map(growth => growth[key].toString().length)))).join('|') + '\n' +
          clean.map(growth =>
            Object.keys(growth).map(key => StringUtil.fillInBlank(growth[key].toString(), Math.max(key.length, ...clean.map(growth => growth[key].toString().length)))).join('|')
          ).join('\n') +
          '```'
        sendStigmataVariation(client, message, variation, images[0][0], images[1][0], images[2][0], setDetail)
      }
    })
  )
}
export default sendStigmataData