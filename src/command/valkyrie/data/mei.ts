import {Battlesuit} from '../'
import {wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch} from '../../../utility/abbreviation'


const mei:Battlesuit[] = [{
  battlesuit: 'Crimson Impulse',
  file: 'mei-ci.png',
  emoji: 'MeiCI',
  baserank: 'B',
  type: 'Creature',
  characteristics: [
    'Melee, slash attack',
    'Displacement skills',
    'Stable AOE damage within small radius'
  ],
  rate: {
    damage: 3,
    burst: 4,
    survive: 4,
    support: 2,
    simple: 2,
    control: 2
  },
  features: [
    'Float',
    'Shield break',
    'Time'
  ],
  skill: {
    evasion: {
      title: 'Phanthom Blade',
      descriptions: [
        'Teleports quickly to evade enemy attacks.',
        '**Time Fracture: ** Triggers Time Fracture upon an Ultimate Evasion,',
        'Slowing all enemies for 3 sec',
        'Cooldown: 15 sec'
      ]
    },
    ultimate: {
      title: 'Amaterasu',
      descriptions: [
        'Executes targets in the front using Valkyrie\'s energy burst.',
        'Amaterasu: Deals physical damage up to 1150% of ATK',
        'SP Cost: 50'
      ]
    },
    leader: {
      title: 'Spirit of Loyalty',
      descriptions: [
        'Team receive bonus if leader',
        'Increase whole team\'s physical damage by 16% upon generating 20-hit or more combo'
      ]
    }
  },
  overview: {   
    advantage: [
      'High and stable mid-range continuous output'
  ],
    disadvantage: [
      'No support ability',
      'Higher-ranked Valkyries has similar or better advantages'
  ],
},  
score: {
     pride: 4,
     wrath: 6,
     gluttony: 5,
     infinity: 4,
     memorial: 3,
     raid: 5,   
},
formations: [{
    valk: ya,
    star: 4,
    reason: [
      'Provides a mecha barrier that enables dealing damage while being protected.'
    ]
    }, {
    valk: km,
    star: 4,
    reason: [
      'Combo skill lifts target into the air, triggering Knight Moonbeam\'s QTE.',
      'Creature type character, enjoys the effects of the Leader Skill.'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Lightning Soul'],
    stigmata: [['Elizabeth Bathory (T)'], ['Elizabeth Bathory (M)'], ['Attila (B)']],
    review: [
      'Increase DEF and Physical damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['3rd Sacred Relic'],
    stigmata: [['Michelangelo (T)'], ['Michelangelo (M)'], ['Michelangelo (B)']],
    review: [
      'Increase physical damage, critical rate, and critical damage'
    ]
  }, , {
    level: 'advanced',
    weapon: ['Void Blade'],
    stigmata: [['Cecilia Schariac (T)'], ['Cecilia Schariac (M)'], ['Cecilia Schariac (B)']],
    review: [
      'Increase physical damage, survivability, and grant bonus SP'
    ]
  }, {
    level: 'abyss',
    weapon: ['Void Blade'],
    stigmata: [['Lier: Scarlet (T)'], ['Lier: Scarlet (M)'], ['Attila (B)']],
    review: [
      'Reduce Bleeding Effect, increase physical damage on 30-hit more combo'
    ]
  }]
}, {
  battlesuit: 'Shadow Dash',
  file: 'mei-sd.png',
  emoji: 'MeiSD',
  baserank: 'A',
  type: 'Mecha',
  characteristics: [
    'Middle-ranged attack, high DPS',
    'Good at backstab, dealing burst damage',
    'Can summon clones'
  ],
  rate: {
    damage: 4,
    burst: 4,
    survive: 4,
    support: 2,
    simple: 1,
    control: 2
  },
  features: [
    'Floating',
    'Shield Break',
    'Time'
  ],
  skill: {
    evasion: {
      title: 'Shadow Step',
      descriptions: [
        'Teleports quickly to evade enemy attacks.',
        '**Body Clone: ** Triggers upon an ultimate evasion.',
        'Summons an Illusion to fight, the illusion\'s ATK is 25% of the Characters\'s ATK.',
        'Last for 5 sec, Cooldown: 10 sec.',
        'Only one illusion form evasion\'s skill can exist at a time'
      ]
    },
    ultimate: {
      title: 'Tsukuyomi',
      descriptions: [
        'Summons ultimate illusion to fight for you.',
        'The illusion has 50% of character\'s HP and 100% of the character\'s ATK and CRT.',
        'Immune to physical damage. Consumes 10% of its max HP',
        'SP Cost: 75'
      ]
    },
    leader: {
      title: 'Monster Outbreak',
      descriptions: [
        'Team receive bonus if leader',
        'Increase critical rate 17% when whole team\'s HP is more than 80%'
      ]
    }
  },
  overview: {
    advantage: [
      'High and stable mid-range continuous damage',
      'Extremely flexible',
      'Frequent high speed movement and floating ability',
      'Clone can attracts enemies',
      'Excellent damage enhancement skill'
    ],
    disadvantage: [
      'Need to master the branch rhythm for excessive blow',
      'Need to practice and get used to backstab'
    ],
},  
score: {
     pride: 6,
     wrath: 7,
     gluttony: 6,
     infinity: 6,
     memorial: 8,
     raid: 9,   
},
formations: [{
    valk: vr,
    star: 4,
    reason: [
      'Attracts enemies within a large radius to cover the weakness of Shadow Dash which has a short attack range',
      'Mecha type character, enjoys the effects of the Leader Skill.'
    ]
    }, {
    valk: db,
    star: 4,
    reason: [
      'Switch skill from Dimensional Breaker inflicts AOE Time Lock, provides a good condition for Shadow Dash to deal damage.',
      'Mecha type character, enjoys the effects of the Leader Skill.'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Lightning Soul'],
    stigmata: [['Elizabeth Bathory (T)'], ['Elizabeth Bathory (M)'], ['Sakamoto Ryouma (B)']],
    review: [
      'increase DEF, physical damage, and lightning damage'
    ]
  }, {
    level: 'beginner',
    weapon: ['Lightning Soul'],
    stigmata: [['Rinaldo (T)'], ['Rinaldo (M)'], ['Sakamoto Ryouma (B)']],
    review: [
      'Increase critical damage, branch attack damage, and paralyze enemy, '
    ]
  }, {
    level: 'advanced',
    weapon: ['Raikiri'],
    stigmata: [['Shakespeare (T)'], ['Mei: Pool Party (M)'], ['Isaac Newton (B)']],
    review: [
      'Increase Lightning damage, Clones deals more damage with Raikiri\'s skill'
    ]
  }, {
    level: 'advanced',
    weapon: ['Fairy Sword Silven', '3rd Sacred Relic', 'Void Blade'],
    stigmata: [['Celine (T)'], ['Planck (M)'], ['Celine (B)']],
    review: [
      'Increase Physical Damage and Critical Rate/Damage'
    ]
  }, {
    level: 'abyss',
    weapon: ['Fairy Sword Silven', '3rd Sacred Relic', 'Void Blade'],
    stigmata: [['Lier: Scarlet (T)'], ['Lier: Scarlet (M)', 'Planck (M)'], ['Lier: Scarlet (B)']],
    review: [
      'Reduce Bleeding Effect, increase physical damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Void Blade'],
    stigmata: [['Michelangelo (T)'], ['Michelangelo (M)', 'Planck (M)'], ['Michelangelo (B)']],
    review: [
      'Increase Physical Damage and Critical Rate/Damage'
    ]
  }]
}, {
  battlesuit: 'Valkyrie Bladestrike',
  file: 'mei-vb.png',
  emoji: 'MeiVB',
  baserank: 'A',
  type: 'Creature',
  characteristics: [
    'Melee attack, high DPS, suppress enemy.',
    'Best to fight single enemy.',
    'Deals destructive damage to targets in the air'
  ],
  rate: {
    damage: 4,
    burst: 4,
    survive: 3,
    support: 1,
    simple: 1,
    control: 1
  },
  features: [
    'Floating',
    'Knockback',
    'Shield Break',
    'Time'
  ],
  skill: {
    evasion: {
      title: 'Phantom Blade',
      descriptions: [
        'Teleports quickly to evade enemy attacks.',
        '**Time Fracture: ** Triggers Time Fracture upon an Ultimate Evasion,',
        'Slowing all enemies for 3 sec',
        'Cooldown: 15 sec'
      ]
    },
    ultimate: {
      title: 'Susanoo',
      descriptions: [
        'Enters the goddess state using Valkyrie\'s energy burst',
        'Burst: Consumes SP continuously to increase ATK.',
        'Consumes 20 SP to activate and 10 SP per sec until SP is depleted'
      ]
    },
    leader: {
      title: 'Enchantment of Sakura',
      descriptions: [
        'Team receive bonus if leader',
        'Increase DEF by 30% during team battles. Increase max HP of creature-type characters by an additional 7%'
      ]
    }
  },
  overview: {
    advantage: [
      'High and stable small range continuous damage',
      'Help teammates to replenish SP when attacking (SS-rank required)'
    ],
    disadvantage: [
      'When not in Burst Mode (Ultimate), attack range is small',
      'Weak in shield break'
    ],
},  
score: {
     pride: 7,
     wrath: 9,
     gluttony: 7,
     infinity: 7,
     memorial: 4,
     raid: 8,   
},
formations: [{
    valk: ya,
    star: 5,
    reason: [
      'Provides a mecha barrier that enables dealing damage while being protected.',
      'Leader skill combo provides Critical Rate.'
    ]
    }, {
    valk: vc,
    star: 3,
    reason: [
      'Deals damage with Chariot\'s ultimate skill.'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Lightning Soul'],
    stigmata: [['Naoe Kanetsugu (T)'], ['Elizabeth Bathory (M)'], ['Attila (B)']],
    review: [
      'Increase Lightning Damage, and Physical Damage'
    ]
  }, {
    level: 'beginner',
    weapon: ['Lightning Soul'],
    stigmata: [['Rinaldo (T)'], ['Attila (M)'], ['Attila (B)']],
    review: [
      'Increase Lightning Damage, and Physical Damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['3rd Sacred Relic'],
    stigmata: [['Ekaterina (T)'], ['Ekaterina (M)'], ['Ekaterina (B)']],
    review: [
      'Increase DEF, Physical Damage, and Movement speed on combo hit'
    ]
  }, {
    level: 'abyss',
    weapon: ['Void Blade'],
    stigmata: [['Lier: Scarlet (T)'], ['Lier: Scarlet (M)'], ['Isaac Newton (B)']],
    review: [
      'Reduce Bleeding Effect, increase physical damage'
    ]
  }]
},{
  battlesuit: 'Lightning Empress',
  file: 'mei-le.png',
  emoji: 'MeiLE',
  baserank: 'S',
  type: 'Psychic',
  characteristics: [
    'Melee, slash attack',
    'Possesses pure elemental power of lightning.',
    'Provides massive SP for the whole team'
  ],
  rate: {
    damage: 5,
    burst: 4,
    survive: 3,
    support: 5,
    simple: 3,
    control: 3
  },
  features: [
    'Frozen',
    'Lightning',
    'Paralyze',
    'Slowed'
  ],
  skill: {
    evasion: {
      title: 'Lightning Speed',
      descriptions: [
        'Teleports quickly to evade enemy attacks',
        '**God\'s Roar:** Triggers upon an Ultimate Evasion',
        'Paralyzes the attacker for 5 sec.',
        'Cooldown: 10 sec'
      ]
    },
    ultimate: {
      title: 'Dragon Cry',
      descriptions: [
        'Enter the Thor state, killing all enemies in a large area.',
        'Thor\'s Slash: Deals Physical and Lightning damage both equal to 900% of ATK in large area.',
        'SP Cost: 125'
      ]
    },
    leader: {
      title: 'Haunted Night',
      descriptions: [
        'Team receive bonus if leader',
        'Increase the initial SP by 50 in team battles.',
        'Increase damage by 20% when all three characters is psychic type.',
        'In the Open Worldthe initial SPbosst effect can be triggered once every 10 minutes, and damage of all characters on the team is increased by10%'
      ]
    }
  },
  overview: {
    advantage: [
      'Extremely strong Paralyzing (lightning vulnerable)',
      'Leader skill provide an amount of SP to teammates',
      'Strong damage enhancement skill'
    ],
    disadvantage: [
      'As an individual, hard to trigger partly damage enhance skill',
      'Slow SP gain',
      'Extremely weak in shield break'
    ],
},  
score: {
     pride: 5,
     wrath: 5,
     gluttony: 5,
     infinity: 5,
     memorial: 9,
     raid: 8,   
},
formations: [{
    valk: dp,
    star: 5,
    reason: [
      'Triggers each other\'s QTE.',
      'Psychic type character, enjoys the effects of the Leader Skill.'
    ]
    }, {
    valk: ss,
    star: 4,
    reason: [
      'Snowy Sniper\'s Ultimate triggers Frozen effect so as to activate the passive skill of Lightning Empress to increase damage.'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Pulse Katana Type-17'],
    stigmata: [['Shigure Kira (T)'], ['Sakamoto Ryoma (M)'], ['Edison (B)']],
    review: [
      'Increase switch skill (including QTE) damage, increase Lightning damage'
    ]
  }, {
    level: 'beginner',
    weapon: ['Pulse Katana Type-17'],
    stigmata: [['Nikola Tesla (T)'], ['Nikola Tesla (M)'], ['Nikola Tesla (B)']],
    review: [
      'Increase Lightning Damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['MagStorm'],
    stigmata: [['Nagamitsu (T)'], ['Nagamitsu (M)'], ['Tesla: Band (B)']],
    review: [
      'Increase Lightning Damage, and AoE Lightning Damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Raikiri'],
    stigmata: [['Shakespeare (T)'], ['Mei: Pool Party (M)'], ['Isaac Newton (B)']],
    review: [
      'Increase Lightning and Physical Damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Sheathed Blade'],
    stigmata: [['Shakespeare (T)'], ['Fuxi (M)'], ['Cleopatra (B)']],
    review: [
      'Increase Lightning and Physical Damage'
    ]
  }, {
    level: 'abyss',
    weapon: ['Void Blade'],
    stigmata: [['Shakespeare (T)', 'Nagamitsu (T)'], ['Lier: Scarlet (M)'], ['Lier: Scarlet (B)']],
    review: [
      'Reduce Bleeding Effect, increase Lightning damage'
    ]
  }]
}]

export default mei