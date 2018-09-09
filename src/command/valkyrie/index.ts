import * as Discord from 'discord.js'

import * as SearchUtil from '../../utility/search'
import valkyries from './data'
import valkyrieList from './list'

export interface Battlesuit {
  battlesuit: string
  file: string
  emoji: string
  baserank: 'B' | 'A' | 'S'
  type: 'Mecha' | 'Creature' | 'Psychic'
  characteristics: string[]
  rate: {
    damage: number
    burst: number
    survive: number
    support: number
    simple: number
    control: number
  },
  features: string[]
  skill: {
    evasion: ValkyrieSkill
    ultimate: ValkyrieSkill
    leader: ValkyrieSkill
  },
  overview: {
    advantage: string[],
    disadvantage: string[]
  }
  score: {
    pride: number
    wrath: number
    gluttony: number
    infinity: number
    memorial: number
    raid: number
  }
  formations: ValkyrieFormation[],
  recommendations: ValkyrieRecommendation[]
}
export interface Valkyrie extends Battlesuit {
  name: string
}
export interface ValkyrieSkill {
  title: string
  descriptions: string[]
}
export interface ValkyrieFormation {
  valk: string,
  star: number,
  reason: string[]
}
export interface ValkyrieRecommendation {
  level: string,
  weapon: string[]
  stigmata: string[][]
  review: string[]
}
const findValkyrieHint = (valkyries:Valkyrie[], command:string):{hint:'name', hits:string[]} => {
  const sentence = command.toLowerCase()
  const valkyrieNames = valkyries.reduce<string[]>((names, valkyrie) =>
    names.includes(valkyrie.name)? [...names, valkyrie.battlesuit]:[...names, valkyrie.name, valkyrie.battlesuit]
  , [])

  var nameSearch = SearchUtil.searchKeyword(valkyrieNames, sentence)
  var nameHints = nameSearch.hits.filter(nameHit => nameHit.hits === nameSearch.max).map(nameHit => nameHit.field)
  if(nameHints.length === 0) {
    nameHints = valkyrieNames.map(name => ({
      name,
      abbreviation: SearchUtil.clean(name).split(' ').map(word => word.slice(0, 1) + word.slice(1).replace(/\D/g, '')).join('')
    })).filter(keyword => SearchUtil.untrimIncludes(sentence, keyword.abbreviation)).map(keyword => keyword.name)
  }
  if(nameHints.length > 0) {
    return {
      hint: 'name',
      hits: nameHints
    }
  } else {
    return undefined
  }
}

export const queryFailMessages = (args:string[]) => [
  `I can\'t find item called ${args.join(' ')} please give a more specific query or use this menu below`,
  `are you sure that \`${args.join(' ')}\` exist? try search it`,
  `what the heck is ${args.join(' ')}? Are you sure you spell it right? Try again or use this menu below`,
  `how long you have become our captain? Why you still looking for something not exist`,
  `why you make Ai-chan to search for a non-existing item? WHY?`,
  `I already bussy to serve others captain, why you make Ai Chan more busy?`,
  `I wonder what is ${args.join(' ')}? Ai Chan can\'t find it anywhere`,
  `you not even give me salary now you make my job become hard again...`,
  `Errrrrrooooooorrrrrrr 404 not found`,
  `Ai Chan will tell you little secret... Ai Chan have another brain inside this two bun... so I know better ${args.join(' ')} does even exist`
]
export default (client:Discord.Client, message:Discord.Message, args:string[], type?:'detail' | 'formation' | 'recommendation') => {
  const command = findValkyrieHint(valkyries, args.join(' '))
  const valkyrieNames = valkyries.reduce((names, valkyrie) => names.includes(valkyrie.name)? names:[...names, valkyrie.name], [])
  if(command) {
    if(command.hint === 'name') {
      const seperatedName = command.hits.reduce<{name:string[], battlesuit:string[]}>((hits, name) => 
        valkyrieNames.includes(name)?
          {...hits, name:[...hits.name, name]}:
          {...hits, battlesuit:[...hits.battlesuit, name]}
      , {name:[], battlesuit:[]})
      valkyrieList(client, message, seperatedName.name, valkyries.filter(valkyrie =>
        seperatedName.name.includes(valkyrie.name) || seperatedName.battlesuit.includes(valkyrie.battlesuit)
      ), type)
    }
  } else {
    if(args.length > 0) {
      const replies = queryFailMessages(args)
      message.reply(replies[Math.floor(Math.random() * replies.length)])
    }
    valkyrieList(client, message, valkyrieNames, valkyries, type)
  }
}
