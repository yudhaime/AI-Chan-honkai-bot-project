import {Battlesuit} from '../'
import {wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch} from '../../../utility/abbreviation'

const yae:Battlesuit[] = [{
  battlesuit: 'Gyakushin Miko',
  file: 'yae-miko.png',
  emoji: 'YaeMiko',
  baserank: 'A',
  type: 'Creature',
  characteristics: [
    'Melee, slash attack',
    'Deals burst damage by marking targets',
    'Can swiftly move in between enemies'
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
    'Floating',
    'Shield Break',
    'Bleed'
  ],
  skill: {
    evasion: {
      title: 'Sweeping Blade',
      descriptions: [
        'Teleports quickly to evade enemy attacks.',
        '**Ultimate Evasion:** Generates a 3-hit sword aura, each hit dealing physical damage equal to 10% of ATK to surrounding enemies.',
        '**Sweeping Blade:** Each sword aura hit add a Sakura count onto the target upon a successful Ultimate Evasion.',
        'Cooldown: 15 sec'
      ]
    },
    ultimate: {
      title: 'Crimson Blossom',
      descriptions: [
        'Changes the way of attack and increase Ignore Interupt using Valkyrie\'s energy burst',
        'Burst deals damage equal to 50% of ATK and inflicts a Sakura brands onto enemy',
        'SP Cost: 100',
        'Turns a basic attack into Dash upon being triggered. Adds a Sakura count every time dash is used. Lasts for 10 sec'
      ]
    },
    leader: {
      title: 'Heart of Prajna',
      descriptions: [
        'Team receive bonus if leader',
        'Increase whole team\'s physical damage by 16% upon generatin 20-hit or more combo'
      ]
    }
  },
  overview: {
    advantage: [
      'Excellent burst damage',
      'Extremely flexible',
      'Excellent damage enhancement skill'
    ],
    disadvantage: [
      'No support ability',
      'Damage more dependent on Ultimate',
      'Damage requires a longer proccess'
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
    valk: ya,
    star: 4,
    reason: [
      'Provide a mecha barrier enables to deal damage while being protected.',
      'Leader Skill combo provides Critical Rate.'
    ]
    }, {
    valk: vr,
    star: 3,
    reason: [
      'Attracts enemies within a large radius to assist Gyakushinn Miko in dealing damage,',
      'But relies on weapon skill or others characters to trigger Gyakushinn Miko\'s QTE.'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Pulse Katana Type-19'],
    stigmata: [['Naoe Kanetsugu (T)'], ['Elizabeth Bathory (M)'], ['Attila (B)']],
    review: [
      'Increase physical damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Sakura Blossom', '3rd Sacred Relic', 'Void Blade'],
    stigmata: [['Celine (T)'], ['Planck (M)'], ['Celine (B)']],
    review: [
      'High massive damage, increase all-damage.'
    ]
  }, , {
    level: 'advanced',
    weapon: ['3rd Sacred Relic'],
    stigmata: [['Schrodinger (T)'], ['Planck (M)'], ['Lier (B)']],
    review: [
      'High massive damage, increase physsical damage'
    ]
  }, {
    level: 'abyss',
    weapon: ['Void Blade'],
    stigmata: [['Lier: Scarlet (T)'], ['Lier: Scarlet (M)'], ['Attila (B)']],
    review: [
      'Reduce bleeding effect, increase physical damage on 30-hit more combo or consumes SP'
    ]
  }]
}, {
  battlesuit: 'Goushinnso Memento',
  file: 'yae-memento.png',
  emoji: 'YaeMemento',
  baserank: 'S',
  type: 'Mecha',
  characteristics: [
    'Middle-ranged slash attack',
    'Charges energy to deal massive AOE ice damage',
    'Highest damage multiplier of ultimate skill'
  ],
  rate: {
    damage: 4,
    burst: 5,
    survive: 3,
    support: 2,
    simple: 3,
    control: 2
  },
  features: [
    'Ice',
    'Frozen',
    'Paralyze',
    'Stun'
  ],
  skill: {
    evasion: {
      title: 'Clone Step',
      descriptions: [
        'Teleports quickly to evade enemy attacks.',
        '**White Shadow:** Summons a phantom ice statue during Ultimate Evasion. The statue explode after 1 sec, dealing ice damage equal to 200% of ATK to surrounding enemies.',
        'Cooldown: 15 sec'
      ]
    },
    ultimate: {
      title: 'Final Breath',
      descriptions: [
        'Draws a blade instanly to slash enemy to the front.',
        'Icy wind deals damage equal to a total of 900% of ATK. The last strike freeze the enemy',
        'Execute: Breaks the ice, dealing physical damage equal to 1200% of ATK.',
        'Energy Charge: Recovers 250 Kinetic Energy upon using ultimate',
        'SP Cost: 125'
      ]
    },
    leader: {
      title: 'Sakura Dance',
      descriptions: [
        'Team receive bonus if leader',
        'Increase Critical Rate by 15% when whole team\'s HP is more than 80%'
      ]
    }
  },
  overview: {
    advantage: [
      'Extremely high and wide-range of ice elemental burst damage',
      'Can deal high damage even on long-term combat'
    ],
    disadvantage: [
      'No support ability',
      'Damage is highly dependent on specific weapon',
      'Over-reliance on teammates'
    ],
},  
score: {
     pride: 8,
     wrath: 7,
     gluttony: 8,
     infinity: 8,
     memorial: 8,
     raid: 6,   
},
formations: [{
    valk: vr,
    star: 5,
    reason: [
      'Attracts enemies within a large radius to cover the weakness of Goushinnso Memento, the basic attack of which has a short attack range'
    ]
    }, {
    valk: db,
    star: 5,
    reason: [
      'AOE Time Lock provides a good condition for Goushinnso Memento to deal damage.',
      'Mecha type character, enjoys the effects of the Leader Skill.'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Crystal Edge'],
    stigmata: [['Naoe Kanetsugu (T)'], ['Nikol Tesla (M)'], ['Sakura: Blistering Summer (B)']],
    review: [
      'Easily freeze enemy using weapon skill, increase basic attack\'s damage, physical damage, and damage dealt against frozen enemy'
    ]
  }, {
    level: 'beginner',
    weapon: ['Crystal Edge'],
    stigmata: [['Shigure Kira (T)'], ['Nikola Tesla (M)'], ['Shigure Kira (B)']],
    review: [
      'Easily freeze enemy using weapon skill, increase basic attack\'s damage, physical damage, ice damage, and damage dealt against frozen enemy'
    ]
  }, {
    level: 'advanced',
    weapon: ['Ice Epiphyllum'],
    stigmata: [['Nohime (T)'], ['Nohime (M)'], ['Nohime (B)']],
    review: [
      'Increases Goushinnso Memento\'s ice damage and energy recovery, Increases ice damage to Frozen and Slowed targets, Chance to slow nearby enemies, Increases ice damage.'
    ]
  }, {
    level: 'advanced',
    weapon: ['Ice Epiphyllum'],
    stigmata: [['Schrodinger (T)'], ['Mei: Pool Party (M)'], ['Shakespeare (B)']],
    review: [
      'Increases Goushinnso Memento\'s ice damage and energy recovery, Increase Physical damage and Ice damage'
    ]
  }]
}, {
  battlesuit: 'Flame Sakitama',
  file: 'yae-fs.png',
  emoji: 'YaeFS',
  baserank: 'A',
  type: 'Creature',
  characteristics: [
    'Melee, slash attack.',
    'Fire attacks are triggered at specific timing',
    'High sustainability'
  ],
  rate: {
    damage: 4,
    burst: 5,
    survive: 3,
    support: 3,
    simple: 1,
    control: 3
  },
  features: [
    'Fire',
    'Floating',
    'Knockback',
    'Time'
  ],
  skill: {
    evasion: {
      title: 'Blazing Dance',
      descriptions: [
        'Teleports quickly to evade enemy attacks.',
        '**Time Fracture:** Triggers Time Fracture upon an Ultimate Evasion, slowing down all enemies for 4 sec',
        'Cooldown: 15 sec'
      ]
    },
    ultimate: {
      title: 'Double Firewall',
      descriptions: [
        'Attacks a random enemy multiple times and inflicts Time Lock on enemies within a large area.',
        'Redlotus: Attacks a random enemy 8 times, each time dealing fire damage equal to 200% of ATK.',
        'Inferno Flames: Deals fire damage equal to 400% of ATK to enemies in a large area and inflicts Time Slow for 4.5 sec.',
        'Spirit Possession: Enhances character for 9 sec, during which time character receives Iron Body status and attacks faster.',
        'Follow-up attacks can be triggered without having to tap the Attack button at specific time'
      ]
    },
    leader: {
      title: 'Eternal Cycle',
      descriptions: [
        'Team receive bonus if leader',
        'Increase DEF by 30% during team battles. Increase the max HP of creature-type characters by an additional 7%'
      ]
    }
  },
  overview: {
    advantage: [
      'High and stable mid-range fire elemental continuous damage',
      'Excellent burst damage',
      'Strong damage enhancement skill',
      'Extremely flexible',
      'Combo can be connected after evasion',
      'Domination ability',
      'Strong damage capability in solo-combat'
    ],
    disadvantage: [
      'Damage requires long proccess',
      'Hard to master',
      'Need practice to get used to follow-up attack'
    ],
},  
score: {
     pride: 9,
     wrath: 7,
     gluttony: 8,
     infinity: 8,
     memorial: 8,
     raid: 8,   
},
formations: [{
    valk: dp,
    star: 4,
    reason: [
      'Ultimate Skill Recovers HP of all team members and boost the sustainability',
      'Skills deal more damage during Time Fracture'
    ]
    }, {
    valk: db,
    star: 4,
    reason: [
      `Switch skill from ${db} inflicts AOE Time Lock.`,
      'Triggers skill that increase damage',
      'Project Bunny from Ultimate Skill can help attracts enemies'
    ]
    }],
  recommendations: [{
    level: 'beginner',
    weapon: ['Pulse Katana Type-19'],
    stigmata: [['Naoe Kanetsugu (T)'], ['Yodo Dono (M)'], ['Sakura: Blistering Summer (B)']],
    review: [
      'Increase physical damage and fire damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Demon Blade - Florid Sakura', 'Fairy Sword Silven'],
    stigmata: [['Higokumaru (T)'], ['Nuwa (M)'], ['Higokumaru (B)']],
    review: [
      'Increase physical damage and fire damage'
    ]
  }, {
    level: 'advanced',
    weapon: ['Demon Blade - Florid Sakura', 'Void Blade'],
    stigmata: [['Planck (T)'], ['Nuwa (M)'], ['Planck (B)']],
    review: [
      'Increase attack speed, physical and fire damage'
    ]
  }, {
    level: 'abyss',
    weapon: ['Fairy Sword Silven', 'Void Blade'],
    stigmata: [['Lier: Scarlet (T)'], ['Nuwa (M)'], ['Lier: Scarlet (B)']],
    review: [
      'Reduce bleeding effects, increase physical and fire damage'
    ]
  }]
}]

export default yae