import {Weapon} from '../'

const gauntlets:Weapon[] = [{
  name: 'Cygnus Gauntlets',
  file: 'sky-query-thousand-birds.png',
  stars: [4, 5],
  atk: 268,
  crt: 40,
  recommend: [],
  active: [
    'Grant a enhancement buff. While the effect is active, increase all squad members recovery effect by 30%, increase Valkyrja own attack speed by 40%, last for 8 seconds',
    '(SP Cost: 5 - Cooldown: 16s)'
  ],
  passive: [
    'Increase SP gained via attack by 25%'
  ]
}, {
  name: 'Star Ring Vortex',
  file: 'star-ring-vortex.png',
  stars: [4, 5],
  atk: 257,
  crt: 23,
  recommend: [],
  active: [
    'Pull the target in front of Valkyrja, deal 450% physical damage based on attack power, slow its speed by 80%, last for 5 seconds',
    '(SP Cost: 14 - Cooldown: 20s)'
  ],
  passive: [
    'When hitting an enemy with branch attack, deals 2500 physical damage to the surrounding enemies, cooldown 1.5 seconds'
  ]
}, {
  name: 'Grips of Tai Xuan',
  file: 'tai-xuan.png',
  stars: [4, 5],
  atk: 268,
  crt: 35,
  recommend: [],
  active: [
    'Summon 3 projectile Xuanyuan swords. Each projectile deals 1500 fire elemental damage, and spacetime lock on-hit enemy for 4.5 seconds',
    '(SP cost: 17 - Cooldown: 25 seconds)'
  ],
  passive: [
    'Increase all-damage dealt by Valkyrja by 8% upon hitting an enemy with normal, branch, ultimate, tag-in/QTE attack, last for 8 seconds. The effect can be overlapped itself by re-activating it via different type of attack. If overlapping is successful, refresh the duration'
  ]
}, {
  name: 'Yada Gauntlets',
  file: 'nuadha.png',
  stars: [4, 5],
  atk: 279,
  crt: 32,
  recommend: [],
  active: [
    'Deal 600% physical damage based on attack power to enemy in front, inflict bleed status on on-hit enemy, deal 500 physical damage based on attack power per 0.5 second, last for 8 seconds',
    '(SP Cost: 15 - Cooldown: 20s) '
  ],
  passive: [
    'Increase lightning elemental damage dealt through attack by 40%'
  ]
}, {
  name: 'Cinder Hawk',
  file: 'ember-of-kite.png',
  stars: [4, 5],
  atk: 283,
  crt: 24,
  recommend: [],
  active: [],
  passive: [
    '20% chance to deal extra 300% fire elemental damage against burn enemy or enemy inflicted with Lingering Fire. Can only be triggered every 1.5 second for each enemy',
    'Negate an attack from a burn enemy or enemy inflicted with Lingering Fire. Cooldown 40 seconds. Increase character elemental damage by 20%, also increase fire elemental damage by 20%'
  ]
},{
  name: 'CAS-II Namiko',
  file: 'cas-II-minako.png',
  stars: [3, 4],
  atk: 166,
  crt: 13,
  recommend: [],
  active: [],
  passive: [
    'Release a shockwave, deal 450% physical damage based on attack power to enemy in front',
    '(SP Cost: 10 - Cooldown: 10s)'
  ]
}, {
  name: 'White Star Banisher',
  file: 'white-star.png',
  stars: [3, 4],
  atk: 173,
  crt: 20,
  recommend: [],
  active: [],
  passive: [
    'Raise a wave air around self, dealing 450% physical damage to surrounding enemy and inflicts float status on them',
    '(SP Cost: 12 - Cooldown: 14s) '
  ]
}, {
  name: 'CAS-X Saint',
  file: 'cas-X-saint.png',
  stars: [3, 4],
  atk: 172,
  crt: 21,
  recommend: [],
  active: [],
  passive: [
    'On hit has 17% chance to deal 700 fire elemental damage'
  ]
}, {
  name: 'Protective Gauntlet',
  file: 'protective-gauntlet.png',
  stars: [2, 3],
  atk: 78,
  crt: 8,
  recommend: [],
  active: [],
  passive: []
}]

export default gauntlets