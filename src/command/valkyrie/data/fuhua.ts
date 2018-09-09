import {Battlesuit} from '../'
import {wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch} from '../../../utility/abbreviation'

const fuhua:Battlesuit[] = [{
  battlesuit: 'Valkyrie Accipiter',
  file: 'fuhua-va.png',
  emoji: 'FuhuaVA',
  baserank: 'A',
  type: 'Psychic',
  characteristics: [
    'Recovers HP for all allies.',
    'Increases Shieldbreak of all allies for a short period of time.',
    'Stuns enemies so that allies have a chance to deal more damage.'
  ],
  rate: {
    damage: 3,
    burst: 3,
    survive: 5,
    support: 5,
    simple: 1,
    control: 4
  },
  features: [
    'Stun',
    'Floating',
    'Shield Break',
    'Impaired'
  ],
  skill: {
    evasion: {
      title: 'Rosefinch Soaring',
      descriptions: [
        'Rapid movement evades attack',
        'Within a short period of time after Ultimate Evasion is used, press the Combo Skill Button to dash and crush enemies, dealing 300% Physical Damage',
        'Time Fracture: Ultimate Evasion triggers Time Fracture for the game, slowing all enemies for 3 sec',
        'Cooldown 15 sec'
      ]
    },
    ultimate: {
      title: 'Amberdragon Hovering',
      descriptions: [
        'Consume 25 SP to burst attack in Combo Skill',
        '**Avalanche Punch: ** 350% Physical Damage',
        '**Break Punch: ** 400% Physical Damage',
        '**Ultimate Lightning Punch: ** 3 x 150% Physical Damage'
      ]
    },
    leader: {
      title: 'Blacktortoise Returning',
      descriptions: [
        'When assigned as the leader, the team will be buffed',
        'Leader: When Combos are over 30, the Crit rate of Mei and Kiana in the team will be increased by 22%',
        'When Combos are below than 30, the Crit rate of Bronya in the team will be increased by 30%'
      ]
    }
  },
  overview: {
    advantage: [
      'Has the ability to strengthen broken shields',
      'Stable HP recovery',
    ],
    disadvantage: [
      'It is difficult to get started, branches are easily interrupted', 
      'SP recovery is poor and more dependent on weapon' 	
    ],
},  
score: {
     pride: 8,
     wrath: 8,
     gluttony: 7,
     infinity: 7,
     memorial: 8,
     raid: 6,   
},
formations: [{
    valk: vc,
    star: 5,
    reason: [
      'QTE stunts enemies, triggering Valkyrie\'s Chariot\'s QTE'
    ]
    }, {
    valk: vb,
    star: 3,
    reason: [
      'Increase Shieldbreak of all allies for a short period of time, making it easier for Blade Strike to attack.',
      'Recovers the HP of all allies, protecting the team from sudden death'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['CAS-II Namiko'],
    stigmata: [['Elizabeth Bathory (T)'], ['Elizabeth Bathory (M)'], ['Elizabeth Bathory (B)']],
    review: [
      'Increase physical damage, chance of recovering HP upon hitting enemies'
    ]
  }, {
    level: 'advanced',
    weapon: ['Cygnus Gauntlets'],
    stigmata: [['Nuwa Figurine Master (T)'], ['Nuwa Figurine Master (M)'], ['Nuwa Figurine Master (B)']],
    review: [
      'Increase SP gain and improve HP recovery, Provides a shield break stun effect and increase stun damage, Increase Physical damage of combo, increase all damage after ultimate skill'
    ]
  }]
}, {
  battlesuit: 'Shadow Knight',
  file: 'fuhua-sk.png',
  emoji: 'FuhuaSK',
  baserank: 'S',
  type: 'Mecha',
  characteristics: [
    'Deals constant melee DPS.',
    'Capable of dealing massive lightning damage.',
    'Her ultimate skill creates a lightning zone where allies\' damage dealt is increased.'
  ],
  rate: {
    damage: 5,
    burst: 5,
    survive: 4,
    support: 3,
    simple: 2,
    control: 3
  },
  features: [
    'Lightning',
    'Bleed',
    'Immobilize'
  ],
  skill: {
    evasion: {
      title: 'Dark Sparrow',
      descriptions: [
        'Rapid movement evades attack',
        'Within a short period of time after Ultimate Evasion is used, perform a Combo Skill to in front of enemies and cast Ardent Wave.',
        'Electrical Surge: Whan an Ultimate Evasion is triggered, deal (250% of ATK) Lightning damage to enemies in large range.',
        'Cooldown 15 sec'
      ]
    },
    ultimate: {
      title: 'Raging Tiger',
      descriptions: [
        'When SP is over 60, Fu Hua may cast Waning Moon to enter Lunar Eclipse',
        'In Lunar Eclipse, she will consume 6 SP per second up to 60 second. Also in Lunar Eclipse, Attacks\' SP recovery is reduced by 100%.',
        'Once the Lunar Eclipse state finishes, Fu Hua will recover 30% of the SP she had when she had originally cast this skill',
        '**Waning Moon enters Lunar Eclipse: ** Deal (480% of ATK) physical damage',
        '**In Lunar Eclipse:**',
        '**The Six Punch Arts: ** Deals a total of (860% of ATK) Physical Damage',
        '**Ocean Bash:** Deals (180% + 240% of ATK) physical damage',
        '**Space Ripple: **Deals 260% + 5 x 50% (multiple hits for each phase) + 340% of ATKphysical damage',
        '**Waning Moon: **Deals (320% of ATK) physical damage'
      ]
    },
    leader: {
      title: 'Evil Arts',
      descriptions: [
        'Team Receives buff if Leader',
        'Death: Team\'s Elemental Damage is increased by 24%, and non-Kiana, Mei, or Bronya characters get an additional 30 SP upon entering the battlefield'
      ]
    }
  },
  overview: {
    advantage: [
      'Strong damage reduction ability', 
      'Extremely overbearing interruption ability;',
      'Good individual combat output ability',
      'Extremely high and long-range lightning elemental burst damage'
    ],
    disadvantage: [
      'Need a long time to deal damage against BOSS enemy', 
      'Requires preparation time and can not be replaced',
      'Difficult to use',
      'Less adaptable to team'
    ],
},  
score: {
     pride: 8,
     wrath: 7,
     gluttony: 8,
     infinity: 7,
     memorial: 7,
     raid: 6,   
},
formations: [{
    valk: vc,
    star: 5,
    reason: [
      'Ultimate - Void Explosion attracts enemies within a large range and cause bleeding effect.'
    ]
    }, {
    valk: le,
    star: 4,
    reason: [
      'Soul Snap Increase the effectiveness of Lightning Damage for Lightning Characters'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['White Star Banisher'],
    stigmata: [['Shigure Kira (T)'], ['Shigure Kira (M)'], ['Shigure Kira (B)']],
    review: [
      'Increase elemental damage, and survivability'
    ]
  }, {
    level: 'advanced',
    weapon: ['Yada Gauntlets'],
    stigmata: [['Monet (T)'], ['Monet (M)'], ['Monet (B)']],
    review: [
      'Weapon provide bleeding effect, increase lightning damage, causes a slow effect, slows enemies in range and increase survivability'
    ]
  }]
},
{
  battlesuit: 'Phoenix',
  file: 'fuhua-p.png',
  emoji: 'FuhuaPH',
  baserank: 'S',
  type: 'Psychic',
  characteristics: [
    'Melee DPS, Increases team\'s elemental damage when off the battlefield',
    'Can use different styles to increase skill powers and effects'
  ],
  rate: {
    damage: 4,
    burst: 3,
    survive: 4,
    support: 5,
    simple: 3,
    control: 5
  },
  features: [
    'Fire',
    'Floating',
    'Immobilize'
  ],
  skill: {
    evasion: {
      title: 'Whisk Step',
      descriptions: [
        'Quickly blinks to the enemy to attack.',
        'Group Immobilize: Ultimate evasion inflicts Time Lock on target and nearby enemies in a small AOE for 1.5s. Cooldown: 15s',
        'Ultimate Evasion also reset attack move (any combo attack afterwards will gain Magic Power)'
      ]
    },
    ultimate: {
      title: 'Ashen Spirit',
      descriptions: [
        'Transform into Ashen Spirit to deal large AOE damage.',
        'Ashen Spirit: 1500% ATK of Fire DMG to enemies in a large AOE. Ashen Spirit reset attack moves (any combo attack afterwards will gain Magic Power)',
        'SP Cost: 100'
      ]
    },
    leader: {
      title: 'Burning Loyalt',
      descriptions: [
        'Team bonus when leader.',
        'Team gains 16% Attack Speed. Teams with 3 psychic-type characters gain 36% Total DMG Multiplier to combo, charged, and ultimate attacks.'
      ]
    }
  },
  overview: {
    advantage: [
      'No Review Yet'
    ],
    disadvantage: [
      'No Review Yet'
    ],
},  
score: {
     pride: 1,
     wrath: 1,
     gluttony: 1,
     infinity: 1,
     memorial: 1,
     raid: 1,   
},
formations: [{
    valk: fs,
    star: 4,
    reason: [
      `Five Color Feather can increase ${fs}'s elemental damage after her combo attack`
    ]
    }, {
    valk: br,
    star: 4,
    reason: [
      `QTE - Makeup: ${br} has a ignite effect, which can trigger QTE skills`
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['CAS-X Saint'],
    stigmata: [['Shigure Kira (T)'], ['Shigure Kira (M)'], ['Shigure Kira (B)']],
    review: [
      'Increase elemental damage, survivability, and all damage from stigma set effect'
    ]
  }, {
    level: 'advanced',
    weapon: ['Cinder Hawk'],
    stigmata: [['Higokumaru (T)'], ['Nuwa (M)'], ['Higokumaru (B)']],
    review: [
      'Deals additionla damage to enemies in a scorching status, and increase fire and all elemental damage'
    ]
  }]
}]

export default fuhua