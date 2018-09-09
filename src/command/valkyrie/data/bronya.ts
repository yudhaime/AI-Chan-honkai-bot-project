import {Battlesuit} from '../'
import {wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch} from '../../../utility/abbreviation'

const bronya:Battlesuit[] = [{
  battlesuit: 'Valkyrie Chariot',
  file: 'bronya-vc.png',
  emoji: 'BronyaVC',
  baserank: 'B',
  type: 'Psychic',
  characteristics: [
    'Excels at constant ranged DPS.',
    'Possesses powerful support and control abilities.',
    'Low cost ultimate skill with long duration'
  ],
  rate: {
    damage: 4,
    burst: 4,
    survive: 2,
    support: 5,
    simple: 2,
    control: 5
  },
  features: [
    'Stun',
    'Shield Break',
    'Charge',
    'Attract'
  ],
  skill: {
    evasion: {
      title: 'Dimension Shift',
      descriptions: [
        'Enters Dimensions Shift for a short period of time to evade attacks',
        '**Time Fracture:** Triggers Time Fracter upon an Ultimate Evasion,',
        'Slowing all enemies for 5 sec',
        'Cooldown: 15 sec'
      ]
    },
    ultimate: {
      title: 'Void Explosion',
      descriptions: [
        'Summons a black hole that draws in surrounding enemies.',
        'Black Hole last for 10 sec, during which time the caster is invicible.',
        '**Gravitational Collapse:** Reduces physical ATK of affected enemies by 50%',
        'SP Cost: 50'
      ]
    },
    leader: {
      title: 'Riot Armor',
      descriptions: [
        'Team receive bonus if leader',
        'Reduces ranged physical damage taken by whole team by 26%'
      ]
    }
  },
  overview: {
    advantage: [
      'Extremely Strong damage enhancement skill',
      'Time fracture via Evasion can triggered constanly (short cooldown)',
      'Wide-ranged and long-term Crowd Control'
    ],
    disadvantage: [
      'Damage is more rely on time fracture evasion'
    ],
},  
score: {
     pride: 8,
     wrath: 4,
     gluttony: 8,
     infinity: 8,
     memorial: 10,
     raid: 8,   
},
formations: [{
    valk: dp,
    star: 4,
    reason: [
      'Recovers HP of all team members. Relies on weapon skill to trigger Chariot\'s QTE.',
      'Psychic type character, enjoys the effects of the Leader Skill.'
    ]
    }, {
    valk: memento,
    star: 4,
    reason: [
      'Breaks enemy\'s shield, triggering shield broken effect and Goushinnso Memento\'s QTE.',
      'Black Holes draws enemies, providing a good condition for Goushinnso Memento to deal damage.'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['X-01 Azure Eyes'],
    stigmata: [['Nikola Tesla (T)'], ['Rinaldo (M)'], ['Rinaldo (B)']],
    review: [
      'Critical give paralysis effect and heal character\'s HP'
    ]
  }, {
    level: 'beginner',
    weapon: ['Markov Type A'],
    stigmata: [['Naoe Kanetsugu (T)'], ['Sakamoto Ryouma (M)'], ['Nikola Tesla (B)']],
    review: [
      'Increase QTE damage and physical damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Briareus PRI', 'Flint Sanada'],
    stigmata: [['Schrodinger (T)'], ['Dark Jixuanyuan (M)'], ['Dark Jixuanyuan (B)']],
    review: [
      'Since this character has more damage when on time fracture, this build will help deals massive damage.'
    ]
  }, {
    level: 'advanced',
    weapon: ['5th Sacred Relic'],
    stigmata: [['Schrodinger (T)'], ['Planck (M)'], ['Planck (B)']],
    review: [
      'Increase massive physical damage and ignoring interruption from most ememies\'s Attack while charge attack'
    ]
  }, {
    level: 'abyss',
    weapon: ['Tyr Wrist', '5th Sacred Relic'],
    stigmata: [['Lier: Scarlet (T)'], ['Planck (M)'], ['Lier: Scarlet (B)']],
    review: [
      'Reduce Bleeding Effect. Increase Physical damage'
    ]
  }]
}, {
  battlesuit: 'Yamabuki Armor',
  file: 'bronya-ya.png',
  emoji: 'BronyaYA',
  baserank: 'A',
  type: 'Psychic',
  characteristics: [
    'Ranged attack, High DPS',
    'Can protect the whole team with a Mecha shield.',
    'Ultimate recovers team members\'s HP'
  ],
  rate: {
    damage: 2,
    burst: 1,
    survive: 4,
    support: 5,
    simple: 4,
    control: 4
  },
  features: [
    'Stun',
    'Charge',
    'Impaired',
    'Time'
  ],
  skill: {
    evasion: {
      title: 'Dimension Field',
      descriptions: [
        'Holds the shield to defend against enemy\'s frontal attack.',
        '**Counterstrike:** Release the Defense button upon being attacked to counter-strike enemy.',
        '**Perfect Defense:** Counterstrike triggers Time Fracture, slowing all enemies for 5 sec.',
        'Cooldown: 15 sec'
      ]
    },
    ultimate: {
      title: 'Overdrive',
      descriptions: [
        'Pushes mecha\'s energy limit, entering the overdrive state',
        'Overload Consumption: Consumes 10 SP to activate and 10 SP per sec until SP is depleted.',
        'Enters the iron body state when overload consumption is active',
        'Switch: Tap the ultimate button to turn of Overdrive.',
        'Heat Reset: During burst, reset overheating laser-type weapon'
      ]
    },
    leader: {
      title: 'Spiritual Conherence',
      descriptions: [
        'Team receive bonus if leader',
        'Increase whole team\'s critical rate by 22% and psychic-type character\'s Critical damage by 23% upon generating a 30-hit or more combo'
      ]
    }
  },
  overview: {
    advantage: [
      'Shield provides protection from physical damage',
      'Long-term continuous weaken status',
      'Long-term time control; has **Domination** ability',
      'Stable HP recovery measure'
    ],
    disadvantage: [
      'Less flexible',
      'Self-based damage is lower'
    ],
},  
score: {
     pride: 8,
     wrath: 8,
     gluttony: 8,
     infinity: 8,
     memorial: 8,
     raid: 7,   
},
formations: [{
    valk: vc,
    star: 5,
    reason: [
      'QTE stuns the target, triggering Chariot\'s QTE.',
      'Deals damage with Chariot\'s ultimate skill.'
    ]
    }, {
    valk: vr,
    star: 5,
    reason: [
      'Evasion skill attracts enemies within a large radius to assist Yamabuki to impair multiple targets.',
      'Can follow up with the Ultimate Skill to slow multiple targets after inflicting AOE Impared effect.'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Markov Type A'],
    stigmata: [['Theresa: Origins (T)'], ['Theresa: Origins (M)'], ['Theresa: Origins (B)']],
    review: [
      'Give more damage upon using weapon skill'
    ]
  }, {
    level: 'advanced',
    weapon: ['Quantum Destroyer Type-II', 'Briareus PRI'],
    stigmata: [['Lier (T)'], ['Charlemagne (M)'], ['Zhugekongming (B)']],
    review: [
      'Give more high defense to the shield, increase survivability'
    ]
  }, {
    level: 'advanced',
    weapon: ['Quantum Destroyer Type-II', 'Briareus PRI'],
    stigmata: [['Zhugekongming (T)'], ['Shakespeare (M)'], ['Shakespeare (B)']],
    review: [
      'Reduce perfect shield\'s Cooldown'
    ]
  }, {
    level: 'advanced',
    weapon: ['Quantum Destroyer Type-II', 'Briareus PRI'],
    stigmata: [['Tesla: Band (T)'], ['Tesla: Band (M)'], ['Isaac Newton (B)']],
    review: [
      'Buff team damage and decrease team\'s damage taken'
    ]
  }]
}, {
  battlesuit: 'Snowy Sniper',
  file: 'bronya-ss.png',
  emoji: 'BronyaSS',
  baserank: 'A',
  type: 'Creature',
  characteristics: [
    'Ranged attack, High DPS',
    'Low requirement QTE skill',
    'Ultimate Skill freezing all enemies over a long time'
  ],
  rate: {
    damage: 3,
    burst: 3,
    survive: 4,
    support: 4,
    simple: 2,
    control: 4
  },
  features: [
    'Frozen',
    'Floating',
    'Charge',
    'Slowed'
  ],
  skill: {
    evasion: {
      title: 'Dimension Shift',
      descriptions: [
        'Enters Dimensions Shift for a short period of time to evade attacks',
        '**Frost Center: ** Triggers upon an Ultimate Evasion',
        'Freezes attacker for 3 sec. Decrease Movement Speed and surrounding enemies by 50% for 7 sec',
        'Cooldown: 15 sec'
      ]
    },
    ultimate: {
      title: 'cнег',
      descriptions: [
        'Summons artic snow, freezing all enemies.',
        'Land of Frost: Freezes all enemies for 8 sec',
        'SP Cost: 75'
      ]
    },
    leader: {
      title: 'Manchine Integration',
      descriptions: [
        'Team receive bonus if leader',
        'Decrease cooldowns of main effects triggered by whole team\'s ultimate evasion and perfecr defense by 3.5 sec.'
      ]
    }
  },
  overview: {
    advantage: [
      'Full map freeze control for long time',
      'Stable long-ranged damage',
      'Strong shield break ability',
      'Auto-evasion when charging make survivability higher'
    ],
    disadvantage: [
      'Weaker in solo combat',
      'More rely on Ultimate Skill'
    ],
},  
score: {
     pride: 10,
     wrath: 8,
     gluttony: 9,
     infinity: 10,
     memorial: 6,
     raid: 7,   
},
formations: [{
    valk: vc,
    star: 4,
    reason: [
      'Attracts enemies within a large radius and freezes the targets.',
      'Upgrade to enable the skill to stun targets and increase team members\' ranged damage.'
    ]
    }, {
    valk: vr,
    star: 3,
    reason: [
      'Evasion skill attracts enemies within a large radius to assist Snowy Sniper in dealing damage',
      'But relies on weapon skill or other character to trigger Snow Sniper\'s QTE.'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Markov Type A'],
    stigmata: [['Naoe Kanetsugu (T)'], ['Nikola Tesla (M)'], ['Dragon Boat Festival (B)']],
    review: [
      'Increase damage against frozen and broken shield enemy, increase switch/QTE physical damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['5th Sacred Relic', 'Tyr Wrist'],
    stigmata: [['Planck (T)'], ['Planck (M)'], ['Planck (B)']],
    review: [
      'More SP gain to cast ultimate skill more frequent, increase massive physical damage and ignoring interruption from most ememies\'s Attack while charge attack'
    ]
  }, {
    level: 'advanced',
    weapon: ['Tyr Wrist'],
    stigmata: [['Schrodinger (T)'], ['Planck (M)'], ['Bronya: Sloth (B))']],
    review: [
      'Gain SP/sec when undeployed, easy to spam ultimate skill'
    ]
  }, {
    level: 'advanced',
    weapon: ['Tyr Wrist', '5th Sacred Relic', 'Chiyou Cannon'],
    stigmata: [['Schrodinger (T)'], ['Planck (M)'], ['Planck (B)']],
    review: [
      'Increase massive physical damage and ignoring interruption from most ememies\'s Attack while charge attack'
    ]
  }]
}, {
  battlesuit: 'Dimensional Breaker',
  file: 'bronya-db.png',
  emoji: 'BronyaDB',
  baserank: 'S',
  type: 'Mecha',
  characteristics: [
    'Middle-ranged high DPS',
    'Switch skill triggers Time Slow, slowing enemies within small radius',
    'Ultimate skill Project Bunny taunts enemies'
  ],
  rate: {
    damage: 4,
    burst: 4,
    survive: 3,
    support: 4,
    simple: 2,
    control: 4
  },
  features: [
    'Paralyze',
    'Charge',
    'Time'
  ],
  skill: {
    evasion: {
      title: 'Down Dimension',
      descriptions: [
        'Holds the shield to defend against enemy\'s frontal attack.',
        '**Counterstrike:** Release the Defense button upon being attacked to counter-strike enemy.',
        '**Perfect Defense: ** Sends surrounding enemies floating during Counterstrike, Paralyzing them and inflicting Time Lock for 4 sec'
      ]
    },
    ultimate: {
      title: 'Project Bunny',
      descriptions: [
        'Project Bunny separates from character and attacks automatically.',
        'Mecha Frenzy: Last for 10 sec, during which time, Project Bunny is invicible and draws enemies towards it',
        'Surplus Energy: Turn own attack into laser attacks',
        'Heat Reset: During burst reset overheating laser-type weapons.'
      ]
    },
    leader: {
      title: 'Metal Gear',
      descriptions: [
        'Team receive bonus if leader',
        'Increase whole team\'s SP recovery during attacks by 25%. If all three character are of Mecha-type, increase the whole team\'s damage by 20%'
      ]
    }
  },
  overview: {
    advantage: [
      'Switch skill makes self-invincible and long time-lock with bleeding'
    ],
    disadvantage: [
      'Nothing... Perfect Loli ever'
    ],
},  
score: {
     pride: 10,
     wrath: 10,
     gluttony: 10,
     infinity: 10,
     memorial: 7,
     raid: 8,   
},
formations: [{
    valk: le,
    star: 5,
    reason: [
      'Paralyzed and lift effects trigger each other\'s QTE.'
    ]
    }, {
    valk: vr,
    star: 5,
    reason: [
      'Attracts enemies within a large radius to assist Dimensional Break in dealing damage.',
      'Mecha type character, enjoys the effects of the Leader Skill.'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Markov Type A'],
    stigmata: [['Theresa: Gluttony (T)'], ['Rinaldo (M)'], ['Rinaldo (B)']],
    review: [
      'Give unique way to gain more SP, increase critical rate and inflict paralysis status when ctritical hit'
    ]
  }, {
    level: 'advanced',
    weapon: ['Tyr Wrist'],
    stigmata: [['Schrodinger (T)'], ['Planck (M)'], ['Isaac Newton (B)']],
    review: [
      'Increase massive Physical damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Book of Fuxi'],
    stigmata: [['Planck (T)'], ['Planck (M)'], ['Planck (B)']],
    review: [
      'More SP gain to cast ultimate skill more frequent, increase massive physical damage and ignoring interruption from most ememies\'s Attack while charge attack'
    ]
  }, {
    level: 'advanced',
    weapon: ['Briareus PRI'],
    stigmata: [['Tesla: Band (T)'], ['Mei: Pool Party (M)'], ['Isaac Newton (B)']],
    review: [
      'Increase massive physical damage'
    ]
  }]
}, {
  battlesuit: 'Wolf\'s Dawn',
  file: 'bronya-wd.png',
  emoji: 'BronyaWD',
  baserank: 'A',
  type: 'Psychic',
  characteristics: [
    'Ranged  diversionary attack',
    'Project Bunny can permanently self-defend and attract enemy\'s attention',
    'Skilled at tying down the enemy alone and high survivability'
  ],
  rate: {
    damage: 3,
    burst: 4,
    survive: 4,
    support: 4,
    simple: 5,
    control: 3
  },
  features: [
    'Stun',
    'Shield Break',
    'Charge',
    'Weaken'
  ],
  skill: {
    evasion: {
      title: 'Simulated Flicker',
      descriptions: [
        'Enters Dimensions Shift for a short period of time to evade attacks',
        '**Simulated Flicker:** Summons Project Bunny to attack enemies upon an Ultimate Evasion,',
        'dealing physical damage equal to 350% of Project bunny\'s ATK and triggering Time Fracture that lasts for 3 sec.',
        'Cooldown: 15 sec.',
        'Ultimate Evasions recover paralyzed Project Bunny\'s HP by 50%'
      ]
    },
    ultimate: {
      title: 'Thundershock',
      descriptions: [
        'Reverberates with Project Bunny, causing it to launch powerful attacks.',
        'Project Bunny smashes the ground 3 times dealing damage to surrounding enemies and stunning them, as well as casting Time Lock on weakened enemies for 5 sec',
        'SP Cost: 55',
        '1st Smash: Deals Physical Damage equal to 275% of Project Bunny\'s ATK',
        '2nd Smash: Deals Physical Damage equal to 425% of Project Bunny\'s ATK',
        '3rd Smash: Deals Physical Damage equal to 575% of Project Bunny\'s ATK',
      ]
    },
    leader: {
      title: 'Harmonic Resonance',
      descriptions: [
        'Team receive bonus if leader',
        'Increase whole team\'s Critical Rate by 22% and Psychic Characters\' Critical Damage by 23% upon generating 30-hit or more combo.'
      ]
    }
  },
  overview: {
    advantage: [
      'Shield provides protection from elemental damage',
      'Ability to control Project bunny',
      'Project Bunny can effectively attracts enemies'
    ],
    disadvantage: [
      'Basic damage is low'
    ],
},  
score: {
     pride: 3,
     wrath: 3,
     gluttony: 3,
     infinity: 3,
     memorial: 9,
     raid: 5,   
},
formations: [{
    valk: vc,
    star: 5,
    reason: [
      'Triggers each others\' QTE. Ultimate make a good match',
      'Psychic type character enjoys the effects of the Leader Skill'
    ]
    }, {
    valk: le,
    star: 4,
    reason: [
      'Increase Lightning Empress\' elemental damage when barrier is activated and resist negative effect',
      'Psychic type character enjoys the effects of the Leader Skill'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Markov Type A', 'Cathode Type-09'],
    stigmata: [['Theresa: Origins (T)'], ['Theresa: Origins (M)'], ['Theresa: Origins (B)']],
    review: [
      'Increase damage upon using weapon skill, shorten cooldown of weapon skill'
    ]
  }, {
    level: 'advanced',
    weapon: ['Quantum Destroyer Type-II'],
    stigmata: [['Nagamitsu (T)'], ['Nagamitsu (M)'], ['Nagamitsu (B)']],
    review: [
      'Freeze enemies arrund and increase physical damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Briareus PRI'],
    stigmata: [['Tesla: Band (T)'], ['Tesla: Band (M)'], ['Tesla: Band (B)']],
    review: [
      'Buff herself and team\'s Physical damage, movement speed, and lightning damage'
    ]
  }]
}, {
  battlesuit: 'Black Nucleus',
  file: 'bronya-bn.png',
  emoji: 'BronyaBN',
  baserank: 'S',
  type: 'Creature',
  characteristics: [
    'Close-ranged burst attack',
    'Having many skills to increase damage',
    'Deals a deadly blow from enemy\'s  back after it become invisible'
  ],
  rate: {
    damage: 4,
    burst: 5,
    survive: 3,
    support: 1,
    simple: 2,
    control: 1
  },
  features: [
    'Fire',
    'Stun',
    'Shield Break',
    'Charge'
  ],
  skill: {
    evasion: {
      title: 'Dimensional Interruption',
      descriptions: [
        'Dodges sideways to evade enemy attacks and become invisible',
        '**Dimensional Interruption: ** Becomes invisible for 6 sec upon an Ultimate Evasion. Cooldown: 20 sec',
        'Can\'t become enemies\' Target when invisible. Blocks all incoming damage and be immune to negative effects when attacked.',
        'Greatly increase Movement Speed and Attack Speed.',
        'Invisible statusis removed when tapping the Attack button, using weapon skills/Ultimates, or swithching characters'
      ]
    },
    ultimate: {
      title: 'Universal Murder',
      descriptions: [
        'Bombards the designated area.',
        'Creates a small immobilizing field surrounding the target and enemies surrounding it, dealing physical damage equal to 20x80% of ATK',
        'SP Cost: 125'
      ]
    },
    leader: {
      title: 'Virtual Maneuver',
      descriptions: [
        'Team receive bonus if leader',
        'Decrease cooldowns of main effects triggered by whole team\'s Ultimate Evasions and Perfect Defense by 3.5 sec'
      ]
    }
  },
  overview: {
    advantage: [
      'Highest but smaller range of physical short burst damage',
      'Stealth features with auto-evasion make survivability higher',
      'Excellent damage enhancement skill'
    ],
    disadvantage: [
      'No support ability',
      'Damage highly dependent on specific line-up and equipment',
      'Highly relies on teammates\' line up'
    ],
},  
score: {
     pride: 8,
     wrath: 9,
     gluttony: 8,
     infinity: 8,
     memorial: 9,
     raid: 9,   
},
formations: [{
    valk: vc,
    star: 5,
    reason: [
      'Chariot\'s ultimate skill attracts enemies within a large radius and triggers each others\'s QTE',
      'Upgrade to increase team member\'s ranged damage'
    ]
    }, {
    valk: sd,
    star: 4,
    reason: [
      'Shadow Dash\' branch attack easily float target into the air and triggering Black Nucleus\' QTE'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Markov Type C'],
    stigmata: [['Naoe Kanetsugu (T)'], ['Elizabeth Bathory (M)'], ['Attila (B)']],
    review: [
      'Increase physical damage when Switch/QTE, 30-hit combo, and broken shield enemy'
    ]
  }, {
    level: 'beginner',
    weapon: ['X-01 Azure Eyes'],
    stigmata: [['Bronya: Magic (T)'], ['Bronya: Magic (M)'], ['Sakura: Blistering Summer (B)']],
    review: [
      'Increase charge and ranged physical damage, Increase damage when enters battle'
    ]
  }, {
    level: 'advanced',
    weapon: ['Star Destroyer 19c'],
    stigmata: [['Sin Mal (T)'], ['Planck (M)'], ['Sin Mal (B)']],
    review: [
      'Increase physical damage, Increase Physical Damage and Critical Rate during stealth mode'
    ]
  }, {
    level: 'advanced',
    weapon: ['Flint Sanada', 'Briareus PRI'],
    stigmata: [['Schrodinger (T)'], ['Planck (M)'], ['Sin Mal (B)']],
    review: [
      'Increase physical damage, Increase critical rate after stealth mode'
    ]
  }, {
    level: 'advanced',
    weapon: ['Star Destroyer 19c', 'Flint Sanada', 'Briareus PRI'],
    stigmata: [['Schrodinger (T)'], ['Planck (M)'], ['Lier (B)', 'Planck (B)']],
    review: [
      'Increase massive physical damage and ignoring interruption from most ememies\'s Attack while charge attack'
    ]
  }]
}]

export default bronya