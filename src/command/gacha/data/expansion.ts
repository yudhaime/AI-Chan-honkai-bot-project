import {Gacha} from '../'

const expansion:Gacha = {
  name: 'Expansion Supply',
  guaranteed: 3,
  possibility: [{
    name: 'S Rank Character',
    factor: 75,
    type: 'character',
    contents: [
      'Shadow Knight'
    ]
  }, {
    name: 'UP A Rank Character',
    factor: 450,
    type: 'character',
    contents: [
      'Valkyrie Accipiter'
    ]
  }, {
    name: 'Non-up A Rank Character',
    factor: 225,
    type: 'character',
    contents: [
      'Wolf\'s Dawn',
      'Valkyrie Bladestrike',
      'Snowy Sniper'
    ]
  }, {
    name: 'S Rank Fragments',
    factor: 250,
    type: 'fragment',
    contents: [
      'Shadow Knight'
    ]
  }, {
    name: 'UP A Rank Fragments',
    factor: 750,
    type: 'fragment',
    contents: [
      'Valkyrie Accipiter'
    ]
  }, {
    name: 'Non-up A Rank Fragments',
    factor: 225,
    type: 'fragment',
    contents: [
      'Wolf\'s Dawn',
      'Valkyrie Bladestrike',
      'Snowy Sniper'
    ]
  }, {
    name: 'Skill Materials',
    factor: 2500,
    type: 'equipment',
    contents: [
      'Primary Skill Material',
      'Advanced Skill Material'
    ]
  }, {
    name: 'Evolution Materials',
    factor: 1266,
    type: 'equipment',
    contents: [
      'Soul Shard',
      'Twin Soul Shard',
      'Soul Crystal',
      'Twin Soul Crystal',
      'Ether Shard',
      'Twin Ether Shard',
      'Ether Crystal',
      'Twin Ether Crystal'
    ]
  }, {
    name: 'EXP Materials',
    factor: 1266,
    type: 'equipment',
    contents: [
      'Advanced Creature Chip',
      'Advanced Mecha Chip',
      'Advanced Psychic Chip',
      'Super Creature Chip',
      'Super Mecha Chip',
      'Super Psychic Chip'
    ]
  }, {
    name: 'Gold',
    factor: 1266,
    type: 'equipment',
    contents: [
      'HOWO Treasure',
      'HOLA Treasure',
      'HOMU Treasure',
      'HOLI Treasure',
      'HOMEI Treasure',
      'HOMI Treasure'
    ]
  }]
}

export default expansion