import {Weapon} from '../'
import {wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch} from '../../../utility/abbreviation'

const guns:Weapon[] = [{
  name: '2nd Sacred Relic',
  file: '2nd-sacred-relic.png',
  stars: [4, 5],
  atk: 254,
  crt: 58,
  recommend: [dp, vr],
  active: [],
  passive: [
    'Increase SP gain by 35%',
    'Add additional 50 lightning elemental damage on-hit'
  ]
}, {
  name: 'Hyper Railguns',
  file: 'super-railgun-hand-cannon.png',
  stars: [4, 5],
  atk: 287,
  crt: 19,
  recommend: [km],
  active: [
    'Deal 2,289 lightning elemental damage to targeted enemy surroundings, inflicting paralysis status to them, last for 4.00 seconds',
    '(SP Cost: 16 – Cooldown: 18s)'
  ],
  passive: [
    'On hit 3% chance to inflict paralysis status to the target, causing immobilize and unable to attack, last for 2.50 seconds'
  ]
}, {
  name: 'Shennong\'s Guardian',
  file: 'shennong-protection.png',
  stars: [4, 5],
  atk: 285,
  crt: 22,
  recommend: [dp],
  active: [
    'Release an area that freeze time and inflict weaken status ailment to a non-boss targeted enemy, reduce their attack power by 70%. Other non-targeted enemies now can’t be targeted and take less in coming damage. Effect lasts for 9.98 seconds',
    '(SP Cost: 20 – Cooldown: 20s)'
  ],
  passive: [
    'Increase 50% bonus damage to enemies with weakened status.'
  ]
}, {
  name: 'Spirit Gun Yae',
  file: 'yae-spirit-gun.png',
  stars: [4, 5],
  atk: 267,
  crt: 21,
  recommend: [dp],
  active: [
    'Deal 7 slashes to surrounding enemies, each slash deals physical damage 77% based on attack power, inflict bind status, last for 3.7 seconds',
    '(SP Cost: 21 – Cooldown: 14s)'
  ],
  passive: [
    'When performing time slow, inflict bleed to enemy, deal 47% physical damage every 0.5 seconds, last for 5.7 seconds'
  ]
}, {
  name: 'Dominator Pistol',
  file: 'dominator-pistol.png',
  stars: [4, 5],
  atk: 244,
  crt: 16,
  recommend: [wc],
  active: [
    'forms a number of rising punches from the ground, each deal physical damage 50% based on attack power to the targeted enemy surroundings, inflict burn status to them, dealing 149 fire elemental damage per every 0.5 seconds, last for 2.10 seconds',
    '(SP Cost: 25 – Cooldown: 10s)'
  ],
  passive: [
    'Add additional 25 fire elemental damage on-hit'
  ]
}, {
  name: 'Fafnir Flame',
  file: 'fafnir-immolation.png',
  stars: [4, 5],
  atk: 248,
  crt: 43,
  recommend: [wc],
  active: [
    'Deals flame wave explosions around self, inflict knock back status, each wave deal physical damage 115% based on attack power and inflict burn status, dealing 159 fire elemental damage every 0.5 seconds, last for 3.00 seconds',
    '(SP Cost: 25 – Cooldown: 20s)'
  ],
  passive: [
    'Increase physical damage by 18% during Burst Mode'
  ]
}, {
  name: 'Blaze Destroyer',
  file: 'recca-destroyer.png',
  stars: [4, 5],
  atk: 276,
  crt: 32,
  recommend: [wc],
  active: [
    'Knock back enemies in a small frontal area and inflict float status, deal physical damage 100% based on attack power. Hit enemies then explode, deal 1881 fire elemental damage, inflict surrounding enemies with burn status, dealing 195 fire elemental damage per every 0.5 seconds, lasts for 4.5 seconds(SP Consumption: 20 – Cooldown: 9s)'
  ],
  passive: [
    'Add 40 fire elemental damage for each enemy inflicted with burn, stack up to 5 times'
  ]
}, {
  name: 'Jingwei Wing',
  file: 'wing-of-jingwei.png',
  stars: [4, 5],
  atk: 259,
  crt: 30,
  recommend: [ir, dp],
  active: [
    'Call Meteor shower from the sky, last for 12 seconds, when the meteor explodes, deals  physical damage 90% based on attack power, inflict burn status, dealing 96 fire elemental damage pẻ every 0.5 seconds, last for 1.5 seconds',
    '(SP Cost: 30 – Cooldown: 25s)'
  ],
  passive: [
    'Attacking the same target for every 2.5 seconds gives additional 2.0% critical rate and 5.0% critical damage, stacks up to 20% critical rate and 50% critical damage'
  ]
}, {
  name: 'Thunder Kikaku',
  file: 'demon-horn-thunder-dagger.png',
  stars: [4, 5],
  atk: 264,
  crt: 47,
  recommend: [wc, dp, km],
  active: [
    'Possess a will-o’-the-wisp on enemy, last for 7.99 seconds. Possessed enemies and the surrounding area will receive 637 electric elemental damage every 0.5 seconds',
    '(SP Cost: 16 – Cooldown: 25s)'
  ],
  passive: [
    'Gives 30% electric elemental damage. When in Burst mode,  on hit inflict enemy electric shock status​, increase incoming lightning elemental damage 59.8%, last for 7 seconds.'
  ]
}, {
  name: 'Mjolnir',
  file: 'mjolnir.png',
  stars: [4, 5],
  atk: 298,
  crt: 6,
  recommend: [ir, vr],
  active: [
    'Smashing Mjolnir to knockdown enemies, dealing physical damage 404%  based on attack power, and inflict vulnerable status to them, reduce defense power by 80%, last for 4.00 seconds',
    '(SP Cost: 18 – Cooldown: 13s)'
  ],
  passive: [
    'Increase critical chance by 15%'
  ]
}, {
  name: 'Light and Shadow',
  file: 'light-and-shadow.png',
  stars: [4, 5],
  atk: 270,
  crt: 39,
  recommend: [ir, vr],
  active: [
    'Release an ice ball dragging enemies along its path, causing a large scale explosion in the end that inflict freeze status to the enemies within the explosion, dealing 846 ice elemental damage every 0.9 seconds, last for 3.99 seconds',
    '(SP Cost: 20 – Cooldown: 20s)'
  ],
  passive: [
    'Releases cold air when elite’s shield got broken by basic attack (branch attack and charged attack included), reduce movement speed and attack speed to the target and small surrounding enemies by  84%, last for 3.99 seconds'
  ]
}, {
  name: 'The Energy Leaper',
  file: 'energy-warper.png',
  stars: [4, 5],
  atk: 276,
  crt: 32,
  recommend: [wc, vr],
  active: [
    'Kiana will jump back, leaving a bullet that will explode, deal physical damage 349% based on attack power,  and stun the enemies in the area for 4.49 seconds',
    '(SP Cost: 14 – Cooldown: 16s)'
  ],
  passive: [
    'After performing **Time Fracture**, increases attack speed by 79.8%, critical rate by 24.9%,  last for 4 seconds. Only last in **Time Fracture**.'
  ]
}, {
  name: 'Hurricane Revolver',
  file: 'storm-revolver.png',
  stars: [4, 5],
  atk: 224,
  crt: 39,
  recommend: [wc],
  active: [
    'Summon a whirlwind around self, dealing rapid attack to surrounding enemy, each attack deals 174 ice elemental damage. The whirlwind exlode when expires, dealing 300% physical damage, and inflicting 60% slowing moving speed and attack speed to the enemy, last for 1.50 seconds, Kiana can move during whirlwind duration',
    '(SP Cost: 24 – Cooldown: 30s)'
  ],
  passive: [
    ' 5% chance on-hit to increase moving speed by 100%, last for 4.50 seconds'
  ]
}, {
  name: 'Usurper Cannon',
  file: 'usurper-hand-cannon.png',
  stars: [4, 5],
  atk: 272,
  crt: 27,
  recommend: [vr],
  active: [
    'Shoot out a low-frequency sound, dealing 379% physical damage based on attack power, inflict 6 seconds weaken status to enemies, reduce their attack power by 60%',
    '(SP Cost: 15 – Cooldown: 15s)'
  ],
  passive: [
    ' Increase ranged physical damage by 40%. Reduce damage dealt by 10% per every 1m further away from the enemy, up to 80%'
  ]
}, {
  name: 'Proto Spirit Bow',
  file: 'original-fairy-gun.png',
  stars: [4, 5],
  atk: 279,
  crt: 35,
  recommend: [vr, km],
  active: [
    'Fire 2 wind bullet in a straight line, each deal physical damage 110% based on attack power. On hit against enemy with bleed status regain 10 SP to wielder',
    '(SP Cost: 18 – Cooldown:0s)'
  ],
  passive: [
    'Attack speed +25%, Movement speed +25%'
  ]
}, {
  name: 'Mutated - Bow of Hel',
  file: 'extraordinary-form-hull-bow.png',
  stars: [4, 5],
  atk: 287,
  crt: 31,
  recommend: [ir, vr],
  active: [
    'Fire a beam that turns into a stream of bullet raining from above to an area in front, dealing 9*59.8% attack power and inflict freeze status for 5 seconds',
    '(SP Cost: 16 – Cooldown:18s)'
  ],
  passive: [
    'Increase critical rate increased by 5.0%, increase physical damage against stun and freeze status enemy by 40.0%'
  ]
}, {
  name: 'Judgement of Shamash',
  file: 'fire-spark-holy-judgement.png',
  stars: [4, 5],
  atk: 260,
  crt: 45,
  recommend: [dp, vr],
  active: [
    'Fires off holy fire dealing 100% attack power + 2*1978 fire elemental damage. Apply a debuff that lowers enemy’s attack and movement speed by 30% and increase receiving all-damage by 15%. Holy fire deals 265 fire elemental damage per second with a 10% chance of apply stun status for 2.5 seconds.',
    'During release, wielder get 80% all-damage reduction. Performing skill consumes 13% of maximum HP per each second, last for 5 seconds. If HP reaches 1, the character will not die as a result. When HP below 33%, skill will be unusable',
    '(SP Cost: 20 – Cooldown: 35s)'
  ],
  passive: [
    '10% chance to inflict burn status per each 1.0 second to surrounding enemy, dealing  298 damage per each 0.5 second, last for 3.5 second. Increase all damage against burn status enemies by 18%',
    '**Weapon Buff – Divine’s Key:**', 
    'When weapon’s level increase, the weapon will give buff to users. This skill is activated automatically and cannot be turn on or off. Has a time limit.',
    'Lv 30: Increase all Pistol-users DEF by 40',
    'Lv 35: Increase all Pistol-users ATK by 10',
    'Lv 40: Increase all Pistol-users HP by 75',
    'Lv 45: Increase all Pistol-users CRI by 10',
    'Lv 50: Increase all Pistol-users ATK by 30'
  ]
}, {
  name: 'Water Spirit Type-I',
  file: 'ice-fairy-form-i.png',
  stars: [3, 4],
  atk: 169,
  crt: 29,
  recommend: [wc, dp],
  active: [],
  passive: [
    'Passive Skill: Increase physical damage against float status enemy by 40%'
  ]
}, {
  name: 'Water Spirit Type-II',
  file: 'ice-fairy-form-ii.png',
  stars: [3, 4],
  atk: 169,
  crt: 29,
  recommend: [ir, vr],
  active: [
    'Fire a ball of ice, on hit inflict AOE freeze status to enemy, last for 3.79 seconds',
    '(SP Cost: 9 – Cooldown: 13s)'
  ],
  passive: []
}, {
  name: 'Fire Spirit Type-I',
  file: 'fire-fairy-form-i.png',
  stars: [3, 4],
  atk: 188,
  crt: 3,
  recommend: [wc],
  active: [],
  passive: [
    '10% chance on hit to inflict burn status, deal 119 fire elemental damage per each 0.5 second, last for 2.06 second'
  ]
}, {
  name: 'Fire Spirit Type-II',
  file: 'fire-fairy-form-ii.png',
  stars: [3, 4],
  atk: 182,
  crt: 12,
  recommend: [wc],
  active: [],
  passive: [
    'Fire a ball of fire, on hit deal physical damage 250% based on attack power, additionally inflict AOE burn status to enemy, deal 113 fire elemental damage per each 0.5 second, last for 3 second. Have 2 charges',
    '(SP Cost: 18 – Cooldown: 12 seconds)'
  ]
}, {
  name: 'Proto Gun',
  file: 'pulse-pistol-prototype.png',
  stars: [1, 4],
  atk: 146,
  crt: 29,
  recommend: [],
  active: [
    'Enhance weapon, increase physical damage basic attack (branch attack and charge attack included) by 32%, last for 5 second',
    '(SP Cost: 8 – Cooldown: 15s)'
  ],
  passive: []
}, {
  name: 'Artemis\' Guardian',
  file: 'moon-god-protection.png',
  stars: [3, 4],
  atk: 169,
  crt: 29,
  recommend: [dp, vr],
  active: [
    'Inflict AOE float status to target while also apply time lock, last for 3.30 seconds',
    '(SP Cost: 12 – Cooldown: 12s)'
  ],
  passive: []
}, {
  name: 'Mosin Nagant',
  file: 'fire-wheel-mosin-nagant.png',
  stars: [3, 4],
  atk: 180,
  crt: 13,
  recommend: [wc],
  active: [
    'Create a ring of fire around self, dealing 317 fire elemental damage per each 0.25 second, last for 6 seconds',
    '(SP Cost: 12 – Cooldown: 18s)'
  ],
  passive: []
}, {
  name: 'Burning Feathher',
  file: 'burning-wings.png',
  stars: [3, 4],
  atk: 176,
  crt: 20,
  recommend: [wc],
  active: [],
  passive: [
    '6% on hit to deal an explosive attack, deal 476 AOE fire elemental damage'
  ]
}, {
  name: 'Xuanyuan Gun',
  file: 'xuanyuan-pulse-pistol.png',
  stars: [3, 4],
  atk: 165,
  crt: 16,
  recommend: [wc],
  active: [
    'Fire 6 electronic bullets to the front, each deal 232 lightning damage, on hit inflict vulnerable status to the enemy, reducing their defense by 60%, last for 4 seconds',
    '(SP Cost: 25 – Cooldown: 20s)'
  ],
  passive: []
}, {
  name: 'Schemer Cannon',
  file: 'dark-actor-pistol.png',
  stars: [3, 4],
  atk: 179,
  crt: 16,
  recommend: [km],
  active: [
    'Increase physical ranged attack by 30%. Reduce damage dealt based on distance, each 1m further away, reduce 10% damage dealt, up to 80%'
  ],
  passive: []
}, {
  name: 'Phoenix Pistols',
  file: 'phoenix-gun.png',
  stars: [3, 4],
  atk: 158,
  crt: 25,
  recommend: [wc],
  active: [
    'Increase charge speed by 100%, last for 11.98 seconds',
    '(SP Cost: 20 – Cooldown: 120 seconds)'
  ],
  passive: [
    '4.9% on hit to inflict burn status to target. deal 160 fire elemental damage per each 0.5 second, last for 2.5 seconds, cooldown 7 seconds.',
    'If squad has Mei , burn status applies to a small AOE on target'
  ]
}, {
  name: 'Holy Gun Kallen',
  file: 'kallen-saint-gun.png',
  stars: [3, 4],
  atk: 183,
  crt: 10,
  recommend: [dp],
  active: [],
  passive: [
    'When hit, absorb 40% damage, release a holy light, cooldown 15 seconds. Holy light deal physical damage 290% based on attack power, reduce enemy attack speed by 75% for 4.5 seconds.'
  ]
}, {
  name: 'Alloy Hurricane Revolver',
  file: 'alloyed-storm-revolver.png',
  stars: [3, 4],
  atk: 149,
  crt: 24,
  recommend: [wc],
  active: [
    'Summon a whirlwind around self, dealing rapid attack to surrounding enemy, each attack deals 174 ice elemental damage. The whirlwind exlode when expires, dealing 240% physical damage',
    '(SP Cost: 15 – Cooldown: 20s)'
  ],
  passive: []
}, {
  name: 'Alloy Dominator Pistol',
  file: 'alloyed-dominator-gun.png',
  stars: [3, 4],
  atk: 160,
  crt: 10,
  recommend: [],
  active: [
    'Form a number of rising punches from the ground, each deals physical damage 40% based on attack power + 95 fire elemental damage to the targeted enemy surrounding',
    '(SP Cost: 19 – Cooldown: 10s)'
  ],
  passive: []
}, {
  name: 'Colt Peacemaker',
  file: 'colt-peacemaker.png',
  stars: [2, 3],
  atk: 114,
  crt: 25,
  recommend: [vr, dp, wc, km],
  active: [
    'Fire one bullet that inflict small AOE stun status, last for 2.99 seconds',
    '(SP Cost: 7 – Cooldown: 12s)'
  ],
  passive: []
}, {
  name: 'Desert Eagle',
  file: 'desert-eagle.png',
  stars: [2, 3],
  atk: 128,
  crt: 2,
  recommend: [],
  active: [
    'Fire one bullet at target deal physical damage 339% based on attack power. Has 2 charges',
    '(SP Cost: 10 – Cooldown: 10 seconds)'
  ],
  passive: []
}, {
  name: 'Colt Anaconda EX',
  file: 'remodelled-c-anaconda.png',
  stars: [2, 3],
  atk: 128,
  crt: 2,
  recommend: [],
  active: [
    'Fire one bullet that inflict small AOE 60% attack speed and movement speed reduction, last for 4.48 seconds',
    '(SP Cost: 5 – Cooldown: 10s)'
  ],
  passive: []
}, {
  name: 'USP EX',
  file: 'remodelled-usp.png',
  stars: [2, 3],
  atk: 121,
  crt: 14,
  recommend: [],
  active: [],
  passive: []
}, {
  name: 'M1911',
  file: 'm1911.png',
  stars: [2,3],
  atk: 94,
  crt: 59,
  recommend: [],
  active: [],
  passive: []
}, {
  name: 'USP45',
  file: 'usp45.png',
  stars: [1, 2],
  atk: 76,
  crt: 8,
  recommend: [],
  active: [],
  passive: []
}]

export default guns