import {Battlesuit} from '../'
import {wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch} from '../../../utility/abbreviation'

const kallen:Battlesuit[] = [{
  battlesuit: 'Imayoh Ritual',
  file: 'kallen-ir.png',
  emoji: 'KallenIR',
  baserank: 'A',
  type: 'Mecha',
  characteristics: [
    'Close to mid-range AOE DPS.',
    'Releasing charged kinetic energy deals high physical damage.',
    'Her ultimate skill can summon cannons for massive DPS.'
  ],
  rate: {
    damage: 3,
    burst: 5,
    survive: 3,
    support: 4,
    simple: 4,
    control: 4
  },
  features: [
    'Frozen',
    'Stun',
    'Shield Break',
    'Time'
  ],
  skill: {
    evasion: {
      title: 'Stellar Phanthom',
      descriptions: [
        'Blink to dodge enemy attacks.',
        'After an ultimate evasion, briefly hold the attack button to blink in front of an enemy and attack with flying kick, which can be followed up with 4 normal attacks.',
        '**Time Fracture: ** Triggers an ultimate evasion and reduce all enemies\' speed for 3 sec.',
        'Cooldown: 15 sec'
      ]
    },
    ultimate: {
      title: 'Death Nova',
      descriptions: [
        'Summon a gun turret for battle',
        'Summon Eliudnir and transform her into a gun turret,',
        'penetrating enemies with up to 40 light bullets and dealing 35% Physical Damage for each shot',
        'Requied SP: 60'
      ]
    },
    leader: {
      title: 'Starlight Blessing',
      descriptions: [
        'Team receives bonus if leader',
        'Star Devourer: Increase all allies\' max HP by 10%'
      ]
    }
  },
  overview: {
    advantage: [
      'Super floating switch skill',
      'Good cycle burst and continuous damage'
    ],
    disadvantage: [
      'Weaker as primary damage than secondary damage',
      'Kinetic energy don\'t have speedy regain method' 	
    ],
},  
score: {
     pride: 6,
     wrath: 7,
     gluttony: 7,
     infinity: 6,
     memorial: 6,
     raid: 6,   
},
formations: [{
    valk: vr,
    star: 4,
    reason: [
      'Pulls enemies together in a large range, creating a great opportunity for dealing large amounts of burst damage'
    ]
    }, {
    valk: memento,
    star: 3,
    reason: [
      'Frozen and Shieldbreak status both trigger this QTE.',
      'Same for Mech characters, can receive leader bonus effect'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Water Spirit Type-I'],
    stigmata: [['Naoe Kanetsugu (T)'], ['Elizabeth Bathory (M)'], ['Attila (B)']],
    review: [
      'Can freeze enemy, increase physical damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Mjolnir', 'Thunder Kikaku'],
    stigmata: [['Schrodinger (T)'], ['Planck (M)'], ['Lier (B)']],
    review: [
      'Increase Physical Damage and Critical Chance (if using Mjolnir), add lightning damage (using Kikaku)'
    ]
  }, {
    level: 'advanced',
    weapon: ['Mjolnir', 'Thunder Kikaku'],
    stigmata: [['Schrodinger (T)'], ['Mei: Pool Party (M)', 'Tesla: Band (M)'], ['Isaac Newton (B)']],
    review: [
      'Increase Massive Physical damage, and Critical'
    ]
  }, {
    level: 'advanced',
    weapon: ['Mjolnir', 'Thunder Kikaku'],
    stigmata: [['Michelangelo (T)'], ['Michelangelo (M)'], ['Michelangelo (B)']],
    review: [
      'Increase all damage, more physical damage during burst, more Critical Chance (if using Mjolnir), add lightning damage (using Kikaku)'
    ]
  }]
}]

export default kallen