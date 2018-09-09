import {Battlesuit} from '../'
import {wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch} from '../../../utility/abbreviation'

const kiana:Battlesuit[] = [{
  battlesuit: 'White Comet',
  file: 'kiana-wc.png',
  emoji: 'KianaWC',
  baserank: 'B',
  type: 'Mecha',
  characteristics: [
    'Melee attacker with constant DPS.',
    'Good at interrupting enemy attacks',
    'High survivability'
  ],
  rate: {
    damage: 2,
    burst: 2,
    survive: 4,
    support: 3,
    simple: 4,
    control: 4
  },
  features: [
    'Stun',
    'Floating',
    'Shield Break',
    'Time'
  ],
  skill: {
    evasion: {
      title: 'Time Shift',
      descriptions: [
        'Rolls quickly to evade enemy attacks.',
        '**Time Fracture:** Triggers Time Fracter upon an Ultimate Evasion,',
        'Slowing all enemies for 3 sec',
        'Cooldown: 15 sec'
      ]
    },
    ultimate: {
      title: 'Valkyrie Burst',
      descriptions: [
        'Enters the goddess state using Valkyrie\'s energy burst',
        'Burst: Consumes SP continuously to increase own Attack Speed and Ignore Interrupt',
        'Consume 20 SP to activate and 10 SP/sec until SP depleted'
      ]
    },
    leader: {
      title: 'Meteor Bless',
      descriptions: [
        'Team receive bonus if leader',
        'Increase max HP by 16%  during team battles'
      ]
    }
  },
  overview: {
    advantage: [
      'Attack inflicts stunt'
    ],
    disadvantage: [
      'Overpowered by other valkyries in mid & late game'
    ],
},  
score: {
     pride: 2,
     wrath: 2,
     gluttony: 2,
     infinity: 2,
     memorial: 2,
     raid: 4,   
},
formations: [{
    valk: vc,
    star: 4,
    reason: [
      `Interrupts enemy's attack and stuns the target, triggering Chariot's QTE.`, 
      `Deals damage with Chariot's ultimate skill.`
    ]
    }, {
      valk: ci,
      star: 3,
      reason: [
        'Basic attack lifts target into the air, triggering Crimson Impulse\'s QTE.',
        'Triggering each others QTE by lifts enemy to the air'
      ]
      }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Water Spirit Type-I'],
    stigmata: [['Naoe Kanetsugu (T)'], ['Elizabeth Bathory (M)'], ['Nikola Tesla (B)']],
    review: [
      'Increase damage against broken-shield and stunned enemy'
    ]
  }, {
    level: 'advanced',
    weapon: ['Thunder Kikaku'],
    stigmata: [['Cleopatra (T)'], ['Cleopatra (M)'], ['Isaac Newton (B)']],
    review: [
      'Increase more high damage against broken-shield and stunned enemy'
    ]
  }, {
    level: 'advanced',
    weapon: ['Mjolnir'],
    stigmata: [['Tesla: Band (T)'], ['Mei: Pool Party (M)'], ['Isaac Newton (B)']],
    review: [
      'High DPS setup, increase physical damage significantly'
    ]
  }]
}, {
  battlesuit: 'Valkyrie Ranger',
  file: 'kiana-vr.png',
  emoji: 'KianaVR',
  baserank: 'A',
  type: 'Mecha',
  characteristics: [
    'Uses ranged gun attacks for constant DPS.',
    'Provides support and control skills.',
    'Very high solo combat power'
  ],
  rate: {
    damage: 3,
    burst: 4,
    survive: 5,
    support: 4,
    simple: 4,
    control: 4
  },
  features: [
    'Fire',
    'Stun',
    'Shield Break',
    'Attract'
  ],
  skill: {
    evasion: {
      title: 'Time Singularity',
      descriptions: [
        'Rools quickly to evade enemy attacks.',
        '**Energy Blackhole:** Triggers upon an Ultimate Evasion',
        'Draws in all enemies surrounding the attackers for 2 sec',
        'Cooldown: 10 sec'
      ]
    },
    ultimate: {
      title: 'Gungnir Fire',
      descriptions: [
        'Summons Valkyrie\'s heavy cannon to bombard enemies in the front.',
        '**Uncanny Cannon:** Deals physical damage equal to 1200% of ATK',
        'SP Cost: 50'
      ]
    },
    leader: {
      title: 'Flying Meteor',
      descriptions: [
        'Team receive bonus if leader',
        'Increase team\'s movement speed by 15% and attack speed of mecha characters by 8%'
      ]
    }
  },
  overview: {
    advantage: [
      'Crowd control',
      'Ultimate has high hit counts',
      'Buffs coop team skill'	
    ],
    disadvantage: [
      'Self-based damage is lower',
      'Need a good skill for Crowd Control'
    ],
},  
score: {
     pride: 9,
     wrath: 5,
     gluttony: 9,
     infinity: 7,
     memorial: 4,
     raid: 6,   
},
formations: [{
    valk: memento,
    star: 5,
    reason: [
      'Breaks enemy\'s shield, triggering shield broken effect for Goushinnso Memento\'s QTE. Black Holes from evasion skill draws enemies, providing a good condition for Goushinnso Memento to deal damage.'
    ]
    }, {
      valk: vc,
      star: 3,
      reason: [
        'Breaks enemy\'s shield and stuns the target, triggering Chariot\'s QTE.',
        'Deals damage with Chariot\'s ultimate skill.'
      ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Colt Peacemaker', 'Artemist Guardian', 'Water Spirit Type-II'],
    stigmata: [['Rowland (T)'], ['Theresa: Origins (M)'], ['Rinaldo (B)']],
    review: [
      'Easily trigger any kind of QTE with short cooldown of weapon skill'
    ]
  }, {
    level: 'beginner',
    weapon: ['Colt Peacemaker', 'Artemist Guardian', 'Water Spirit Type-II'],
    stigmata: [['Theresa: Origins (T)'], ['Theresa: Origins (M)'], ['Theresa: Origins (B)']],
    review: [
      'Reduce weapon\'s skill cooldown and increase physical damage and attack speed after using weapon\'s skill'
    ]
  }, {
    level: 'advanced',
    weapon: ['Mjolnir'],
    stigmata: [['Cleopatra (T)'], ['Cleopatra (M)'], ['Cleopatra (B)']],
    review: [
      'Increase character\'s movement speed and damage to broken-shield and stunned enemies, increase ranged damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Mjolnir', 'Artemist Guardian', 'Water Spirit Type-II'],
    stigmata: [['Seele Vollerei (T)'], ['Siegfried (M)'], ['Seele Vollerei (B)']],
    review: [
      'Increase physical damage and attack speed when SP more than 150, short cooldown for weapon skill'
    ]
  }, {
    level: 'abyss',
    weapon: ['Mjolnir', 'Artemist Guardian', 'Water Spirit Type-II'],
    stigmata: [['Lier: Scarlet (T)'], ['Siegfried Kaslana (M)'], ['Lier: Scarlet (B)']],
    review: [
      'Reduce Bleeding Effect, increase physical damage, and short cooldown for weapon\'s skill'
    ]
  }, {
    level: 'abyss',
    weapon: ['Mjolnir', 'Artemist Guardian', 'Water Spirit Type-II'],
    stigmata: [['Lier: Scarlet (T)'], ['Lier: Scarlet (M)'], ['Kepler (B)']],
    review: [
      'Reduce Bleeding Effect. Increase Critical and heals when critical achieved'
    ]
  }]
}, {
  battlesuit: 'Divine Prayer',
  file: 'kiana-dp.png',
  emoji: 'KianaDP',
  baserank: 'A',
  type: 'Psychic',
  characteristics: [
    'Melee attack, high DPS',
    'Can debuff enemies in different ways',
    'Massive AOE HP Recovery'
  ],
  rate: {
    damage: 2,
    burst: 2,
    survive: 5,
    support: 5,
    simple: 4,
    control: 4
  },
  features: [
    'Floating',
    'Impaired',
    'Time',
    'Weaken'
  ],
  skill: {
    evasion: {
      title: 'Time Fetter',
      descriptions: [
        'Rolls quickly to evade enemy attacks',
        '**Time Fetter:** Triggers upon an Ultimate Evasion.',
        'Sends the attackers floating and inflicts time lock for 4 sec',
        'Cooldown: 8 sec'
      ]
    },
    ultimate: {
      title: 'Valkyrie Refuge',
      descriptions: [
        'Enter the HolyLight stage using burst of holy energy',
        '**Burst:** Consumes SP continuously to increase ATK. Triggers time fracture during the burst.',
        '**Holy Light:** Recovers whole team\'s SP every 0.5 sec after learning the sub-skill.',
        '**Continous Burst:** Consumes 20 SP to activate and 10 SP per sec until SP is depleted. After being activated for 20 sec, SP consumtion rate will increased'
      ]
    },
    leader: {
      title: 'Nebula Protection',
      descriptions: [
        'Team receive bonus if leader',
        'Increase whole team\'s elemental (ice, fire, lightning) damage by 28%, and decrease whole team\'s elemental damage taken by 24%'
      ]
    }
  },
  overview: {
    advantage: [
      'Long-term time fracture (timelock) with short cool down',
      'Easy and fast to heal whole team\'s HP by Ultimate skill',
      'Good and easy evasion skill (at SS-Rank)'
    ],
    disadvantage: [
      'Basic damage is lower'
    ],
},  
score: {
     pride: 9,
     wrath: 10,
     gluttony: 9,
     infinity: 9,
     memorial: 9,
     raid: 9,   
},
formations: [{
    valk: le,
    star: 5,
    reason: [
      'Paralyzed and lift effects trigger each other\'s QTE.',
      'Psychic type character, enjoys the effects of the Leader Skill.'
    ]
    }, {
    valk: ss,
    star: 3,
    reason: [
      'Ultimate evasion lifts enemies into the air, triggering the Snowy Sniper\'s QTE.'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Colt Peacemaker', 'Water Spirit Type-I'],
    stigmata: [['Rowland (T)'],['Rinaldo (M)'],['Rinaldo (B)']],
    review: [
      'Good setup to trigger other valkyrie\'s QTE'
    ]
  }, {
    level: 'beginner',
    weapon: ['Colt Peacemaker', 'Water Spirit Type-I'],
    stigmata: [['Rinaldo (T)'],['Sakamoto Ryouma (M)'],['Rinaldo (B)']],
    review: [
      'Increase QTE damage and Critical Rate'
    ]
  }, {
    level: 'advanced',
    weapon: ['2nd Sacred Relic'],
    stigmata: [['Cecilia Schariac (T)'], ['Cecilia Schariac (M)'], ['Kepler (B)']],
    review: [
      'Increase physical damage, survivability, and grant bonus SP'
    ]
  },{
    level: 'abyss',
    weapon: ['2nd Sacred Relic', 'Mjolnir', 'Judgement of Shamash'],
    stigmata: [['Dark Jixuanyuan (T)'], ['Dark Jixuanyuan (M)'], ['Schrodinger (B)']],
    review: [
      'Fast SP gain to cast ultimate skill more frequently and heals whole team'
    ]
  }, {
    level: 'abyss',
    weapon: ['2nd Sacred Relic', 'Mjolnir', 'Judgement of Shamash'],
    stigmata: [['Lier: Scarlet (T)'], ['Dracula (M)'], ['Lier: Scarlet (B)']],
    review: [
      'Reduce bleeding effect, increase damage and attack speed'
    ]
  }, {
    level: 'memorial',
    weapon: ['Thunder Kikaku'],
    stigmata: [['Dark Jixuanyuan (T)'], ['Mei: Pool Party (M), Tesla: band (M)'], ['Isaac Newton (B)']],
    review: [
      'DPS build, Divine Prayer deals more damage with this setup'
    ]
  }]
}, {
  battlesuit: 'Knight Moonbeam',
  file: 'kiana-km.png',
  emoji: 'KianaKM',
  baserank: 'S',
  type: 'Creature',
  characteristics: [
    'Mid-to-close ranged AOE attack, High DPS.',
    'Easy triggerring of Time Fracture.',
    'High burst damage with the help of debuffing CC'
  ],
  rate: {
    damage: 4,
    burst: 5,
    survive: 4,
    support: 1,
    simple: 2,
    control: 4
  },
  features: [
    'Paralyze',
    'Stun',
    'Time'
  ],
  skill: {
    evasion: {
      title: 'Time Fissure',
      descriptions: [
        'Rolls quickly to evade enemy attacks',
        '**Time Fissure:** Triggers Time Fracture upon an Ultimate Evasion,',
        'Slowing all enemies for 3 sec',
        'Cooldown: 20 sec',
        '**Time Distortion:** Increase Movement Speed significantly during The Time Fracture triggered by own evasion'
      ]
    },
    ultimate: {
      title: 'Gungnir Execution',
      descriptions: [
        'Summons Valkyrie\'s heavy cannon in the air to bombard enemies',
        'Cannon deals total physical damage equal to 1900% of ATK',
        'SP Cost: 125'
      ]
    },
    leader: {
      title: 'Nebula Glitter',
      descriptions: [
        'Team receive bonus if leader',
        'Increase Critical damage of the whole team by 30%. If all three characters are creature type, increases the whole team\'s damage by 20%'
      ]
    }
  },
  overview: {
    advantage: [
      'Wide attack range with extremely high DPS',
      'Has one of the strongest coop team skill and damage enhancement',
      'Clears non-boss stages very fast'
    ],
    disadvantage: [
      'Can\'t deal effective damage to enemy that immunes to paralyze (BOSS/Elite)',
      'Attacks are easily interrupted'
    ],
},  
score: {
     pride: 8,
     wrath: 9,
     gluttony: 9,
     infinity: 9,
     memorial: 9,
     raid: 10,   
},
formations: [{
    valk: bn,
    star: 5,
    reason: [
      'Easily triggering Time Fracture during evasion to triggering Black Nucleus\' QTE'
    ]
    },{
    valk: ve,
    star: 4,
    reason: [
      'Good for Coop Mode, Triggering each others\' QTE and enjoy long duration of Time Fracture'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Water Spirit Type-I', 'Dominator Pistol'],
    stigmata: [['Nikola Tesla (T)'], ['Rinaldo (M)'], ['Rinalto (B)']],
    review: [
      'Increase critical rate and damage dealt against paralysis status enemies'
    ]
  }, {
    level: 'beginner',
    weapon: ['Water Spirit Type-I', 'Dominator Pistol'],
    stigmata: [['Rinaldo (T)'], ['Rinaldo (M)'], ['Attila (B)']],
    review: [
      'Increase damage and paralyze enemy when achieves critical hit, Increase damage when over 30-hit combo'
    ]
  }, {
    level: 'advanced',
    weapon: ['Hyper Railguns', 'Mjolnir', 'Thunder Kikaku', 'Energy Leaper'],
    stigmata: [['Kepler (T)'], ['Kepler (M)'], ['Cleopatra (B)']],
    review: [
      'Increase Critical damage, infict paralyze status when critical achieved, deals more damage to paralyzed enemy'
    ]
  }, {
    level: 'advanced',
    weapon: ['Judgement of Shamash', 'Artemist Guardian'],
    stigmata: [['Zhugekongming (T)'], ['Shakespeare (M)'], ['Shakespeare (B)']],
    review: [
      'Reduce evasion cooldown and increase fire and ice damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Mjolnir'],
    stigmata: [['Lier: Scarlet (T)'], ['Mei: Pool Party (M)'], ['Isaac Newton (B)']],
    review: [
      'High DPS setup, increase physical damage'
    ]
  }]
}]

export default kiana