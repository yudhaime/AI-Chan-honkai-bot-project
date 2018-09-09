import {Weapon} from '../'
import {wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch} from '../../../utility/abbreviation'

const greatswords:Weapon[] = [{
  name: '7th Sacred Relic',
  file: '7th-sacred-relic.png',
  stars: [4, 5],
  atk: 263,
  crt: 48,
  recommend: [vt],
  active: [
    'Fire 2 air slashes one after another, dealing physical damage continuously, each time equal to 25% attack power, damage deal up to 8 times. When 2 slashes meet and create an X cross, create an explosion deal physical damage  349% based on attack power and inflict stun status to enemy for 5.99 seconds.',
    '(SP Cost: 18 – Cooldown: 24s)'
  ],
  passive: [
    'When attacking enemies inflicted with stun status, increase attack speed by 49.9%, last for 4 seconds, cooldown 12 seconds'
  ]
}, {
  name: 'Blood Dance',
  file: 'blood-dance.png',
  stars: [4, 5],
  atk: 289,
  crt: 17,
  recommend: [br, sf, vt],
  active: [
    'Summon a Fresh Blood Tornado, dealing 9*35% physical damage, and put enemies in a berserk state for 8.98 seconds – increase attack speed by 2 times, but take more 60% incoming elemental damage',
    '(SP Cost: 20 – Cooldown: 15s)'
  ],
  passive: [
    'When combo above 15, increase 30% outgoing physical damage. When HP below 50%, heal 30 HP per every 0.5 seconds if the wielder undeployed'
  ]
}, {
  name: 'Sunfire Greatsword',
  file: 'sunfire-greatsword.png',
  stars: [4, 5],
  atk: 280,
  crt: 27,
  recommend: [br],
  active: [
    'Jump at targeted enemy and AOE apply knock-up status, dealing 2877 fire elemental damage, while also inflict burn status, dealing 306 fire elemental damage per every 0.5 sec, last for 6 second',
    '(SP Cost: 20 – Cooldown: 12s)'
  ],
  passive: [
    'Increase Fire elemental damage by 30%'
  ]
}, {
  name: 'Dragon Spine',
  file: 'dragon-spine.png',
  stars: [4, 5],
  atk: 271,
  crt: 16,
  recommend: [br],
  active: [
    'Jump at target enemy, dealing 249% AOE physical damage based on attack power, inflict bind status to damaged enemy for 4.5 seconds. Also inflict bleed status, dealing  238 damage per 0.5 second',
    '(SP Cost: 25 – Cooldown: 25s)'
  ],
  passive: [
    'Attacking bleed inflicted enemy heal for 39 HP'
  ]
}, {
  name: 'Nidhogg Claws',
  file: 'nidhogg-claws.png',
  stars: [4, 5],
  atk: 272,
  crt: 38,
  recommend: [sf],
  active: [
    'Use chainsaw to cut the enemy, deal small AOE physical damage 24*32%  based on attack power, flip up the chainsaw at the end, deal physical damage 325% based on attack power. Wielder is invulnerable during skill animation.',
    '(SP Cost: 25 – Cooldown: 12s)'
  ],
  passive: [
    'On hit, 10% chance to inflict bleed status, dealing 151 physical attack per every 0.5 seconds for 3 seconds.'
  ]
}, {
  name: 'Schwert Gewehr',
  file: 'schwert-gewehr.png',
  stars: [4, 5],
  atk: 289,
  crt: 16,
  recommend: [sf],
  active: [
    'Emit a electromagnetic wind slash towards the front, dealing 2324 electric damage, inflict electric shock status to caught enemy for 7 seconds. Enemy in electric shock state receive extra 50% electric elemental damage',
    '(SP Cost: 20 – Cooldown: 18s)'
  ],
  passive: [
    'Add 79 lightning elemental damage for each attack'
  ]
}, {
  name: 'Xuanyuan Sword',
  file: 'xuanyuan-sword.png',
  stars: [4, 5],
  atk: 276,
  crt: 32,
  recommend: [br, sf, vt, bs],
  active: [
    'Has 3 skill charges, each skill attack uses electric/fire/ice elemental damage in following order, dealing 239% physical damage and 239% elemental damage, inflict paralyze/burn/freeze status to enemies. After using the skill, within (electric: 4, fire: 7, ice: 10) seconds, further add 448 elemental damage into each attack, elemental imbued attack can’t be stacked',
    '(SP Cost: 15 – Cooldown: 12s)'
  ],
  passive: [
    'When attacked, fire 2 spirit sword at 2 random enemy, inflict knock back enemy on its path, dealing 160% physical damage based on attack power, cool down 5.03 seconds'
  ]
}, {
  name: 'Auroral Judgement',
  file: 'dawn-judgement.png',
  stars: [4, 5],
  atk: 268,
  crt: 41,
  recommend: [vt],
  active: [
    'Increase saw speed thus increase attack speed by 50%, increase critical rate by 25% for normal attack, attack can’t be interrupted, last for 8 seconds',
    '(SP Cost: 18 – Cooldown: 24s)'
  ],
  passive: [
    'When performing a critical hit, has 24.9% chance to explode 1792 electric elemental damage under wielder, inflict weaken status to caught enemy for 4 seconds, reducing their defense power by 50%, has 7 seconds cooldown'
  ]
}, {
  name: 'Dark Xuanyuan Sword',
  file: 'dark-xuanyuan-sword.png',
  stars: [4, 5],
  atk: 250,
  crt: 25,
  recommend: [bs],
  active: [
    'Increase physical damage by 35% for 8 seconds. Within skill period, killing the first enemy will apply **Time Fracture** for 8 seconds, also prolong 35% physical damage buff until the end of **Time Fracture**.',
    '(SP Cost: 22 – Cooldown: 25s)'
  ],
  passive: [
    'On-hit enemy will apply time fracture for 4.5 seconds, cooldown 60 seconds'
  ]
}, /*{
  name: 'Ghostslayer Nagamitsu',
  file: 'ghostslayer-nagamitsu.png',
  stars: [4, 5],
  atk: 289,
  crt: 17,
  recommend: [bs],
  active: [
    'Charge energy while dashing, getting interrupted or stop dashing will reset the charging process. For every 0.5/1.5/3 seconds dashing duration, performing tackle attack will create an explosion to the first enemy in contact, dealing 399/599/799 % physical damage'
  ],
  passive: [
    'While combo is below 5, increase physical damage by 32%'
  ]
},*/ {
  name: 'Ghostslayer Nagamitsu',
  file: 'ghostslayer-nagamitsu.png',
  stars: [4, 5],
  atk: 289,
  crt: 17,
  recommend: [bs],
  active: [
    'Charge energy while dashing, getting interrupted or stop dashing will reset the charging process. For every 0.5/1.5/3 seconds dashing duration, performing tackle attack will create an explosion to the first enemy in contact, dealing 399/599/799 % physical damage'
  ],
  passive: [
    'While combo is below 5, increase physical damage by 32%'
  ]
}, {
  name: 'Godfather Greatsword',
  file: 'godfather-greatsword.png',
  stars: [4, 5],
  atk: 234,
  crt: 28,
  recommend: [vt],
  active: [
    'Shoot laser at a small frontal area, each laser beam deals 89 fire elemental damage and explode, dealing 717 fire elemental damage to enemies caught within radius, and inflict burn status, dealing 89 fire elemental damage per every 0.5 seconds for 3 seconds',
    '(SP Cost: 24 – Cooldown: 18s)'
  ],
  passive: [
    'Add 95 fire elemental damage into each attack'
  ]
}, {
  name: 'Betrayer\'s Greatsword',
  file: 'betrayer-greatsword.png',
  stars: [4, 5],
  atk: 245,
  crt: 15,
  recommend: [vt],
  active: [
    'Fire 6 homing missile, each deals 200% small AOE physical damage based on attack power, inflict stun status to enemies caught within radius for 2.50 seconds',
    '(SP Cost: 18 – Cooldown: 12s)'
  ],
  passive: [
    'When attacked has 50% chance to deal 160% physical damage back at enemy'
  ]
}, {
  name: 'Balmung',
  file: 'balmung.png',
  stars: [4, 5],
  atk: 285,
  crt: 32,
  recommend: [sf],
  active: [
    'Increase physical damage deal by wielder by 24,9%, enhance all Time Essence Slash, last for 8 seconds',
    '(SP Cost: 20 – Cooldown: 25s)'
  ],
  passive: [
    'On hit release a Time Essence Slash, with physical damage 80% based on attack power, cooldown 0.8 seconds. Each Time Essence Slash has 15% chance to be enhanced, deal physical damage 159% based on attack power'
  ]
}, {
  name: 'Nitro Crystal',
  file: 'nitro-crystal.png',
  stars: [3, 4],
  atk: 168,
  crt: 31,
  recommend: [vt],
  active: [],
  passive: [
    '8% chance to inflict freeze status, last for 2.14 seconds'
  ]
}, {
  name: 'Vanguard',
  file: 'vanguard.png',
  stars: [3, 4],
  atk: 183,
  crt: 10,
  recommend: [bs],
  active: [
    'Slam at enemy, inflict float status, deal physical damage 449% based on attack power',
    '(SP Cost: 15 – Cooldown:8s )'
  ],
  passive: []
}, {
  name: 'Ion Resonance',
  file: 'ion-resonance.png',
  stars: [3, 4],
  atk: 171,
  crt: 27,
  recommend: [sf],
  active: [
    'Attack enemy with electric energy, deal AOE 3*743 lightning damage to enemy and its surrounding, inflict paralysis status, last for 2 seconds',
    '(SP Cost: 15 – Cooldown: 10s)'
  ],
  passive: []
}, {
  name: 'King Cobra',
  file: 'king-cobra.png',
  stars: [3, 4],
  atk: 185,
  crt: 7,
  recommend: [bs, br],
  active: [],
  passive: [
    'Give 19 SP when starting battle'
  ]
}, {
  name: 'Proto Greatsword',
  file: 'proto-greatsword.png',
  stars: [1, 4],
  atk: 153,
  crt: 19,
  recommend: [],
  active: [
    'Enhance weapon, increase basic attack physical damage (branch attack and charge attack included) by 32%, last for 5 seconds',
    '(SP Cost: 8 – Cooldown: 32s)'
  ],
  passive: []
}, {
  name: 'Violet Knight',
  file: 'violet-knight.png',
  stars: [3, 4],
  atk: 178,
  crt: 17,
  recommend: [bs],
  active: [
    'Perform air slash towards target enemy location, air slash deal physical damage 3*145% based on attack power to enemy on its path(SP Consumption: 18 – Cooldown: 14 seconds)'
  ],
  passive: []
}, {
  name: 'Crimson Queen',
  file: 'crimson-queen.png',
  stars: [3, 4],
  atk: 120,
  crt: 15,
  recommend: [br],
  active: [],
  passive: [
    'Increase out going physical damage by 0.6% for each 1% HP loss'
  ]
}, {
  name: 'Sprocket Greatsword',
  file: 'sprocket-claymore.png',
  stars: [3, 4],
  atk: 173,
  crt: 24,
  recommend: [vt],
  active: [
    'Increase chainsaw speed, increase attack speed by 39.9%, increase basic attack critical chance (charge attack included) by 10%, last for 6 seconds',
    '(SP Cost: 14 – Cooldown: 18s)'
  ],
  passive: []
}, {
  name: 'Alloy Godfather Greatsword',
  file: 'alloy-godfather-greatsword.png',
  stars: [3, 4],
  atk: 155,
  crt: 17,
  recommend: [vt],
  active: [
    'Shoot lazer in front, explode enemy on hit, deal small AOE 536 fire elemental damage',
    '(SP Cost: 18 – Cooldown: 16s)'
  ],
  passive: []
}, {
  name: 'Alloy Betrayer\'s Greatsword',
  file: 'alloy-betrayer-greatsword.png',
  stars: [3, 4],
  atk: 160,
  crt: 10,
  recommend: [],
  active: [
    'Shoot out 6 missiles, each deal small AOE physical damage 199% based on attack power',
    '(SP Cost: 12 – Cooldown: 10s)'
  ],
  passive: [vt]
}, {
  name: 'Ai-Chan\'s Hammer',
  file: 'ai-chan-hammer.png',
  stars: [3, 4],
  atk: 182,
  crt: 19,
  recommend: [bs],
  active: [
    'Slam AI-hammer on the ground, creating a shock wave that inflict knock back, deal physical damage 299% based on attack power, have 50% chance to inflict stun status, last for 3 seconds',
    '(SP Cost: 15 – Cooldown: 15s)'
  ],
  passive: []
}, {
  name: 'Inquisition Torch',
  file: 'inquisition-torch.png',
  stars: [3, 4],
  atk: 165,
  crt: 16,
  recommend: [],
  active: [],
  passive: [
    'On hit have 11.11% to deal 302 fire elemental damage to target and its surroundings'
  ]
}, {
  name: 'Hybrid Type-27',
  file: 'melding-type-27-greatsword.png',
  stars: [2, 3],
  atk: 126,
  crt: 5,
  recommend: [],
  active: [
    'Lift enemy into mid-air, deal physical damage 348% based on attack power',
    '(SP Cost: 12 – Cooldown: 10s) '
  ],
  passive: []
}, {
  name: 'Energy Greatsword',
  file: 'energy-claymore.png',
  stars: [2, 3],
  atk: 122,
  crt: 12,
  recommend: [],
  active: [],
  passive: []
}, {
  name: 'Fusion Sword EX',
  file: 'fusion-sword-ex.png',
  stars: [2, 3],
  atk: 124,
  crt: 9,
  recommend: [],
  active: [
    'Perform a chop cut, inflict knock down, deal physical damage 398% based on attack power',
    '(SP Cost: 10 – Cooldown: 9 seconds)'
  ],
  passive: []
}, {
  name: 'Nuclear PRI',
  file: 'nuclear-pri.png',
  stars: [2, 3],
  atk: 121,
  crt: 14,
  recommend: [],
  active: [],
  passive: []
}, {
  name: 'Hybrid Type-16',
  file: 'hybrid-type-16.png',
  stars: [2, 3],
  atk: 126,
  crt: 5,
  recommend: [],
  active: [],
  passive: [
    'Increase all-damage against stun, bind, space-time decelerated enemy by 20%'
  ]
}]

export default greatswords