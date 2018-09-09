import * as Discord from 'discord.js'

import * as SearchUtil from '../../utility/search'
import {queryFailMessages} from '../valkyrie'
import stigmataList from './list'
import stigmataSets from './data/stigmatas'

export interface Stigmata {
  name: string
  stars: number[]
  variations: StigmataVariation[]
  setSkills: {
    set: number
    skills: string[]
  }[]
}
export interface StigmataVariation {
  name: string
  type: string
  recommend: string[]
  growth: {
    rarity: number[][]
    lvl: number | string,
    hp: number | string,
    atk: number | string,
    def: number | string,
    crt: number | string,
    load: number | string
  }[]
  file: string
  skills: string[]
}
const findStigmataHint = (stigmatas:Stigmata[], command:string):{hint:'name' | 'star', hits:string[] | number[]} => {
  const sentence = command.toLowerCase()
  const stigmataNames = stigmatas.reduce<string[]>((names, stigmata) => {
    const setName = stigmata.name
    const variationName = stigmata.variations.map(variation => variation.name).filter(name => SearchUtil.clean(name) !== SearchUtil.clean(setName))
    return [...names, setName, ...variationName]
  }, [])

  var nameSearch = SearchUtil.searchKeyword(stigmataNames, sentence)

  if(nameSearch.max < 10) {
    const digits = sentence.split(/[^0-9a-z]/gi).map(word => parseInt(word)).filter(number => number)
    const digitHits = [1, 2, 3, 4, 5].filter(number => digits.includes(number))
    if((sentence.includes('star') || sentence.includes('level')) && digitHits.length > 0) {
      return {
        hint: 'star',
        hits: digitHits
      }
    }
  }
  
  var nameHints = nameSearch.hits.filter(nameHit => nameHit.hits === nameSearch.max).map(nameHit => nameHit.field)
  if(nameHints.length === 0) {
    nameHints = stigmataNames.map(name => ({
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

const getStarCombinations = (stars:number[]) => {
  const starCombinations = [[1,2], [2,3], [3,4], [4,5]].filter(level => stars.includes(level[0]) || stars.includes(level[1]))
  const maxHit = Math.max(...starCombinations.map(level => (stars.includes(level[0])? 1:0) + (stars.includes(level[1])? 1:0)))
  return starCombinations.filter(level => (stars.includes(level[0])? 1:0) + (stars.includes(level[1])? 1:0) === maxHit)
}
export default (client:Discord.Client, message:Discord.Message, args:string[]) => {
  const stigmatas:Stigmata[] = stigmataSets
  const command = findStigmataHint(stigmatas, args.join(' '))
  if(command) {
    if(command.hint === 'name') {
      stigmataList(client, message, [], (command.hits as string[]).map(name => {
        const stigmaSet = stigmatas.find(stigmata => stigmata.name === name || stigmata.variations.map(variation => variation.name).includes(name))
        if(stigmaSet.name === name) {
          return stigmaSet
        } else if(!(command.hits as string[]).includes(stigmaSet.name)) {
          return {
            ...stigmaSet,
            name,
            variations: [stigmaSet.variations.find(variation => variation.name === name)]
          }
        } else {
          return undefined
        }
      }).filter(stigma => !!stigma))
    } else if(command.hint === 'star') {
      const starCombinations = getStarCombinations(command.hits as number[])
      const filteredStigmatas = stigmatas.filter(stigmata =>
        starCombinations.map(combination => combination.toString()).includes(stigmata.stars.toString())
      )
      stigmataList(client, message, starCombinations, filteredStigmatas)
    }
  } else {
    if(args.length > 0) {
      const replies = queryFailMessages(args)
      message.reply(replies[Math.floor(Math.random() * replies.length)])
    }
    stigmataList(client, message, [[1,2], [2,3], [3,4], [4,5]], stigmatas)
  }
}
