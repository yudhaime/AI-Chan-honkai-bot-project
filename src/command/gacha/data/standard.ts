import {Gacha} from '../'

const standard:Gacha = {
  name: 'Standard Supply',
  guaranteed: 2,
  possibility: [{
    name: 'S Rank Character',
    factor: 30,
    type: 'character',
    contents: [
      'Knight Moonbeam',
      'Lightning Empress',
      'Dimensional Breaker',
      'Blood Rose',
      'Violet Executer'
    ]
  }, {
    name: 'A Rank Character',
    factor: 270,
    type: 'character',
    contents: [
      'Valkyrie Ranger',
      'Divine Prayer',
      'Shadow Dash',
      'Valkyrie Bladestrike',
      'Yamabuki Armor',
      'Snowy Sniper',
      'Valkyrie Triumph',
      'Scarlet Fusion',
      'Valkyrie Pledge'
    ]
  }, {
    name: 'B Rank Character',
    factor: 550,
    type: 'character',
    contents: [
      'Battle Storm',
      'White Comet',
      'Crimson Impulse',
      'Valkyrie Chariot'
    ]
  }, {
    name: 'S Rank Fragments',
    factor: 127,
    type: 'fragment',
    contents: [
      'Knight Moonbeam',
      'Lightning Empress',
      'Dimensional Breaker',
      'Blood Rose',
      'Violet Executer'
    ]
  }, {
    name: 'A Rank Fragments',
    factor: 1019,
    type: 'fragment',
    contents: [
      'Valkyrie Ranger',
      'Divine Prayer',
      'Shadow Dash',
      'Valkyrie Bladestrike',
      'Yamabuki Armor',
      'Snowy Sniper',
      'Valkyrie Triumph',
      'Scarlet Fusion',
      'Valkyrie Pledge'
    ]
  }, {
    name: '4* Stigmata',
    factor: 73,
    type: 'stigmata',
    contents: [
      'Cleopatra',
      'Jixuanyuan',
      'Shakespeare',
      'Ekaterina',
      'Lier',
      'Fuxi',
      'Nuwa',
      'Shennong',
      'Isaac Newton',
      'Schrodinger'
    ]
  }, {
    name: '4* Weapon',
    factor: 46,
    type: 'weapon',
    contents: [
      '2nd Sacred Relic',
      'Mjolnir',
      'Hyper Railguns',
      'Energy Leaper',
      '3rd Sacred Relic',
      'Raikiri',
      'MagStorm',
      'Blood Dance',
      'Void Blade',
      '5th Sacred Relic',
      'Briareus PRI',
      'Nidhogg Claws',
      'Chiyou Cannon',
      'Sunfire Greatsword',
      'Schwert Gewehr'
    ]
  }, {
    name: '3* Stigmata',
    factor: 2250,
    type: 'stigmata',
    contents: [
      'Rinaldo',
      'Ogier',
      'Charlemagne',
      'Nikola Tesla',
      'Sakamoto Ryouma',
      'Attila',
      'Wangzhaojun',
      'Elizabeth Bathory'
    ]
  }, {
    name: '3* Weapon',
    factor: 750,
    type: 'weapon',
    contents: [
      'Water Spirit Type-II',
      'Fire Spirit Type-II',
      'Fire Spirit Type-I',
      'Water Spirit Type-I',
      'Pulse Katana Type-19',
      'Pulse Katana Type-17',
      'Lightning Soul',
      'Hell Thunder',
      'Lightning Angel',
      'Fire Angel',
      'The Dark Crusher',
      'Nitro Crystal',
      'Ion Resonance',
      'Markov Type A',
      'Markov Type C',
      'Cathode Type-09'
    ]
  }, {
    name: 'Evolution Materials',
    factor: 1474,
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
    factor: 1474,
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
    factor: 737,
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

export default standard