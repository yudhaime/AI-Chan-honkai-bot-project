import {Battlesuit} from '../'
import {wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch} from '../../../utility/abbreviation'

const himeko:Battlesuit[] = [{
  battlesuit: 'Battle Storm',
  file: 'himeko-bs.png',
  emoji: 'HimekoBS',
  baserank: 'B',
  type: 'Creature',
  characteristics: [
    'Middle-ranged high DPS, shield braking',
    'Good at supressing enemy',
    'Extremely high damage reduction during charge attacks'
  ],
  rate: {
    damage: 4,
    burst: 3,
    survive: 5,
    support: 2,
    simple: 3,
    control: 3
  },
  features: [
    'Floating',
    'Shield Break',
    'Charge',
    'Time'
  ],
  skill: {
    evasion: {
      title: 'Time Sprint',
      descriptions: [
        'Rolls to evade enemy attacks.',
        '**Gale:** Increase Movement speed by 40% for 3 sec after an Ultimate Evasion.',
        '**Time Fracture:** Triggers Time Fracture upon an Ultimate Evasion, slowing down all enemies for 3 sec.',
        'Cooldown: 15 sec'
      ]
    },
    ultimate: {
      title: 'Tornado Storm',
      descriptions: [
        'Spins weapon to attack surrounding enemies.',
        'Deals physical damage equal to 7x80% of ATK to surrounding enemies',
        'The last strike deals physical damage equal to 400% of ATK and float the enemies',
        'Attracts nearby enemies when activated',
        'SP Cost: 50'
      ]
    },
    leader: {
      title: 'Stand By',
      descriptions: [
        'Team receive bonus if leader',
        'Decrease whole team physical damage taken by 20%'
      ]
    }
  },
  overview: {
    advantage: [
      'High damage reduction ability',
      'Strong in shield break'
    ],
    disadvantage: [
      'Self-based damage is lower',
      'Less flexible'
    ],
},  
score: {
     pride: 3,
     wrath: 3,
     gluttony: 3,
     infinity: 3,
     memorial: 3,
     raid: 5,   
},
formations: [{
    valk: le,
    star: 5,
    reason: [
      'Triggers each other\'s QTE.',
      'Lightning Empress is a psychic character, can help Battle Storm deal with Mecha type enemies.'
    ]
    }, {
    valk: vc,
    star: 4,
    reason: [
      'Basic attack stuns the target, triggering Chariot\'s QTE.',
      'Ultimate skill attracts enemies within a large radius.'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['King Cobra'],
    stigmata: [['Naoe Kanetsugu (T)'], ['Elizabeth Bathory (M)'], ['Elizabeth Bathory (B)']],
    review: [
      'Extra SP when deployed, increase physical damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Ghostslayer Nagamitsu', 'Xuanyuan Sword'],
    stigmata: [['Jixuanyuan (T)'], ['Jixuanyuan (M)'], ['Jixuanyuan (B)']],
    review: [
      'Increase Physical damage on Switch/QTE, Charge, and Increase all-damage from Weapon Skill'
    ]
  }]
}, {
  battlesuit: 'Valkyrie Triumph',
  file: 'himeko-vt.png',
  emoji: 'HimekoVT',
  baserank: 'A',
  type: 'Creature',
  characteristics: [
    'Melee, combination of light and heavy attacks',
    'High perfomance in supressing enemy',
    'Ultimate skill deal massive burst damage, has high CC and recovery effects'
  ],
  rate: {
    damage: 4,
    burst: 4,
    survive: 4,
    support: 4,
    simple: 2,
    control: 4
  },
  features: [
    'Frozen',
    'Stun',
    'Shield Break',
    'Charge'
  ],
  skill: {
    evasion: {
      title: 'Shock Wave',
      descriptions: [
        'Dodges sideways to evade enemy attacks.',
        '**Energy Charge:** Unleashes the first charged strike instanly after an Ultimate Evasion.',
        '**Shock Wave:** Release a shock wave after an Ultimate Evasion, stunning all enemies within range. Lasts for 2 sec.',
        'Cooldown: 20 sec'
      ]
    },
    ultimate: {
      title: 'Blade Field',
      descriptions: [
        'Creates a sword rain enchant',
        'Time Enchant: Last for 8 sec. Inflicts Time Slow to affected enemies.',
        'Enchan Shatter: Explosion deals physical damage equal to 800% of ATK',
        'SP Cost: 125'
      ]
    },
    leader: {
      title: 'Triumph',
      descriptions: [
        'Team receive bonus if leader',
        'Increase whole team\'s physical damage by 20% and creature-type character\'s DEF by 30% when whole team\'s HP is more than 80%'
      ]
    }
  },
  overview: {
    advantage: [
      'Moderate stable and large range continuous damage',
      'Excellent for HP recovery',
      'Strong damage reduction ability',
      'Strong in shield break'
    ],
    disadvantage: [
      'Weaker in solo combat',
      'Can\'t evade when attacking',
      'Dependent on Ultimate'
    ],
},  
score: {
     pride: 8,
     wrath: 6,
     gluttony: 8,
     infinity: 8,
     memorial: 5,
     raid: 7,   
},
formations: [{
    valk: vc,
    star: 5,
    reason: [
      'Ultimate evasion stuns the target, triggering Chariot\'s QTE.',
      'Chariot\'s Ultimate Skill attracts enemies within a large radius to increase the coverage of Triumph\'s Ultimate.'
    ]
    }, {
    valk: km,
    star: 4,
    reason: [
      'Ultimate evasion stuns the target, assisting Knight Moonbeam in dealing damage.',
      'Creature type character, enjoys the effect of the Leader Skill.'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Nitro Crystal'],
    stigmata: [['Naoe Kanetsugu (T)'], ['Nikola Tesla (M)'], ['Attila (B)']],
    review: [
      'Can freeze enemy and increase physical damage'
    ]
  }, {
    level: 'beginner',
    weapon: ['Nitro Crystal'],
    stigmata: [['Naoe Kanetsugu (T)'], ['Elizabeth Bathory (M)'], ['Elizabeth Bathory (B)']],
    review: [
      'Can Freeze enemy, increase physical damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Balmung', 'Xuanyuan Sword'],
    stigmata: [['Cleopatra (T)'], ['Planck (M)'], ['Planck (B)']],
    review: [
      'Ignore interruption from mostly enemies\' attack, more physical damage against broken shield enemy'
    ]
  }, {
    level: 'advanced',
    weapon: ['Auroral Judgement'],
    stigmata: [['Schrodinger (T)'], ['Planck (M)'], ['Planck (B)']],
    review: [
      'Increase massive physical damage and ignoring interruption from most ememies\'s Attack while charge attack'
    ]
  }, {
    level: 'advanced',
    weapon: ['Blood Dance', 'Xuanyuan Sword'],
    stigmata: [['Seele Vollerei (T)'], ['Planck (M)'], ['Seele Vollerei (B)']],
    review: [
      'Increase Attack speed and physical damage, make it easy to chain charge attack'
    ]
  }]
}, {
  battlesuit: 'Scarlet Fusion',
  file: 'himeko-sf.png',
  emoji: 'HimekoSF',
  baserank: 'A',
  type: 'Mecha',
  characteristics: [
    'Melee slash attack, high DPS',
    'Enhance self-ability unique by attacking in a unique tempo.',
    'Ultimate deals massive burst damage and can suppress enemy'
  ],
  rate: {
    damage: 4,
    burst: 5,
    survive: 4,
    support: 2,
    simple: 1,
    control: 2
  },
  features: [
    'Lightning',
    'Paralyze',
    'Floating',
    'Shield Break'
  ],
  skill: {
    evasion: {
      title: 'Fusion Shuttle',
      descriptions: [
        'Rolls to evade enemy attacks.',
        '**Nuclear Push:** Increase Movement Speed by 40% for 3 sec after an Ultimate Evasion.',
        '**Nuclear Charge:** Receives Electric Charge after an Ultimate Evasion, increasing ignore interrupt for 5 sec. Cooldown: 15 sec.',
        '**Electric Burst:** Generates an explosionone time during the charging process, dealing lightning damage equal to 80% of ATK to target and enemies surrounding it and paralyzing them for 3 sec'
      ]
    },
    ultimate: {
      title: 'Nexus Unlock',
      descriptions: [
        'Enters the Valkyrie state, enhancing all attacks',
        'Increase ATK, Attack Speed, and Interupt.',
        'Consumes 20 SP to activate and 10 SP per sec until SP is depleted. Enters weakened status after the burst, with ATK being decreased by 50% for 10 sec'
      ]
    },
    leader: {
      title: 'Fusion Arms',
      descriptions: [
        'Team receive bonus if leader',
        'Increase whole team\'s switch skill damage by 20%'
      ]
    }
  },
  overview: {
    advantage: [
      'More stable damage reduction ability',
      'High and stable mid-range lightning elemental continuous damage',
      'Very fast SP gain',
      'Strong in solo combat'
    ],
    disadvantage: [
      'Hard to master',
      'Damage highly dependent on certain stigmata',
    ],
},  
score: {
     pride: 7,
     wrath: 7,
     gluttony: 7,
     infinity: 7,
     memorial: 8,
     raid: 8,   
},
formations: [{
    valk: db,
    star: 5,
    reason: [
      'Provides Scarlet Fusion bleeding, triggering each other\'s QTE.',
      'Mecha type character, enjoys the effects of the Leader Skill.'
    ]
    }, {
    valk: vc,
    star: 5,
    reason: [
      'Attracts enemies within a large radius and provides Scarlet Fusion bleeding.',
      'QTE enjoys the boost from SCarlet Fusion\'s Captain skill.'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['King Cobra'],
    stigmata: [['Nikola Tesla (T)'], ['Rinaldo (M)'], ['Rinaldo (B)']],
    review: [
      'Give SP when enters the battle, increase critical and damage dealt to paralyzed enemy'
    ]
  }, {
    level: 'beginner',
    weapon: ['King Cobra'],
    stigmata: [['Naoe Kanetsugu (T)'], ['Sakamoto Ryouma (M)'], ['Attila (B)']],
    review: [
      'Give SP when enters the battle, increase Switch/QTE physical damage, increase physical damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Balmung', 'Blood Dance', 'Xuanyuan Sword'],
    stigmata: [['Otto Apocalypse (T)'], ['Lier: Scarlet (M)'], ['Otto Apocalypse (B)']],
    review: [
      'Increase Lightning Damage, deals AoE physical damage/sec to nearby enemy'
    ]
  }, {
    level: 'advanced',
    weapon: ['Blood Dance'],
    stigmata: [['Tesla: Band (T)'], ['Mei: Pool Party (M)'], ['Isaac Newton (B)']],
    review: [
      'Increase massive physical damage'
    ]
  }]
}, {
  battlesuit: 'Blood Rose',
  file: 'himeko-br.png',
  emoji: 'HimekoBR',
  baserank: 'S',
  type: 'Psychic',
  characteristics: [
    'Melee attack, burst damage',
    'Gain SP by evade and attacking in regular status',
    'Ultimate skill offers an overwhelming power of annihilation'
  ],
  rate: {
    damage: 4,
    burst: 5,
    survive: 2,
    support: 1,
    simple: 4,
    control: 3
  },
  features: [
    'Fire',
    'Ignite',
    'Shield Break',
    'Charge'
  ],
  skill: {
    evasion: {
      title: 'Blood Movement',
      descriptions: [
        'Dodges sideways to evade enemy attacks.',
        '**Crimson Charge: **Unleashed a Charged Combo instanly after an Ultimate Evasion.',
        '**Macropyre:** Causes an explosion surrounding the attacker, dealing fire damage equal to 200% of ATK.',
        'Cooldown: 15 sec'
      ]
    },
    ultimate: {
      title: 'Blood Order',
      descriptions: [
        'Triggers Blood Order, which continuously consumes HP. Can be canceled',
        'Schorcing Flames: Unleashes charged attacks instanly, dealing fire damage.',
        'Consumes 30 SPto activate. Deals AOE fire damage equal to 200% of ATK and ignites enemies for 6 sec'
      ]
    },
    leader: {
      title: 'Blood Waltz',
      descriptions: [
        'Team receive bonus if leader',
        'Increase damage of whole team\'s charged attacks by 12% if all characters on the team are different type'
      ]
    }
  },
  overview: {
    advantage: [
      'Extremely high and wide-range fire elemental long burst damage',
      'Most potent in overbearing interruptions and floating capabilities',
      'Self-base has higher damage reduction and hard-controlled immunity',
      'Very strong in solo combat'
    ],
    disadvantage: [
      'Requires high attention on attack rhythm because of HP consumption',
      'No support ability',
      'Dependent on specific weapon for survivability'
    ],
},  
score: {
     pride: 8,
     wrath: 9,
     gluttony: 8,
     infinity: 8,
     memorial: 8,
     raid: 8,   
},
formations: [{
    valk: le,
    star: 5,
    reason: [
      'Paralyzed and lift effects trigger each other\'s QTE.',
      'Psychic type character, enjoys the effects of the Leader Skill.'
    ]
    }, {
    valk: vc,
    star: 5,
    reason: [
      'Deals AOE damage with Chariot\'s ultmate skill by attracting enemies.',
      'Psychic type character, enjoys the effects of the Leader Skill.'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Dragon Spine'],
    stigmata: [['Naoe Kanetsugu (T)'], ['Yodo Dono (M)'], ['Bronya: Magic (B)']],
    review: [
      'Heals when hit bleed enemy, increase physical and fire elemental damage'
    ]
  }, {
    level: 'beginner',
    weapon: ['King Cobra'],
    stigmata: [['Rowland (T)'], ['Yodo Dono (M)'], ['Rinaldo (B)']],
    review: [
      'Give Sp when enters battle, heals per sec, increase fire damage, heals when critical achieved'
    ]
  }, {
    level: 'advanced',
    weapon: ['Blood Dance', 'Xuanyuan Sword'],
    stigmata: [['Planck (T)'], ['Shakespeare (M)'], ['Planck (B)']],
    review: [
      'Easy SP gain, Heals when undeployed after using ulti (if HP less than 50%), increase all damage based on HP loss, increase fire damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Blood Dance'],
    stigmata: [['Planck (T)'], ['Nuwa (M)'], ['Fuxi (B)']],
    review: [
      'Heals when undeployed after using ulti (if HP less than 50%), increase all damage based on HP loss, increase fire damage and more damage dealt at burned enemy'
    ]
  }, {
    level: 'advanced',
    weapon: ['Blood Dance'],
    stigmata: [['Planck (T)'], ['Shakespeare (M)'], ['Fuxi (B)']],
    review: [
      'Heals when undeployed after using ulti (if HP less than 50%), increase all damage based on HP loss, increase elemental damage on burned enemy'
    ]
  }]
}]

export default himeko