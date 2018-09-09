import {Weapon} from '../'
import {wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch} from '../../../utility/abbreviation'

const cannons:Weapon[] = [{
  name: '5th Sacred Relic',
  file: '5th-sacred-relic.png',
  stars: [4, 5],
  atk: 254,
  crt: 59,
  recommend: [ss, vc],
  active: [],
  passive: [
    '**Rocket Cannon Type:**',
    '• Charge 1 time: Shoot 1 normal rocket' , 
    '• Charge 2 times: Shoot 2 strong rockets', 
    '• Charge 3 times: Shoot 3 very strong rockets', 
    'When combo above 15, increase 20% physical damage',
    'Based on charging level, when missle explode, create 2/4/9 mini bombs, each dealing 30% physical damage'
  ]
}, {
  name: 'Cyclops PRI',
  file: 'cyclops-project.png',
  stars: [4, 5],
  atk: 248,
  crt: 43,
  recommend: [vc],
  active: [],
  passive: [
    'Slow charge type, increase physical damage when performing normal attack by 100%',
    '**Rocket Cannon Type:**',
    '• Charge 1 time: Shoot 1 normal rocket' ,
    '• Charge 2 times: Shoot 2 strong rockets',
    '• Charge 3 times: Shoot 3 very strong rockets',
    'When enemy on field less than 2, increase all-damage by 20%',
    'On hit, imbue a mark that will explode on-death, dealing 399% AOE physical damage mark last for 5 seconds'
  ]
}, {
  name: 'Briareus PRI',
  file: 'hekatonkheires-project.png',
  stars: [4, 5],
  atk: 298,
  crt: 6,
  recommend: [bn, vc],
  active: [
    'Set a space-time trap area in front. Enemies caught within trap will be time-space decelerated, reduce def power by 50%, trap last for 6.19 seconds',
    '(SP Cost: 18 – Cooldown: 24 seconds)'
  ],
  passive: [
    'Shoot many missiles at multiple target, long charge type, performing critical at one single target damage will reduce its damage',
    '**Missile Cannon Type:**',
    '• Charge 1 time: Shoot 3 missiles',
    '• Charge 2 times: Shoot 7 missiles',
    '• Charge 3 times: Shoot 15 missiles',
    'On hit, has 10% chance to inflict stun/paralyze/freeze status to enemies for 2 seconds, dealing 1328 fire/electric/ice elemental damage'
  ]
}, {
  name: 'Project Bunny 19C',
  file: 'remodelled-bunny-19c.png',
  stars: [4, 5],
  atk: 287,
  crt: 19,
  recommend: [db],
  active: [],
  passive: [
    '**Particle Beam Cannon:** Fire and charge laser in a straight line. Firing for a longer period will cause the cannon to overheat. Closer enemies receives higher damage, highest damage at 3m radius.',
    'When perform normal attack, increase 60% all damage',
    'On kill, has 60% chance to increase all damage by 75% for 3 seconds'
  ]
}, {
  name: 'Core Evoker Delta',
  file: 'core-amass-delta-cannon.png',
  stars: [4, 5],
  atk: 287,
  crt: 26,
  recommend: [vc],
  active: [
    'Release a ball of energy slowly moving forward, damage enemy in-contact multiple times, each dealing 636 electric elemental damage, inflict paralyze status for 3.59 seconds',
    '(SP Cost: 20 – Cooldown: 20 seconds)'
  ],
  passive: [
    '**Particle Beam Cannon:** Fire and charge laser in a straight line. Firing for a longer period will cause the cannon to overheat. Closer enemies receives higher damage, highest damage at 3m radius',
    'Increase outgoing all-attack  against enemies inflicted with paralyze status by 16%'
  ]
}, {
  name: 'Ymir Wrist',
  file: 'ymirs-arm.png',
  stars: [4, 5],
  atk: 294,
  crt: 11,
  recommend: [ss],
  active: [
    'Inflict knock back to surrounding enemies and apply shockwave to a wide frontal area, dealing 12*40% physical damage, reduce enemy movement speed and attack speed by 70% for 3 seconds',
    '(SP Cost: 18 – Cooldown: 14 seconds)'
  ],
  passive: [
    '• Charge 1 time: Shoot 1 normal missile',
    '• Charge 2 times: Shoot 2 strong missiles',
    '• Charge 3 times: Shoot 3 very strong missiles',
    'For each 1m further away from the enemy, increase physical damage by 4%, stack up to 8 times'
  ]
}, {
  name: 'Book of Fuxi',
  file: 'yuxi-scroll.png',
  stars: [4, 5],
  atk: 272,
  crt: 38,
  recommend: [db],
  active: [
    'This weapon can switch between 3 modes: fire, lightning, ice. Each form has its own power',
    '(SP Cost: 6 – Cooldown: 8s)',
    '**Fire Mode:** Charge and shoot fire ball. On hit, has 30% chance to inflict burn, dealing 298 fire elemental damage per every 0.5 second, last for 3 seconds (works like Rocket Launcher)',
    '**Lightning Mode:** Charge and shoot homing lightning ball. On hit, has 15% chance to deal extra 150% electric elemental damage and inflict vulnerable status, reduce 60% defense power for 3 seconds (works like Cluster Missile Pod)',
    '**Ice Mode:** Shoot ice fog​ continuously. On hit, has 5% chance to reduce 50% movement speed and attack speed for 3  seconds *(works like Particle Beam Cannon)'
  ],
  passive: []
}, {
  name: 'Chiyou Cannon',
  file: 'chi-you-giant-Cannon.png',
  stars: [4, 5],
  atk: 294,
  crt: 11,
  recommend: [ss],
  active: [
    'Release a strong rupture, seal caught enemies in black ice status, inflict freeze status on to them, dealing 956 ice elemental damage while wielder heal 99 HP per every 0.9 second, black ice last for 4 seconds',
    '(SP Cost: 25 – Cooldown: 20s)'
  ],
  passive: [
    'Slow charge type, increase physical damage when performing normal attack by 100%',
    '**Rocket Cannon Type:**',
    '• Charge 1 time: Shoot 1 normal rocket' ,
    '• Charge 2 times: Shoot 2 strong rockets',
    '• Charge 3 times: Shoot 3 very strong rockets',
    'For every enemy inflict with freeze status, increase charge speed by 20.0%, stackable up to 10 times'
  ]
}, {
  name: 'Hellfire Type-III',
  file: 'hellfire-type-3.png',
  stars: [4, 5],
  atk: 285,
  crt: 22,
  recommend: [wd],
  active: [
    'Shoot fire, dealing 12*60% fire elemental damage and 12*60% physical damage based on attack power',
    '(SP Cost: 49 – Cooldown: 36s)'
  ],
  passive: [
    'Fast charge type, reduce physical damage when performing normal attack by 30%',
    '**Rocket Cannon Type:**',
    '• Charge 1 time: Shoot 1 normal rocket' ,
    '• Charge 2 times: Shoot 2 strong rockets',
    '• Charge 3 times: Shoot 3 very strong rockets',
    'Increase all-damage against enemy inflicted freeze, time-space deceleration status by 20%'
  ]
}, {
  name: 'Flint Sanada',
  file: 'fire-katana-sanada.png',
  stars: [4, 5],
  atk: 275,
  crt: 34,
  recommend: [bn],
  active: [
    'Increase charge speed by 100%, last for 11.98 seconds',
    '(SP Cost: 20 – Cooldown: 120 seconds)'
  ],
  passive: [
    'Shoot many missiles at multiple target, long charge type, performing critical at one single target damage will reduce its damage',
    '**Missile Cannon Type:**',
    '• Charge 1 time: Shoot 3 missiles',
    '• Charge 2 times: Shoot 7 missiles',
    '• Charge 3 times: Shoot 15 missiles',
    'On hit missile, add 55 fire elemental damage, then explode dealing 490 AOE fire elemental damage'
  ]
}, {
  name: 'Tyr Wrist',
  file: 'tyrs-arm.png',
  stars: [4, 5],
  atk: 282,
  crt: 26,
  recommend: [db, ss, vc],
  active: [
    'Perform a 3-times-charge shoot at the enemies, damaged enemies will be put into bleed state, taking 313 physical damage per every 0.5 second, last for 7 seconds',
    '(SP Cost: 19 – Cooldown: 9 seconds)'
  ],
  passive: [
    '**Rocket Cannon Type:**',
    '• Charge 1 time: Shoot 1 normal rocket' ,
    '• Charge 2 times: Shoot 2 strong rockets',
    '• Charge 3 times: Shoot 3 very strong rockets',
    'Increase 30% physical damage to broken shield enemies when perform normal attack or charge attack'
  ]
}, {
  name: 'Quantum Destroyer Type-II',
  file: 'quantum-destroyer-type-2.png',
  stars: [4, 5],
  atk: 280,
  crt: 27,
  recommend: [ya, vc],
  active: [
    'Jump backwards, set up a Decelerate Black Hole at previous location that suck enemies in and reduce their movement speed by 60% , deal 188 ice elemental damage per every 0.6 second'
  ],
  passive: [
    '**Particle Beam Cannon:** Fire and charge laser in a straight line. Firing for a longer period will cause the cannon to overheat. Closer enemies receives higher damage, highest damage at 3m radius',
    'Increase 35% physical damage to enemies slowed by time slow'
  ]
}, {
  name: 'Star Destroyer 19c',
  file: 'plannet-anniliator.png',
  stars: [4, 5],
  atk: 283,
  crt: 31,
  recommend: [bn],
  active: [
    'Shoot 18 missiles straight forward. Each missile deal physical damage 74.9% based on attack power and inflict float status. Furthermore inflict burn status to enemy, deal 599 fire elemental damage per each 0.5 second, last for 4 seconds',
    '(SP Cost: 25 – Cooldown: 12 seconds)'
  ],
  passive: [
    'Shoot many missiles at multiple target, long charge type, performing critical at one single target damage will reduce its damage',
    '• Charge 1 time: Shoot 2 missiles',
    '• Charge 2 times: Shoot 5 missiles',
    '• Charge 3 times: Shoot 11 missiles',
    'On hit missile from the back, each missile add 399 fire elemental damage'
  ]
}, {
  name: 'Lurker\'s Cannon',
  file: 'lurker-cannon.png',
  stars: [4, 5],
  atk: 234,
  crt: 28,
  recommend: [ya],
  active: [
    'Slam a mechanical arm on the ground, dealing multiple instance of damage, each equal to 120% attack power, inflict stun for 2.55 seconds. After performing skill, increase wielder movement speed for a period',
    '(SP Cost: 18 – Cooldown: 12 seconds)'
  ],
  passive: [
    '**Rocket Cannon Type:**',
    '• Charge 1 time: Shoot 1 normal rocket' ,
    '• Charge 2 times: Shoot 2 strong rockets',
    '• Charge 3 times: Shoot 3 very strong rockets'
  ]
}, {
  name: 'Devourer Laser',
  file: 'devourer-cannon.png',
  stars: [4, 5],
  atk: 239,
  crt: 22,
  recommend: [ya],
  active: [
    'Slam a mechanical arm on the ground, dealing multiple instance of damage, knock back enemies, dealing 214 fire elemental damage, inflict burn status, dealing 134 fire elemtal damage and increase wielder movement speed for a period',
    '(SP Cost: 18 – Cooldown: 12 seconds)'
  ],
  passive: [
    '**Particle Beam Cannon:** Fire and charge laser in a straight line. Firing for a longer period will cause the cannon to overheat. Closer enemies receives higher damage, highest damage at 3m radius'
  ]
}, {
  name: 'Markov Type A',
  file: 'markov-type-a.png',
  stars: [3, 4],
  atk: 163,
  crt: 38,
  recommend: [vc],
  active: [],
  passive: [
    '**Rocket Cannon Type:**',
    '• Charge 1 time: Shoot 1 normal rocket' ,
    '• Charge 2 times: Shoot 2 strong rockets',
    '• Charge 3 times: Shoot 3 very strong rockets',
    'on hit 60% chance to inflict burn status, dealing 149 fire elemental damage per each 0.5 second, last for 4.08 seconds'
  ]
}, {
  name: 'Markov Type C',
  file: 'markov-type-c.png',
  stars: [3, 4],
  atk: 169,
  crt: 29,
  recommend: [bn],
  active: [
    'Enhance weapon, increase attack speed by 75%, last for 4.99 seconds',
    '(SP Cost: 12 – Cooldown: 20s)'
  ],
  passive: [
    'Shoot many missiles at multiple target, long charge type, performing critical at one single target damage will reduce its damage',
    '**Missile Cannon Type:**',
    '• Charge 1 time: Shoot 3 missiles',
    '• Charge 2 times: Shoot 7 missiles',
    '• Charge 3 times: Shoot 15 missiles'
  ]
}, {
  name: 'Cathode Type-07',
  file: 'monopole-cannon-type-07.png',
  stars: [3, 4],
  atk: 188,
  crt: 3,
  recommend: [db, vc],
  active: [
    'Create a field around self, reduce enemy attack speed and movement speed by 80%, last for 8 seconds',
    '(SP Cost: 7 – Cooldown: 20 seconds)'
  ],
  passive: [
    '**Particle Beam Cannon:** Fire and charge laser in a straight line. Firing for a longer period will cause the cannon to overheat. Closer enemies receives higher damage, highest damage at 3m radius'
  ]
}, {
  name: 'Cathode Type-09',
  file: 'monopole-cannon-type-09.png',
  stars: [3, 4],
  atk: 182,
  crt: 12,
  recommend: [db, vc],
  active: [
    '**Particle Beam Cannon:** Fire and charge laser in a straight line. Firing for a longer period will cause the cannon to overheat. Closer enemies receives higher damage, highest damage at 3m radius'
  ],
  passive: [
    'On hit 1.5% chance to inflict paralysis status to enemy, causing immobilize and unable to attack, last for 2.99 seconds'
  ]
}, {
  name: 'Proto Cannon',
  file: 'pulse-cannon-prototype.png',
  stars: [1, 4],
  atk: 146,
  crt: 29,
  recommend: [],
  active: [
    'Enhance weapon, increase basic attack physical damage (branch attack and charge attack included) by 32% last for 5 seconds',
    '(SP Cost: 8 – Cooldown: 15s)'
  ],
  passive: []
}, {
  name: 'Raider Missiles',
  file: 'missile-division-the-striker.png',
  stars: [3, 4],
  atk: 169,
  crt: 29,
  recommend: [bn],
  active: [
    'Increase wielder movement speed by 100%, last for 5.98 seconds',
    '(SP Cost: 6 – Cooldown: 15s)'
  ],
  passive: [
    'Shoot many missiles at multiple target, long charge type, performing critical at one single target damage will reduce its damage',
    '**Missile Cannon Type:**',
    '• Charge 1 time: Shoot 3 missiles',
    '• Charge 2 times: Shoot 7 missiles',
    '• Charge 3 times: Shoot 15 missiles'
  ]
}, {
  name: 'X-01 Azure Eyes',
  file: 'x-01-blue-eyes-of-oroch.png',
  stars: [3, 4],
  atk: 178,
  crt: 17,
  recommend: [bn, wd],
  active: [
    'Enhance own attack for 6.47 seconds duration, each attack reduce enemy attack speed and movement speed by 60% for 3.5 seconds',
    '(SP Cost: 12 – Cooldown: 20s)'
  ],
  passive: [
    'Shoot many missiles at multiple target, long charge type, performing critical at one single target damage will reduce its damage',
    '**Missile Cannon Type:**',
    '• Charge 1 time: Shoot 3 missiles',
    '• Charge 2 times: Shoot 7 missiles',
    '• Charge 3 times: Shoot 15 missiles'
  ]
}, {
  name: 'Frost Rain',
  file: 'rain-of-cold-frost.png',
  stars: [3, 4],
  atk: 176,
  crt: 20,
  recommend: [wd],
  active: [],
  passive: [
    'Slow charge type, increase physical damage when performing normal attack by 100%',
    '**Rocket Cannon Type:**',
    '• Charge 1 time: Shoot 1 normal rocket' ,
    '• Charge 2 times: Shoot 2 strong rockets',
    '• Charge 3 times: Shoot 3 very strong rockets',
    'Knock down attack inflict frost debuff, slow enemy and its surrounding attack speed and movement speed by 70%, last for 6 seconds, cooldown 15 seconds'
  ]
}, {
  name: 'Ice Roar',
  file: 'ice-howl.png',
  stars: [3, 4],
  atk: 166,
  crt: 34,
  recommend: [ss],
  active: [],
  passive: [
    'Heavy Cannon. Has a longer charging time. Increases basic attacks\'  physical damage by 50%.',    
    '**Rocket Cannon Type:**',
    '• Charge 1 time: Shoot 1 normal rocket' ,
    '• Charge 2 times: Shoot 2 strong rockets',
    '• Charge 3 times: Shoot 3 very strong rockets',
    'On hit 39.8% chance to inflict freeze status, last for 3 seconds, cooldown 9.07 seconds'
  ]
}, {
  name: 'Alloy Lurker\'s Cannon',
  file: 'alloyed-lurker-cannon.png',
  stars: [3, 4],
  atk: 163,
  crt: 17,
  recommend: [ya],
  active: [
    'Slam mechanical arm on the ground, creating shock waves. Shock wave deal many damage instance, each deal physical damage 90% based on attack power',
    '(SP Cost: 12 – Cooldown: 9s)'
  ],
  passive: [
    'Fast charge type, reduce physical damage when performing normal attack by 30%',
    '**Rocket Cannon Type:**',
    '• Charge 1 time: Shoot 1 normal rocket' ,
    '• Charge 2 times: Shoot 2 strong rockets',
    '• Charge 3 times: Shoot 3 very strong rockets'
  ]
}, {
  name: 'Alloy Devourer Laser',
  file: 'alloyed-devourer-cannon.png',
  stars: [3, 4],
  atk: 166,
  crt: 14,
  recommend: [ya],
  active: [
    'Slam mechanical arm on the ground, create a shock wave that deal many damage instance and inflict knock back. Each instance deal 158 fire elemental damage',
    '(SP Cost: 20 – Cooldown: 15 seconds)'
  ],
  passive: [
    '**Particle Beam Cannon:** Fire and charge laser in a straight line. Firing for a longer period will cause the cannon to overheat. Closer enemies receives higher damage, highest damage at 3m radius'
  ]
}, {
  name: 'Xuanyuan Cannon',
  file: 'xuanyuan-pulse-cannon.png',
  stars: [3, 4],
  atk: 165,
  crt: 16,
  recommend: [vc],
  active: [
    'Fire a big fireball, on hit explode deal 419% fire elemental damage based on attack power, inflict burn status, dealing 18% fire elemental damage based on attack power per every 0.5 second, last for 3 seconds',
    '(SP Cost: 18 – Cooldown:10s)'
  ],
  passive: [
    '**Rocket Cannon Type:**',
    '• Charge 1 time: Shoot 1 normal rocket' ,
    '• Charge 2 times: Shoot 2 strong rockets',
    '• Charge 3 times: Shoot 3 very strong rockets'
  ]
}, {
  name: 'Ai-Chan\'s Cannon',
  file: 'ai-chan-cannon.png',
  stars: [3, 4],
  atk: 174,
  crt: 3,
  recommend: [vc],
  active: [],
  passive: [
    '**Rocket Cannon Type:**',
    '• Charge 1 time: Shoot 1 normal rocket' ,
    '• Charge 2 times: Shoot 2 strong rockets',
    '• Charge 3 times: Shoot 3 very strong rockets',
    'On 3rd charge phase, on hit 66.3% chance to inflict vulnerable status, reduce enemy movement speed, does not stack with other movement speed reducing status'
  ]
}, {
  name: 'SU-30 Cannon',
  file: 'su-30-cannon.png',
  stars: [2, 3],
  atk: 121,
  crt: 14,
  recommend: [],
  active: [],
  passive: [
    '**Rocket Cannon Type:**',
    '• Charge 1 time: Shoot 1 normal rocket' ,
    '• Charge 2 time: Shoot 2 strong rocket',
    '• Charge 3 time: Shoot 3 very strong rocket'
  ]
}, {
  name: 'MiG-11',
  file: 'mig-11.png',
  stars: [2, 3],
  atk: 94,
  crt: 59,
  recommend: [],
  active: [],
  passive: [
    'Shoot many missiles at multiple target, long charge type, performing critical at one single target damage will reduce its damage',
    '• Charge 1 time: Shoot 2 missiles',
    '• Charge 2 time: Shoot 5 missiles',
    '• Charge 3 time: Shoot 11 missiles'
  ]
}, {
  name: 'MiG-13',
  file: 'mig-13.png',
  stars: [2, 3],
  atk: 128,
  crt: 2,
  recommend: [],
  active: [],
  passive: [
    'Shoot many missiles at multiple target, long charge type, performing critical at one single target damage will reduce its damage',
    '• Charge 1 time: Shoot 2 missiles',
    '• Charge 2 time: Shoot 5 missiles',
    '• Charge 3 time: Shoot 11 missiles'    
  ]
}, {
  name: 'MiG-7',
  file: 'mig-7.png',
  stars: [2, 3],
  atk: 128,
  crt: 2,
  recommend: [],
  active: [],
  passive: [
    '**Particle Beam Cannon:** Fire and charge laser in a straight line. Firing for a longer period will cause the cannon to overheat. Closer enemies receives higher damage, highest damage at 3m radius'
  ]
}, {
  name: 'Fury Cannon',
  file: 'fury-cannon.png',
  stars: [2, 3],
  atk: 114,
  crt: 25,
  recommend: [],
  active: [],
  passive: [
    'Slow charge type, increase physical damage when performing normal attack by 100%',
    '**Rocket Cannon Type:**',
    '• Charge 1 time: Shoot 1 normal rocket' ,
    '• Charge 2 time: Shoot 2 strong rocket',
    '• Charge 3 time: Shoot 3 very strong rocket'
  ]
}, {
  name: 'SU-22 Howitzer',
  file: 'su-22.png',
  stars: [1, 2],
  atk: 76,
  crt: 8,
  recommend: [],
  active: [],
  passive: []
}]

export default cannons