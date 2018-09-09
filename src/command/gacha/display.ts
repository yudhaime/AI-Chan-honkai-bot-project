import * as Discord from 'discord.js'
import {createCanvas, loadImage} from 'canvas'

import * as PromiseUtil from '../../utility/promise'
import * as StringUtil from '../../utility/string'
import * as ArrayUtil from '../../utility/array'
import * as ImageUtil from '../../utility/image'
import {Valkyrie} from '../valkyrie'
import valkyries from '../valkyrie/data'
import {Stigmata, StigmataVariation} from '../stigmata'
import stigmataSets from '../stigmata/data/stigmatas'
import {Weapon} from '../weapon'
import weapons from '../weapon/data'
import materials from './data/material'

const getSupplyVariation = (type:string, resource:'thumbnail' | 'color') => {
  const returnType = (thumbnail:string, color:number) => {
    if(resource === 'thumbnail') return thumbnail
    else if(resource === 'color') return color
  }
  if(type.toLowerCase() === 'standard supply') {
    return returnType('standard-card.png', 16768056)
  } else if(type.toLowerCase() === 'focused supply') {
    return returnType('precision-card.png', 16754107)
  } else if(type.toLowerCase() === 'expansion supply') {
    return returnType('extension-card.png', 10803187)
  }
}
const sendGachaResults = (client:Discord.Client, message:Discord.Message, type:string,
  results:{name:string, type:string, content:string, range:{bottom:number, top:number}}[],
  bestResults:{name:string, type:string, content:string, range:{bottom:number, top:number}}[]
, image:Buffer, icon:{default:string}) => 
  new Promise<Discord.Message | Discord.Message[]>((resolve, reject) => {
    const embed = {
      title: type,
      color: getSupplyVariation(type, 'color'),
      author: {
        name: message.member.displayName,
        icon_url: message.member.user.displayAvatarURL
      },
      fields: results.map(result => ({
        name: result.content,
        value: result.name,
        inline: true
      }))
    }
    const files = []
    if(bestResults.length > 0) {
      embed.fields.push({
        name: 'Summary',
        value: `<@${message.member.user.id}> obtained ${StringUtil.conjuctJoin(bestResults.map(result => result.content).filter(ArrayUtil.unique))} on ${type.toLowerCase()}`,
        inline: false
      })
    }
    if(image) {
      embed['image'] = {url:'attachment://image.png'}
      files.push({name:'image.png', attachment:image})
    }
    if(icon) {
      embed['thumbnail'] = {url:'attachment://icon.png'}
      files.push({name:'icon.png', attachment:icon.default})
    }
    message.channel.send({embed, files}).then(resolve).catch(reject)
  })

export default (client:Discord.Client, message:Discord.Message, type:string, results:{name:string, type:string, content:string, range:{bottom:number, top:number}}[], guaranteed:string[]) => {
  const stigmataVariations = stigmataSets.reduce<StigmataVariation[]>((variations, stigmata) => [...variations, ...stigmata.variations.map(variation => ({
    ...variation,
    set: stigmata
  }))], [])

  const getValue = (equipment) =>
    equipment.rank?
    (equipment.rank === 'S'? 70:equipment.rank === 'A'? 60:50):
    equipment.stars * 10
  const filledResults = results.map(result => {
    if(result.type === 'character') {
      const valkyrie = valkyries.find(valkyrie => valkyrie.battlesuit.toLowerCase() === result.content.toLowerCase())
      if(!valkyrie) console.log(result.content)
      return {...result, valkyrie, rank:valkyrie.baserank, file:import('../valkyrie/thumbnails/' + valkyrie.file)}
    } else if(result.type === 'fragment') {
      const valkyrie = valkyries.find(valkyrie => valkyrie.battlesuit.toLowerCase() === result.content.toLowerCase())
      if(!valkyrie) console.log(result.content)
      return {...result, valkyrie, stars:valkyrie.baserank !== 'B'? 4:3, file:import('../valkyrie/fragments/' + valkyrie.file)}
    } else if(result.type === 'stigmata') {
      const stigmata = stigmataVariations.find(variation =>
        variation.name.toLowerCase() === result.content.toLowerCase()
      )
      if(!stigmata) console.log(result.content)
      return {...result, stigmata, stars:(stigmata as any).set.stars[0], file:import('../stigmata/thumbnails/' + stigmata.file)}
    } else if(result.type === 'weapon') {
      const weapon = weapons.find(weapon => weapon.name.toLowerCase() === result.content.toLowerCase())
      if(!weapon) console.log(result.content)
      return {...result, weapon, stars:weapon.stars[0], file:import('../weapon/thumbnails/' + weapon.file)}
    } else if(result.type === 'equipment') {
      const equipment = materials.find(material => material.name.toLowerCase() === result.content.toLowerCase())
      if(!equipment) console.log(result.content)
      return {...result, stars:equipment.stars, file:import('./images/' + equipment.file)}
    }
  }).sort((result1, result2) => {
    const value = getValue(result2) - getValue(result1)
    return value === 0? result1.range.bottom - result2.range.bottom:value
  })
  const canvas = createCanvas(1500, Math.ceil(filledResults.length / 5) * 300)
  const context = canvas.getContext('2d')
  Promise.all([
    ...filledResults.map(result => PromiseUtil.resolveError(result.file).then(image => image? loadImage(image.default):undefined)),
    ...['top', 'middle', 'bottom'].map(file => import(`../stigmata/icons/${file}.png`).then(image => loadImage(image.default))),
    ...['s', 'a', 'b'].map(file => import(`./images/rank-${file}.png`).then(image => loadImage(image.default))),
    import('./images/' + 'star.png').then(image => loadImage(image.default)),
    import('./icons/' + getSupplyVariation(type, 'thumbnail'))
  ]).then(images => {
    images.slice(0, images.length - 8).map((image, index) => ({
      image,
      result: filledResults[index]
    })).forEach((gacha, index) => {
      const size = gacha.result.type !== 'equipment'? 260:240
      context.drawImage(...ImageUtil.alignCenterImage(gacha.image, size, size, {x:300 * (index % 5) + 150, y:300 * Math.floor(index / 5) + 150}))

      if(gacha.result.type === 'character') {
        const rank = (gacha.result as {rank:string}).rank
        context.drawImage(...ImageUtil.alignCenterImage(images[
          images.length - (rank === 'S'? 5:rank === 'A'? 4:3)
        ], 140, 140, {x:300 * (index % 5) + 150, y:300 * Math.floor(index / 5) + 260}))
      } else {
        const stars = (gacha.result as {stars:number}).stars
        ImageUtil.rowSpread(stars, 40).forEach(x =>
          context.drawImage(...ImageUtil.alignCenterImage(images[images.length - 2], 50, 50, {x:300 * (index % 5) + 150 + x, y:300 * Math.floor(index / 5) + 270}))
        )
      }
      if(gacha.result.type === 'stigmata') {
        const stigmaType = (gacha.result as {stigmata:StigmataVariation}).stigmata.type
        context.drawImage(...ImageUtil.alignCenterImage(
          stigmaType === 'top'?
          images[images.length - 8]:
          stigmaType === 'bottom'?
          images[images.length - 6]:
          images[images.length - 7]
        , 80, 80, {x:300 * (index % 5) + 40, y:300 * Math.floor(index / 5) + 60}))
      }
    })
    canvas.toBuffer((error, buffer) => {
      sendGachaResults(client, message, type, results, results.filter(result =>
        guaranteed.includes(result.name)
      ), buffer, images[images.length - 1])
    })
  })
}