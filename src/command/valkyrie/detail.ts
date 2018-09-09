import * as Discord from 'discord.js'
import {createCanvas, loadImage} from 'canvas'

import {Valkyrie} from './'
import {Stigmata} from '../stigmata'
import stigmataSets from '../stigmata/data/stigmatas'
import weapons from '../weapon/data'
import effects from '../valkyrie/qte/data' 
import emoticonAction from '../../utility/emoticonAction'
import valkyries from './data'
import * as PromiseUtil from '../../utility/promise'
import * as StringUtil from '../../utility/string'
import * as ArrayUtil from '../../utility/array'
import * as EmojiUtil from '../../utility/emoji'
import {featureEmoji} from '../../utility/emoji'
import * as ImageUtil from '../../utility/image'
import * as GraphUtil from '../../utility/graph'

const sendValkyrieFormation = (client:Discord.Client, message:Discord.Message, valkyrie:Valkyrie, icon:{default:string}, images:{default:string}[], weaponCategory:string) => 
new Promise<Discord.Message | Discord.Message[]>((resolve, reject) => {
  const member = message.guild.member(client.user)
  const glowstar = EmojiUtil.get(member, 'glowstar', '★').toString()
  const emptystar = EmojiUtil.get(member, 'emptystar', '☆').toString()
  const embed = {
    title: 'For ' + valkyrie.battlesuit + ' BattleSuit',
    description: EmojiUtil.get(member, 'valk', '') + ' **OVERVIEW**',
    color: valkyrie.type === 'Mecha'? 2875903 : valkyrie.type === 'Creature'? 16690990 : valkyrie.type === 'Psychic'? 16729807 : undefined,
    fields: [{
      name: 'Advantages',
      value: valkyrie.overview.advantage.map(advantage => '`+` ' + advantage).join('\n')
    }, {
      name: 'Disadvantages',
      value: valkyrie.overview.disadvantage.map(disadvantage => '`-` ' + disadvantage).join('\n')
    }, {
      name: '\u200b',
      value: EmojiUtil.get(member, 'valk', '') + ' **PAIR FORMATION**'
    }, ...valkyrie.formations.map(formation => ({
      name: EmojiUtil.get(member, valkyries.find(valkyrie => valkyrie.battlesuit === formation.valk).emoji, '') + ' ' + 
        formation.valk + ' - ' + [...ArrayUtil.generate(formation.star, glowstar), ...ArrayUtil.generate(5 - formation.star, emptystar)].join(''),
      value: formation.reason.join('\n') + '\n\u200b'
    })), {
      name: '\u200b',
      value: EmojiUtil.get(member, 'valk', '') + ' **SCORE**'
    }]
  }
  const files = []
  if(icon) {
    embed['author'] = {
      name: valkyrie.battlesuit + '\'s Strategy Report',
      icon_url: 'attachment://avatar.png'
    }
    embed['footer'] = {
      text: 'Emoji Menu: Detail | Recommendation',
      icon_url: 'attachment://avatar.png'
    }
    files.push({name:'avatar.png', attachment:icon.default})
  }

  const imageCanvas = createCanvas(1300, 600)
  const imageContext = imageCanvas.getContext('2d')

  imageContext.fillStyle = 'rgba(53, 54, 59, 1)'
  imageContext.fillRect(0, 0, 1300, 600)

  GraphUtil.drawBarChart(imageContext, {
    'Pride Abyss': valkyrie.score.pride,
    'Wrath Abyss': valkyrie.score.wrath,
    'Gluttony Abyss': valkyrie.score.gluttony,
    'Infinity Abyss': valkyrie.score.infinity,
    'Memorial Arena': valkyrie.score.memorial,
    'RAID Coop': valkyrie.score.raid
  }, [2, 4, 6, 8, 10], {x:800, y:70}, 38, {x:350, y:300})

  imageCanvas.toBuffer((error, coverImage) => {
    embed['image'] = {url:'attachment://image.png'}
    files.push({name:'image.png', attachment:coverImage})

    message.channel.send({embed, files}).then(embedMessage => {
      emoticonAction(embedMessage as Discord.Message, message.author, [{
        emoji: EmojiUtil.get(member, valkyrie.emoji, '#⃣'), 
        action: () => {
          (embedMessage as Discord.Message).delete()
          displayValkyrie(client, message, valkyrie, 'detail')
        }
      }, {
        emoji: EmojiUtil.get(member, 'equipment', '⚔️'), 
        action: () => {
          (embedMessage as Discord.Message).delete()
          displayValkyrie(client, message, valkyrie, 'recommendation')
        }
      }])
      resolve(message)
    }).catch(reject)
  })
})

const sendValkyrieRecommendation = (client:Discord.Client, message:Discord.Message, valkyrie:Valkyrie, icon:{default:string}, images:{default:string}[], weaponCategory:string) => 
  new Promise<Discord.Message | Discord.Message[]>((resolve, reject) => {
    const member = message.guild.member(client.user)
    const embed = {
      title: 'For ' + valkyrie.battlesuit + ' BattleSuit',
      description: 'Request by ' + valkyrie.name + ' for Captain ' + message.member.displayName + ' to buy it',
      color: valkyrie.type === 'Mecha'? 2875903 : valkyrie.type === 'Creature'? 16690990 : valkyrie.type === 'Psychic'? 16729807 : undefined,
      fields: valkyrie.recommendations.reduce((groups, recommendation) => {
        const group = groups.find(group => group.level === recommendation.level)
        if(group) {
          group.recommendations = [...group.recommendations, recommendation]
          return [...groups.filter(group => group.level !== recommendation.level), group]
        } else {
          return [...groups, {
            level: recommendation.level,
            recommendations: [recommendation]
          }]
        }
      }, []).map(group => ({
        name: `**${EmojiUtil.get(member, group.level === 'beginner'? 'star':'star2', '')}${StringUtil.capitalize(group.level)} Setup**`,
        value: group.recommendations.map(recommendation => '**' +
          EmojiUtil.get(member, weaponCategory, 'Weapon: ') + recommendation.weapon.join('/') + '**\n' +
          EmojiUtil.get(member, 'stigmat', 'Top: ') + ' ' + recommendation.stigmata[0].join('/') + '\n' +
          EmojiUtil.get(member, 'stigmam', 'Mid: ') + ' ' + recommendation.stigmata[1].join('/') + '\n' +
          EmojiUtil.get(member, 'stigmab', 'Bottom: ') + ' ' + recommendation.stigmata[2].join('/') + '\n' +
          '*"' + recommendation.review.join('/n') + '"*'
        ).join('\n\n') + '\n\u200b'
      }))
    }
    const files = []
    const sendMessage = (embed, files) => {
      message.channel.send({embed, files}).then(embedMessage => {
        emoticonAction(embedMessage as Discord.Message, message.author, [{
          emoji: EmojiUtil.get(member, valkyrie.emoji, '#⃣'), 
          action: () => {
            (embedMessage as Discord.Message).delete()
            displayValkyrie(client, message, valkyrie, 'detail')
          }
        }, {
          emoji: EmojiUtil.get(member, 'valk', '⚔️'), 
          action: () => {
            (embedMessage as Discord.Message).delete()
            displayValkyrie(client, message, valkyrie, 'formation')
          }
        }])
        resolve(message)
      }).catch(reject)
    }
    if(icon) {
      embed['author'] = {
        name: 'Equipment Recommendation Report',
        icon_url: 'attachment://avatar.png'
      }
      embed['footer'] = {
        text: 'Emoji Menu: Detail | Formation',
        icon_url: 'attachment://avatar.png'
      }
      files.push({name:'avatar.png', attachment:icon.default})
    }
    if(images && images.filter(image => !!image).length > 0) {
      const canvas = createCanvas(1200, 300)
      const context = canvas.getContext('2d')
      Promise.all(images.filter(image => !!image).map(image => loadImage(image.default))).then(images => {
        images.forEach((image, index) => index === 0?
          context.drawImage(...ImageUtil.alignCenterImage(image, 280, 280, {x:150, y:150})) :
          index < 4?
          context.drawImage(...ImageUtil.alignCenterImage(image, 260, 260, {x:300 * index + 150, y:150})) :
          context.drawImage(...ImageUtil.alignCenterImage(image, 80, 80, {x:300 * (index - 3) + 30, y:50}))
        )
        canvas.toBuffer((error, buffer) => {
          embed['image'] = {url:'attachment://image.png'}
          files.push({name:'image.png', attachment:buffer})
          sendMessage(embed, files)
        })
      })
    } else {
      sendMessage(embed, files)
    }
  })

const sendValkyrieDetail = (client:Discord.Client, message:Discord.Message, valkyrie:Valkyrie, avatar:{default:string}, thumbnail:{default:string}, rank:{default:string}, image:{default:string}, icon:{default:string}) =>
  new Promise<Discord.Message | Discord.Message[]>((resolve, reject) => {
    const member = message.guild.member(client.user)
    const qte = effects.filter(effect => effect.triggeree.qte.includes(valkyrie.battlesuit))
    const embed = {
      description: `**${valkyrie.name}**`,
      color: valkyrie.type === 'Mecha'? 2875903 : valkyrie.type === 'Creature'? 16690990 : valkyrie.type === 'Psychic'? 16729807 : undefined,
      timestamp: new Date(),
      fields: [{
        name: 'Base Rank',
        value: EmojiUtil.get(member, 'rank' + valkyrie.baserank.toLowerCase(), '') + ' ' + valkyrie.baserank + '-Rank',
        inline: true
      }, {
        name: 'QTE By',
        value: qte.map(qte => EmojiUtil.get(member, qte.emoji, '') + ' ' + qte.condition).join('   '),
        inline: true
      }, {
        name: 'Characteristics',
        value: valkyrie.characteristics.join('\n')
      }, {
        name: 'Main Combination',
        value: valkyrie.features.map(feature => {
          const emoji = Object.keys(featureEmoji).find(emoji => featureEmoji[emoji].includes(feature))
          if(emoji) {
            return EmojiUtil.get(member, emoji, '') + ' ' + feature
          } else {
            return undefined
          }
        }).filter(feature => !! feature).join('   ')
      }, {
        name: EmojiUtil.get(member, 'skill', '') + ' Evasion Skill - ' + valkyrie.skill.evasion.title,
        value: valkyrie.skill.evasion.descriptions.join('\n')
      }, {
        name: EmojiUtil.get(member, 'skill', '') + ' Ultimate Skill - ' + valkyrie.skill.ultimate.title,
        value: valkyrie.skill.ultimate.descriptions.join('\n')
      }, {
        name: EmojiUtil.get(member, 'skill', '') + ' Leader Skill - ' + valkyrie.skill.leader.title,
        value: valkyrie.skill.leader.descriptions.join('\n')
      }].filter(field => field.value !== '')
    }
    const files = []
    if(icon) {
      embed['author'] = {
        name: StringUtil.capitalize(valkyrie.type) + ' • ' + valkyrie.battlesuit,
        icon_url: 'attachment://icon.png'
      }
      files.push({name:'icon.png', attachment:icon.default})
    }
    if(avatar) {
      embed['footer'] = {
        text: 'Emoji Menu: Formation | Recommendation',
        icon_url: 'attachment://avatar.png'
      }
      files.push({name:'avatar.png', attachment:avatar.default})
    }
    const thumbnailCanvas = createCanvas(130, 160)
    const thumbnailContext = thumbnailCanvas.getContext('2d')
    const imageCanvas = createCanvas(1300, 800)
    const imageContext = imageCanvas.getContext('2d')
    Promise.all([loadImage(thumbnail.default), loadImage(rank.default), loadImage(image.default)]).then(image => {
      thumbnailContext.drawImage(...ImageUtil.alignCenterImage(image[0], 128, 128, {x:65, y:65}))
      thumbnailContext.drawImage(...ImageUtil.alignCenterImage(image[1], 68, 68, {x:65, y:126}))

      imageContext.fillStyle = 'rgba(53, 54, 59, 1)'
      imageContext.fillRect(0, 0, 1300, 800)
      imageContext.drawImage(...ImageUtil.alignCenterImage(image[2], 900, 800, {x:450, y:400}))

      GraphUtil.drawRadarChart(imageContext, {
        'Damage': valkyrie.rate.damage,
        'Burst': valkyrie.rate.burst,
        'Survive': valkyrie.rate.survive,
        'Support': valkyrie.rate.support,
        'Simple': valkyrie.rate.simple,
        'Control': valkyrie.rate.control
      }, 5, 170, 32, {x:1000, y:300})

      thumbnailCanvas.toBuffer((error, thumbnailRank) => {
        imageCanvas.toBuffer((error, coverImage) => {
          embed['thumbnail'] = {url:'attachment://thumbnail.png'}
          files.push({name:'thumbnail.png', attachment:thumbnailRank})
          embed['image'] = {url:'attachment://image.png'}
          files.push({name:'image.png', attachment:coverImage})
  
          message.channel.send({embed, files}).then(embedMessage => {
            emoticonAction(embedMessage as Discord.Message, message.author, [{
              emoji: EmojiUtil.get(message.guild.member(client.user), 'valk', '*⃣'),
              action: () => {
                (embedMessage as Discord.Message).delete()
                displayValkyrie(client, message, valkyrie, 'formation')
              }
            }, {
              emoji: EmojiUtil.get(member, 'equipment', '⚔️'), 
              action: () => {
                (embedMessage as Discord.Message).delete()
                displayValkyrie(client, message, valkyrie, 'recommendation')
              }
            }])
            resolve(message)
          }).catch(reject)
        })
      })
    })
  })

const displayValkyrie = (client:Discord.Client, message:Discord.Message, valkyrie:Valkyrie, type:'detail' | 'formation' |'recommendation') => {
  if(type === 'detail') {
    Promise.all([
      import('./avatars/' + valkyrie.file),
      import('./thumbnails/' + valkyrie.file),
      import('./rank/' + valkyrie.baserank.toLowerCase() + '.png'),
      import('./images/' + valkyrie.file),
      import('./icons/' + valkyrie.type.toLowerCase() + '.png')
    ].map(PromiseUtil.resolveError)).then((images:any[]) =>
      sendValkyrieDetail(client, message, valkyrie, images[0], images[1], images[2], images[3], images[4])
    )
  } else if(type === 'formation') {
    Promise.all([
      import('./avatars/' + valkyrie.file),
      import('./thumbnails/' + valkyrie.file),
      import('./rank/' + valkyrie.baserank.toLowerCase() + '.png'),
      import('./images/' + valkyrie.file),
      import('./icons/' + valkyrie.type.toLowerCase() + '.png')
    ].map(PromiseUtil.resolveError)).then((images:any[]) =>
      sendValkyrieFormation(client, message, valkyrie, images[0], images[1], images[2])
    )
  } else if(type === 'recommendation') {
    const recommendation = valkyrie.recommendations.find(recommendation => recommendation.level.includes('advanced'))
    const weapon = weapons.find(weapon => weapon.name === recommendation.weapon[0])
    const stigmataVariations = stigmataSets.map(set => set.variations).reduce((variations, setVariations) => [...variations, ...setVariations], [])
    const stigmatas = recommendation.stigmata.map(stigmatas => stigmataVariations.find(variation => variation.name === stigmatas[0]))
    Promise.all([
      import('./avatars/' + valkyrie.file),
      import('../weapon/thumbnails/' + weapon.file),
      ...stigmatas.map(stigmata => import('../stigmata/thumbnails/' + stigmata.file)),
      ...['top', 'middle', 'bottom'].map(file => import(`../stigmata/icons/${file}.png`))
    ].map(PromiseUtil.resolveError)).then(images =>
      sendValkyrieRecommendation(client, message, valkyrie, images[0], images.slice(1), weapon.category)
    ).catch(error => {
      console.log(recommendation.weapon[0], recommendation.stigmata.map(stigmata => stigmata[0]))
      console.error(error)
    })
  }
}
export default displayValkyrie