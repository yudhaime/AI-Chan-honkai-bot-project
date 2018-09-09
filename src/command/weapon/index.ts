import * as Discord from 'discord.js'

import * as StringUtil from '../../utility/string'
import * as SearchUtil from '../../utility/search'
import {queryFailMessages} from '../valkyrie'
import weaponList from './list'
import weapons from './data'

export interface Weapon {
  name: string
  file: string
  stars: number[]
  atk: number
  crt: number
  recommend: string[]
  active: string[]
  passive: string[]
}
export interface CategorizedWeapon extends Weapon {
  category: string
}
const findWeaponHint = (weapons:CategorizedWeapon[], command:string):{hint:'name' | 'star' | 'category', hits:string[] | number[]} => {
  const sentence = command.toLowerCase()
  
  var nameSearch = SearchUtil.searchKeyword(weapons.map(weapon => weapon.name), sentence)

  if(nameSearch.max < 10) {
    const digits = sentence.split(/[^0-9a-z]/gi).map(word => parseInt(word)).filter(number => number)
    const digitHits = [1, 2, 3, 4, 5].filter(number => digits.includes(number))
    if((sentence.includes('star') || sentence.includes('level')) && digitHits.length > 0) {
      return {
        hint: 'star',
        hits: digitHits
      }
    }

    const categories = [{
      type: 'guns',
      keywords: ['gun', 'pistol', 'kiana', 'kallen']
    }, {
      type: 'swords',
      keywords: ['sword', 'katana', 'mei', 'yae']
    }, {
      type: 'cannons',
      keywords: ['cannon', 'bronya']
    }, {
      type: 'greatswords',
      keywords: ['greatsword', 'claymore', 'himeko']
    }, {
      type: 'crosses',
      keywords: ['cross', 'theresa', 'teri']
    }, {
      type: 'gauntlets',
      keywords: ['gauntlet', 'fuka', 'fuhua']
    }]
    const categoryHits = categories.map(category => ({
      type: category.type,
      hits: category.keywords.reduce((hits, keyword) => hits + SearchUtil.keywordPoint(keyword, sentence), 0)
    })).filter(field => field.hits > 0)
    const maxCategoryHits = Math.max(...categoryHits.map(hit => hit.hits))
    if(categoryHits.length > 0) {
      return {
        hint: 'category',
        hits: categoryHits.filter(categoryHit => categoryHit.hits === maxCategoryHits).map(categoryHit => categoryHit.type)
      }
    }
  }
  
  var nameHints = nameSearch.hits.filter(nameHit => nameHit.hits === nameSearch.max).map(nameHit => nameHit.field)
  if(nameHints.length === 0) {
    nameHints = weapons.map(weapon => ({
      name: weapon.name,
      abbreviation: SearchUtil.clean(weapon.name).split(' ').map(word => word.slice(0, 1) + word.slice(1).replace(/\D/g, '')).join('')
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
  const command = findWeaponHint(weapons, args.join(' '))
  if(command) {
    if(command.hint === 'name') {
      weaponList(client, message, [], [], weapons.filter(weapon => (command.hits as string[]).includes(weapon.name)))
    } else if(command.hint === 'star') {
      const starCombinations = getStarCombinations(command.hits as number[])
      const filteredWeapons = weapons.filter(weapon =>
        starCombinations.map(combination => combination.toString()).includes(weapon.stars.toString())
      )
      weaponList(client, message, filteredWeapons.reduce((categories, weapon) =>
        categories.includes(weapon.category)? categories:[...categories, weapon.category]
      , []).map(category => StringUtil.capitalize(category)), starCombinations, filteredWeapons)
    } else if(command.hint === 'category') {
      const filteredWeapons = weapons.filter(weapon =>
        (command.hits as string[]).includes(weapon.category)
      )
      weaponList(client, message, command.hits  as string[], filteredWeapons.reduce((stars, weapon) =>
        stars.find(star => star.toString() === weapon.stars.toString())? stars:[...stars, weapon.stars]
      , []).sort((a, b) => a[a.length - 1] - b[b.length - 1]), filteredWeapons)
    }
  } else {
    if(args.length > 0) {
      const replies = queryFailMessages(args)
      message.reply(replies[Math.floor(Math.random() * replies.length)])
    }
    weaponList(client, message, weapons.reduce((categories, weapon) =>
      categories.includes(weapon.category)? categories:[...categories, weapon.category]
    , []).map(category => StringUtil.capitalize(category)), [[1,2], [2,3], [3,4], [4,5]], weapons)
  }
}
