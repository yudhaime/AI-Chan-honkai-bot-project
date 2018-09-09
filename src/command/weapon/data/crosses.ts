import {Weapon} from '../'
import {wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch} from '../../../utility/abbreviation'

const crosses:Weapon[] = [{
  name: 'Oath of Judah',
  file: 'judah.png',
  stars: [4, 5],
  atk: 276,
  crt: 32,
  recommend: [vp, ch, sr],
  active: [
    `Summons and deploys the weapon, immobilizing enemies within range for 6 sec and shooting 13 light spears. Light spears will attack random enemies one by one, dealing lightning damage equal to 282% of ATK`,
    '(SP Cost: 16 – Cooldown: 13s)'
  ],
  passive: [
    `Character's own attacks have a 20.0% chance of marking enemies with a Holy Light Brand that lasts for 6 sec. Marked enemies receive an additional 650 lightning damage. Can only be triggered once every 13 sec.`
  ]
}, {
  name: 'Blood Embrace',
  file: 'blood-embrace.png',
  stars: [4, 5],
  atk: 264,
  crt: 45,
  recommend: [ve, ch],
  active: [
    `Summons and deploys the weapon, sending enemies within range floating and slashing them once every 0.25 sec for the next 2 sec. Enemies receive physical damage equal to 200.0% of ATK from floating and each slash. Slashes bleed enemies, dealing 760 physical damage every 0.5 sec for 5 sec.`,
    '(SP Cost: 24 – Cooldown: 10s)'
  ],
  passive: [
    `Increases character's physical damage done to bleeding enemies by 40.0%.`
  ]
}, {
  name: 'Pledge of Sakura',
  file: 'pledge-of-sakura.png',
  stars: [4, 5],
  atk: 257,
  crt: 53,
  recommend: [sr],
  active: [
    'Summon cross and deploy: summon a 3.5 seconds field that attack surrounding enemies with sakura blade, dealing 179.9% physical attack based on attack power per every 0.3 second, have 21.2% on-hit chance to put 1 Sakura Mark Counter on enemy. When target enemy’s Sakura Mark Counter go higher than 3, the Counter will be reset and put a Sakura Mark on target enemy',
    '(SP Cost: 20 – Cooldown: 12s)'
  ],
  passive: [
    'Have 59.9% on-hit chance to summon a circular field that attack enemy with sakura petals at enemy location, dealing 199.5% physical attack based on power, have 6 seconds cooldown. Deal further 440 fire elemental damage against enemy having a Sakura Mark or Sakura Mark Counter. When equipped on Sakuno Rondo, sakura petals increase Sakura Mark Counter by 1'
  ]
}, {
  name: '11th Sacred Relic',
  file: '11th-sacred-relic.png',
  stars: [4, 5],
  atk: 274,
  crt: 41,
  recommend: [ch],
  active: [
    'Summon cross and deploy: summon a 10 seconds field, increase allies Valkyrie & Summon unit critical chance by 10%. Attack enemy inside field and its small surrounding per each 1.0 second, dealing 5*50% physical damage based on attack power',
    '(SP Cost: 18 – Cooldown:15s)'
  ],
  passive: [
    'On hit against vulnerable status enemy, have 39.9% chance to heal whole squad by 74 HP, 3 seconds cooldown'
  ]
}, {
  name: 'Silver Cleaver',
  file: 'silver-cleaver.png',
  stars: [4, 5],
  atk: 268,
  crt: 29,
  recommend: [vp, ve, sr],
  active: [
    'Summon cross and deploy: summon a 6 seconds field, cut 3 times per every 1 second randomly to enemies in field, each cut deal 664 physical damage, inflict 5 second weaken status, reduce their attack power by 50%'
  ],
  passive: [
    'Increase physical damage against weaken status enemy by 35%'
  ]
}, {
  name: 'Eliudnir',
  file: 'aurel-de-nier.png',
  stars: [4, 5],
  atk: 275,
  crt: 36,
  recommend: [ve],
  active: [
    'Summon cross and deploy: summon a 10 seconds field, every 1.5 second shoots a light beam to a random enemy within range that deals physical damage based on 320.1% attack power, apply stun status to enemy. Last for 6s. Stun status enemy take extra 30% physical damage',
    '(SP Cost: 20 – Cooldown:18s)'
  ],
  passive: [
    'Increase  all-damage against stun status enemy by 40.0%'
  ]
}, 
{
  name: 'Dimension Sonata',
  file: 'dimension-sonata.png',
  stars: [4, 5],
  atk: 271,
  crt: 38,
  recommend: [sr],
  active: [
    'Summon cross and deploy field, last for 10 second',
    'Shoot laser inside cross field, each laser deal 250% fire elemental damage based on attack power.',
    'Increase elemental damage dealt for all squad member inside cross field by 15%',
    '(SP Cost: 8 – Cooldown:20s)'
  ],
  passive: [
    'Increase user all damage dealt by 40% during Burst mode'
  ]
},
/*{
  name: 'Ranger Cross',
  file: 'ranger-cross.png',
  stars: [4, 5],
  atk: 240,
  crt: 20,
  recommend: [sr],
  active: [
    'Summon cross and deploy field, last for 8 second',
    'Shot a fire ring at one random enemy every 0.75 second, deal (5×233) fire elemental damage and burn that enemy.', 
    'The burn enemy receives 80 fire elemental damage every 0.5 second, last for 3 seconds',
    '(SP Cost: 15 – Cooldown:15s)'
  ],
  passive: [
    'Deal extra 160 fire elemetal damage when hitting a burn enemy',
    'Increase ice resistance by 20% for all Valkyrja equipping Ranger series weapon in squad Increase this cross fire elemental damage by 40% if squad has other Valkyrja using Ranger series weapon'
  ]
},*///later after find the good image of this weapon
//4star
{
  name: 'Lightning Angel',
  file: 'lightning-angel.png',
  stars: [3, 4],
  atk: 168,
  crt: 31,
  recommend: [vp],
  active: [
    'Summon cross and deploy: for 6 seconds, per each 1.5 seconds deal 834 lightning elemental damage in cross field, inflict 0.7 second paralysis status',
    '(SP Cost: 15 – Cooldown: 15s)'
  ],
  passive: []
}, {
  name: 'Fire Angel',
  file: 'fire-angel.png',
  stars: [3, 4],
  atk: 185,
  crt: 10,
  recommend: [sr],
  active: [
    'Summon cross and deploy: for 7 seconds, per each 0.8 second fire a wave of flame toward one random enemy in cross field, deal 675 fire elemental damage, inflict burn status, dealing 160 fire elemental damage per each 0.5 second, last for 3 seconds',
    '(SP Cost: 20 – Cooldown: 15s)'
  ],
  passive: []
}, {
  name: 'The Dark Crusher',
  file: 'the-dark-crusher.png',
  stars: [3, 4],
  atk: 182,
  crt: 12,
  recommend: [ve],
  active: [
    'Summon cross and deploy: for 6 seconds, per each 1.5 seconds deal 1077 fire elemental damage in cross field',
    '(SP Cost: 18 – Cooldown: 12s)'
  ],
  passive: []
}, {
  name: 'Ai-Chan\'s Candy',
  file: 'ai-chan-candy.png',
  stars: [3, 4],
  atk: 178,
  crt: 17,
  recommend: [sr],
  active: [
    'Summon cross and deploy: for 8 seconds, per each 0.8 second drop candy to one random enemy in cross field, deal small AOE 662 physical damage',
    '(SP Cost: 15 – Cooldown: 15s)'
  ],
  passive: []
}, {
  name: 'Proto Cross',
  file: 'proto-cross.png',
  stars: [1, 4],
  atk: 163,
  crt: 22,
  recommend: [ve],
  active: [
    'Summon cross and deploy: for 7 seconds, enhance all allies physical damage basic attack in cross field(branch attack and charge attack included) by 28.4%',
    '(SP Cost: 17 – Cooldown: 12s)'
  ],
  passive: []
}, {
  name: 'Cross Ice Bullets',
  file: 'cross-ice-bullets.png',
  stars: [2, 3],
  atk: 121,
  crt: 14,
  recommend: [],
  active: [
    'Summon cross and deploy: for 8 seconds, per each 1.0 second fire an ice shell at one random enemy inside cross field, shell explode deal small AOE 514 ice elemental damage and slow target attack speed by 50%, last for 0.8 second',
    '(SP Cost: 14 – Cooldown: 13s)'
  ],
  passive: []
}, {
  name: 'Penetrating Bullets Launcher',
  file: 'penetrating-bullets-launcher.png',
  stars: [2, 3],
  atk: 148,
  crt: 2,
  recommend: [],
  active: [
    'Summon cross and deploy: for 8 seconds, per each 0/9 second fire a bomb shell at one random enemy inside cross field, shell explode deal small AOE 740 physical damage',
    '(SP Cost: 15 – Cooldown: 13s)'
  ],
  passive: []
}, {
  name: 'Flame Bullets Launcher',
  file: 'flame-shell-launcher.png',
  stars: [2, 3],
  atk: 102,
  crt: 55,
  recommend: [],
  active: [
    'Summon cross and deploy: for 8 seconds, per each 0.6 second fire a flaming shell at one random enemy inside cross field, shell explode deal small AOE 476 fire elemental damage',
    '(SP Cost: 15 – Cooldown: 13s)'
  ],
  passive: []
}, {
  name: 'Fire Oath',
  file: 'fire-oath.png',
  stars: [2, 3],
  atk: 123,
  crt: 10,
  recommend: [],
  active: [
    'Summon cross and deploy: for 8 seconds, inflict burn status to enemy inside cross field, deal 445 fire elemental damage per each 0.5 second',
    '(SP Cost: 20 – Cooldown: 12s)'
  ],
  passive: []
}, {
  name: 'Ice Oath',
  file: 'ice-oath.png',
  stars: [2, 3],
  atk: 116,
  crt: 50,
  recommend: [],
  active: [
    'Summon cross and deploy: for 8 seconds, add 118 ice elemental damage for allies inside cross field',
    '(SP Cost: 18 – Cooldown: 12s)'
  ],
  passive: []
}]

export default crosses