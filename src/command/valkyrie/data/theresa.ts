import {Battlesuit} from '../'
import {wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch} from '../../../utility/abbreviation'

const theresa:Battlesuit[] = [{
  battlesuit: 'Valkyrie Pledge',
  file: 'teri-vp.png',
  emoji: 'TheresaVP',
  baserank: 'A',
  type: 'Psychic',
  characteristics: [
    'Middle-ranged AOE suppressing',
    'Long attack range, fast SP recovery',
    'Weapon skill boosts damage'
  ],
  rate: {
    damage: 3,
    burst: 3,
    survive: 4,
    support: 3,
    simple: 4,
    control: 3
  },
  features: [
    'Lightning',
    'Knockback',
    'Charge',
    'Immobilize'
  ],
  skill: {
    evasion: {
      title: 'Time Refuge',
      descriptions: [
        'Quickly dodges sideways to evade enemy attacks. Can be triggered two times in a row.',
        'Increase Movement Speed by 40% for 3 sec after an Ultimate Evasion.',
        '**Time Fracture:** Triggers Time Fracture upon an Ultimate Evasion, slowing all enemies for 3 sec.',
        'Cooldown: 15 sec'
      ]
    },
    ultimate: {
      title: 'Spearsss',
      descriptions: [
        'Throw laser spear into the air, spear turns into rain to attack enemies.',
        'Deals total physical damage equal to 25x75% of ATK',
        'SP Cost: 75'
      ]
    },
    leader: {
      title: 'Our Pledge',
      descriptions: [
        'Team receive bonus if leader',
        'Decrease durations of most of the whole team\'s negative effects by 35%. Increase psychic-type character\'s elemental damage by 21%'
      ]
    }
  },
  overview: {
    advantage: [
      'High combo-hits counts',
      'Able to do many combination status'
    ],
    disadvantage: [
      'Damage is highly relies on specific weapon (Judah-Chan)'
    ],
},  
score: {
     pride: 6,
     wrath: 6,
     gluttony: 6,
     infinity: 6,
     memorial: 9,
     raid: 7,   
},
formations: [{
    valk: vc,
    star: 4,
    reason: [
      'Deals damage with Chariot\'s ultimate skill.',
      'Psychic type character, enjoys the efects of the Leader Skill'
    ]
    }, {
    valk: le,
    star: 3,
    reason: [
      'Lightning damage dealing characters, high usage on conductive effect.',
      'Psychic type character, enjoys the efects of the Leader Skill'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Lightning Angel'],
    stigmata: [['Nikola Tesla (T)'], ['Rinaldo (M)'], ['Rinaldo (B)']],
    review: [
      'Paralyze enemy when critical hit and increase the damage dealt'
    ]
  }, {
    level: 'beginner',
    weapon: ['Lightning Angel'],
    stigmata: [['Theresa: Origins (T)'], ['Theresa: Origins (M)'], ['Theresa: Origins (B)']],
    review: [
      'Increase physical damage, increase more attack speed and physical damage upon deploying cross, shorten cross skill damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Oath of Judah'],
    stigmata: [['Shakespeare (T)'], ['Mei: Pool Party (M)'], ['Otto Apocalypse (B)']],
    review: [
      'Deals massive lightning damage, increase Physical damage, and helps Judah-Chan deals more lightning damage'
    ]
  }]
}, {
  battlesuit: 'Violet Executer',
  file: 'teri-ve.png',
  emoji: 'TheresaVE',
  baserank: 'S',
  type: 'Mecha',
  characteristics: [
    'Middle-ranged flexible DPS',
    'Long ranged AOE knock back attack',
    'Relies '
  ],
  rate: {
    damage: 5,
    burst: 4,
    survive: 4,
    support: 3,
    simple: 3,
    control: 3
  },
  features: [
    'Stun',
    'Floating',
    'Bleed',
    'Charge'
  ],
  skill: {
    evasion: {
      title: 'Iron Maiden',
      descriptions: [
        'Quickly dodges sideways to evade enemy attacks. Can be triggered two times in a row.',
        'Increase Movement speed by 40% for 3 sec after an Ultimate Evasion.',
        '**Iron Maiden:** Drops a giant axe out of the air upon an Ultimate Evasion,',
        'Dealing Physical Damage equal to 200% of ATK to the attacker and all surrounding enemies and knocking them down.',
        'Cooldown: 15 sec'
      ]
    },
    ultimate: {
      title: 'Execute Mode',
      descriptions: [
        'Enters the Valkyrie state, turning the cross into the ethernal form to attack enemies with ultimate',
        'Consumes SP constantly to enhance all attacks.',
        'Consumes 20 SP to activate and 10 SP per sec until SP is depleted',
        'SP Cost: 100'
      ]
    },
    leader: {
      title: 'Execution Time',
      descriptions: [
        'Team receive bonus if leader',
        'Increase physical damage by 12% when Burst is triggered. Increase damage by 8% if three characters on the team are different types'
      ]
    }
  },
  overview: {
    advantage: [
      'High and wide physical burst damage in a short-time',
      'Excellent in shield breaking',
      'Strong team damage reduction skill'
    ],
    disadvantage: [
      'Sustained damage is weak',
      'Low combat capability for solo-combat'
    ],
},  
score: {
     pride: 6,
     wrath: 6,
     gluttony: 6,
     infinity: 6,
     memorial: 9,
     raid: 7,   
},
formations: [{
    valk: vc,
    star: 4,
    reason: [
      'Deals damage with Chariot\'s ultimate skill.',
      'Provides Violet Executer a long lasting bleeding effect to deal more damage'
    ]
    }, {
    valk: db,
    star: 3,
    reason: [
      'Provides Violet Execuer bleeding, triggering Violet Executer\'s QTE.',
      'Mecha Type Character enjoys the effects of the Leader Skill'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['The Dark Crusher'],
    stigmata: [['Theresa: Origins (T)'], ['Attila (M)'], ['Attila (B)']],
    review: [
      'Increase physical damage upon using weapon skill, increase DEF and physical damage on combo-hit'
    ]
  }, {
    level: 'beginner',
    weapon: ['Lightning Angel'],
    stigmata: [['Naoe Kanetsugu (T)'],['Sakamoto Ryouma (M)'], ['Attila (B)']],
    review: [
      'Increase physical damage to broken shield enemy, Switch/QTE, and combo hit'
    ]
  }, {
    level: 'advanced',
    weapon: ['Blood Embrace'],
    stigmata: [['Cleopatra (T)'], ['Dark Jixuanyuan (M)'], ['Dark Jixuanyuan (B)']],
    review: [
      'Easy to bleed enemy, increase damage to broken shield enemy and when Time Fracture triggerred (by her QTE or other team)'
    ]
  }, {
    level: 'advanced',
    weapon: ['Blood Embrace'],
    stigmata: [['Dracula (T)'], ['Dark Jixuanyuan (M)'], ['Dark Jixuanyuan (B)']],
    review: [
      'Easy to bleed enemy and increase damage dealt against them, increase damage when Time Fracture triggerred (by her QTE or other team)'
    ]
  }, {
    level: 'advanced',
    weapon: ['Blood Embrace'],
    stigmata: [['Dracula (T)'], ['Kepler (M)', 'Tesla: band (M)'], ['Cleopatra (B)']],
    review: [
      'Easy to bleed enemy and increase damage dealt against them, increase damage dealt against paralyzed enemy'
    ]
  }]
}, {
  battlesuit: 'Sakuno Rondo',
  file: 'teri-sr.png',
  emoji: 'TheresaSR',
  baserank: 'A',
  type: 'Psychic',
  characteristics: [
    'Middle-ranged flexible DPS',
    'High suppressing ability to single enemy',
    'Deals massive fire damage. Can\'t be underestimated' 
  ],
  rate: {
    damage: 4,
    burst: 5,
    survive: 4,
    support: 3,
    simple: 2,
    control: 3
  },
  features: [
    'Fire',
    'Ignite',
    'Floating',
    'Charge'
  ],
  skill: {
    evasion: {
      title: 'Flaming Sword Dance',
      descriptions: [
        'Quickly dodges sideways to evade enemy attacks. Can be triggered two times in a row.',
        '**Ultimate Evasion:** Generates a 3-hit sword aura, each hit dealing physical damage equal to 10% of ATK to surrounding enemies.',
        'Increase own Movement speed by 40% for 3 sec.',
        '**Flaming Sword Dance:** Each sword aura hit adds a Sakura count onto the target. Tap the Attack button to unleash foxfire directly.',
        'Cooldown: 15 sec'

      ]
    },
    ultimate: {
      title: 'Ballistic Sakura',
      descriptions: [
        'Enters the Sakura Soul state and increase Ignore Interrupt using Valkyrie\'s energy burst',
        'Unleashes 3-hit combo slash to all targets in a large area upon being triggered, each hit dealing physical damage equal to 100% of ATK and adding a Sakura Count.',
        'Sakura Soul: Turns the 5-hit combo into an Ultimate 5-hit combo, dealing fire damage. Increases damage and transforms Sakura Brands',
        'The third and fifthh strikes add a Sakura count onto the target.',
        'Consumes 20 SP to activate and 8 SP per sec until SP is depleted.',
        'SP Cost: 100'
      ]
    },
    leader: {
      title: 'Ritual Dance',
      descriptions: [
        'Team receive bonus if leader',
        'Increase whole team\'s damage done to floating enemies by 18%. Increase whole team\'s elemental damage by 14% if three characters on the team are different type'
      ]
    }
  },
  overview: {
    advantage: [
      'High and wide-range of fire elemental long burst damage',
      'Excellent elemental damage enhancement skill'
    ],
    disadvantage: [
      'Damage highly relies on Ultimate',
      'Low compatibility with equipment'	
    ],
},  
score: {
     pride: 5,
     wrath: 6,
     gluttony: 5,
     infinity: 5,
     memorial: 5,
     raid: 7,   
},
formations: [{
    valk: miko,
    star: 3,
    reason: [
      'When Scorching Sakura explodes, target is lifted into the air, triggering Gyakushin Miko\'s QTE.',
      'High usage of the Sakura Brands which share the same effect.'
    ]
    }, {
    valk: le,
    star: 3,
    reason: [
      'When Scorching Sakura explodes, target is lifted into the air, triggering Lightling Empress\'s QTE.',
      'Psychic Type Character enjoys the effects of the Leader Skill'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Fire Angel'],
    stigmata: [['Naoe Kanetsugu (T)'], ['Yodo Dono (M)'], ['Attila (B)']],
    review: [
      'Increase physical and fire damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Pledge of Sakura'],
    stigmata: [['Higokumaru (T)'], ['Nuwa (M)'], ['Higokumaru (B)']],
    review: [
      'Increase Physical and Fire damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Oath of Judah'],
    stigmata: [['Shakespeare (T)'], ['Mei: Pool Party (M)', 'Siegfried Kaslana (M)'], ['Otto Apocalypse (B)']],
    review: [
      'Increase Physical damage, reduce weapon skill cooldown (if using Siegfried (M)) and helps Judah-Chan deals more lightning damage'
    ]
  }]
}, {
  battlesuit: 'Celestial Hymn',
  file: 'teri-ch.png',
  emoji: 'TheresaCH',
  baserank: 'S',
  type: 'Creature',
  characteristics: [
    'Middle-ranged flexible DPS',
    'Increase allies\' physical damage',
    'Multiple offensive support skills'
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
    'Charge',
    'Impaired',
    'Attract'
  ],
  skill: {
    evasion: {
      title: 'Savior\'s Ballad',
      descriptions: [
        'Quickly dodges sideways to evade enemy attacks. Can be triggered two times in a row.',
        'If you tap the attack button right after Ultimate Evasion, you can unleash a charged Attack.',
        '**Thornmail:** Gives the whole team a set of thornmail, greatly increasing Ignore Interrupt, dealing physical damage equal to 30% of ATK every 0.4 sec, lasts for 5 sec.',
        'Cooldown: 20 Sec'
      ]
    },
    ultimate: {
      title: 'Judgement from Heavens',
      descriptions: [
        'Summon Ultimate Blade, pulling enemies in and slashing them',
        'When activated, creates a black hole, pulls enemies in its center and slashes them for a long time, deals physical damage equal to 50x40% of ATK',
        'SP Cost: 125'
      ]
    },
    leader: {
      title: 'Sacred Arias',
      descriptions: [
        'Team receive bonus if leader',
        'Increase maximum SP by 12%, if you have 3 creature-type on team, physical damage increased by 20%'
      ]
    }
  },
  overview: {
    advantage: [
      'Strong team strengthening ability and weaken ability',
      'Crowd Control',
      'Fast SP gain'
    ],
    disadvantage: [
      'Almost nothing... perfect if Ultimate Cooldown is faster'
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
    valk: ss,
    star: 5,
    reason: [
      'Top Tier Formation on Abyss, when Celestial Hymn attracts enemies within large radius and inflicts impair effect, ideal for Snowy Sniper to Ultimate and deal damage'
    ]
    }, {
    valk: ya,
    star: 3,
    reason: [
      'Inflicts impair effect to a large area providing good timing for Yamabuki\'s Ultimate.',
      'Provides a mecha barrier enables to deal damage while being protected'
    ]
    }],
  recommendations: [{
    level: 'advanced',
    weapon: ['11th Sacred Relic', 'Oath of Judah', 'Blood Embrace'],
    stigmata: [['Kallen: Hymn (T)'], ['Kallen: Hymn (M)'], ['Kallen: Hymn (B)']],
    review: [
      'Give heal (if using 11th Relic), Fast SP gain, Buff Cross Physical damage, Increase Physical Damage and more Physical Damage upon consuming SP'
    ]
  }, {
    level: 'advanced',
    weapon: ['Judah'],
    stigmata: [['Shakespeare (T)'], ['Mei: Pool Party (M)', 'Siegfried Kaslana (M)'], ['Otto Apocalypse (B)']],
    review: [
      'Increase Physical damage, reduce weapon skill cooldown (if using Siegfried (M)) and helps Judah-Chan deals more lightning damage'
    ]
  }, {
    level: 'abyss',
    weapon: ['11th Sacred Relic'],
    stigmata: [['Lier: Scarlet (T)'], ['Lier: Scarlet (M)'], ['Kepler (B)']],
    review: [
      'Reduce Bleeding Effect, Increase Physical damage, Give AoE damage/sec, more damage dealt agains Paralyzed enemy'
    ]
  }, {
    level: 'abyss',
    weapon: ['11th Sacred Relic'],
    stigmata: [['Lier: Scarlet (T)'], ['Dracula (M)'], ['Lier: Scarlet (B)']],
    review: [
      'Reduce Bleeding Effect, Increase Physical damage and Movement Speed, Heal when hit weaken enemy, gain SP when hit bleeding enemy'
    ]
  }]
},
//new teri
{
  battlesuit: 'Luna Kindred',
  file: 'teri-lk.png',
  emoji: 'TheresaLK',
  baserank: 'A',
  type: 'Creature',
  characteristics: [
    'Mid-range melee DPS',
    'Attacking bleeding enemies with basic attacks recover her HP',
    'Charged attack cause enemies to bleed and can suppress the enemy.'
  ],
  rate: {
    damage: 3,
    burst: 4,
    survive: 4,
    support: 1,
    simple: 5,
    control: 2
  },
  features: [
    'Bleed',
    'Charge',
    'Weaken'
  ],
  skill: {
    evasion: {
      title: 'Ethereal Nightmare',
      descriptions: [
        'Quick sideways dodge to evade enemy attack',
        'Can be triggered 2 times in a row.',
        'After ultimate evasion, gain 40% Move Speed for 3s',
        'Time Fracture: Triggers Time Fracture upon an Ultimate Evasion, slowing all enemies for 3s,',
        'Cooldown: 15s'
      ]
    },
    ultimate: {
      title: 'Feast for the Dead',
      descriptions: [
        'Drop the Axe of Fallen from the sky for large AOE damage.',
        'Axe Drop: 2x300%+600% ATK of Physical DMG',
        'SP cost: 75'
      ]
    },
    leader: {
      title: 'Mark of Chain',
      descriptions: [
        'Team bonus when leader.',
        'Shortens duration of most debuff by 40% for the team. Creature-type character gain 24% Physical DMG'
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
    valk: db,
    star: 4,
    reason: [
      'Switch Skill - Dimension Gravity cause bleeding and increase character\'s DMG. This skill is good for setting up massive damage'
    ]
    }, {
    valk: ch,
    star: 4,
    reason: [
      'Ultimate - Judgement from Heaven: Celestial Hymn\'s ultimate pulls enemies together in a large range and sets up enemies for charged attacks.',
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['The Dark Crusher'],
    stigmata: [['Theresa: Origins (T)'], ['Attila (M)'], ['Attila (B)']],
    review: [
      'Weapon\'s passive provides AOE damage, Increase all damage after use weapon skills'
    ]
  }, {
    level: 'advanced',
    weapon: ['Blood Embrace'],
    stigmata: [['Dracula (T)'], ['Dracula (M)'], ['Dracula (B)']],
    review: [
      'Weapon skill easily inflicts bleed, increase physical damage dealt to bleeding enemies, recover HP and SP upon attacking bleeding anemies.'
    ]
  }]
}]

export default theresa