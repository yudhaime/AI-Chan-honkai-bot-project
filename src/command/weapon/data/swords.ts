import {Weapon} from '../'
import {wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch} from '../../../utility/abbreviation'

const swords:Weapon[] = [{
  name: '3rd Sacred Relic',
  file: '3rd-sacred-relic.png',
  stars: [4, 5],
  atk: 254,
  crt: 59,
  recommend: [vb, miko, fs],
  active: [],
  passive: [
    'Combo at 20/50/100, damage increase by 20%/30%/40%',
    'During Burst Mode, Physical Damage +30%'
  ]
}, {
  name: 'Raikiri',
  file: 'raikiri.png',
  stars: [4, 5],
  atk: 264,
  crt: 45,
  recommend: [sd],
  active: [
    'Grant the protection of the spirit sword to all ally members (including alter ego) and increase defense strength 50%, deal 318 lightning damage every 0.25 seconds to the enemies touched, duration 5.99 seconds',
    '(SP Cost: 18 – Cooldown: 25s)'
  ],
  passive: [
    '40% chance to reduce damage taken by 597'
  ]
}, {
  name: 'MagStorm',
  file: 'zan-jikiarashi.png',
  stars: [4, 5],
  atk: 298,
  crt: 6,
  recommend: [le],
  active: [
    'Slash twice dealing 1911 lightning damage every time, bringing to paralysis for 2.5 seconds',
    '(SP Cost: 20 – Cooldown: 15s)'
  ],
  passive: [
    'Increase lightning damage 40%'
  ]
}, {
  name: 'Plasma Kagehide',
  file: 'plasma-kagegatana.png',
  stars: [4, 5],
  atk: 269,
  crt: 18,
  recommend: [le],
  active: [
    'Release a wave of cold air, freeze enemy upon touched for 0.9 seconds, dealing 876.0588 ice elemental damge, wave last for 4.99 seconds',
    '(SP Cost: 20 – Cooldown: 25s)'
  ],
  passive: [
    'Add 23 ice elemental damage for each attack'
  ]
}, {
  name: 'Vorpal Sword Type-11',
  file: 'reversal-force-uchigatana-type-11-.png',
  stars: [4, 5],
  atk: 282,
  crt: 26,
  recommend: [ci],
  active: [
    'Creates a red black hole, deal physical damage equal to 80% attack power to the enemies within the range, inflict bleed deals 298 damage per every 0.5 seconds for 4.59 seconds. When the black hole explode deal physical damage equal to 20% damage of attack power',
    '(SP Cost: 20 – Cooldown: 20s).'
  ],
  passive: [
    'Increase 20% physical damage to enemies in time-slow'
  ]
}, {
  name: 'Void Blade',
  file: 'blade-of-nihility.png',
  stars: [4, 5],
  atk: 272,
  crt: 38,
  recommend: [ci, miko, fs],
  active: [
    'Create a slowed space time sphere around self, last for 6 seconds. Within the slowed space time of the active skill, increase critical rate of normal attack by 29.9%',
    '(SP Cost: 15 – Cooldown: 20s)'
  ],
  passive: [
    'Increase Physical damage by 15 / 30 / 45 % for 8 seconds every time 10/40/70 SP is used (count only once upon immediately used, doesn’t count multiple times, for example 10 + 30 = 40) , effect cannot be stacked'
  ]
}, {
  name: 'Nuwa\'s Sword',
  file: 'nuwa-blade.png',
  stars: [4, 5],
  atk: 272,
  crt: 38,
  recommend: [ci],
  active: [
    'Summon 1 flaming soul that shoot fire at target enemy, one soul last for 10 seconds, have 2 charges. Each flaming soul’s attack deal 955 small AOE fire elemental damage',
    '(SP Cost: 15 – Cooldown: 12s)'
  ],
  passive: [
    'When attacking, 5% to create a flaming sword, inflict burn status to enemies, dealing 187 fire elemental damage per every 0.5 second, last for 3 seconds'
  ]
}, {
  name: 'Sky Breaker',
  file: 'heavely-blade.png',
  stars: [4, 5],
  atk: 289,
  crt: 17,
  recommend: [ci, miko],
  active: [
    'Perform a series of multiple strikes, in total deals 400% damage to the surrounding enemies, inflict weaken status to the enemy that receive the last blow, decreasing defense power by 100%, for 5.99 seconds',
    '(SP Cost: 20 – Cooldown: 18s)'
  ],
  passive: [
    'When attacked, strike lightning at attacking enemy, dealing 150% electric elemetal damage, paralyze for 1 second, cooldown 10 seconds'
  ]
}, {
  name: 'High Frequency Cutter',
  file: 'high-frequency-blade.png',
  stars: [4, 5],
  atk: 272,
  crt: 38,
  recommend: [vb],
  active: [
    'Teleport to target enemy and inflict a small AOE bind, last for 4 seconds, reduce bound enemies’ defense power by 80%, dealing 233 electric elemental damage per every 0.5 second',
    '(SP Cost: 14 – Cooldown: 11s)'
  ],
  passive: [
    'When performing a critical, 50.0% chance to inflict knock up and lock time-space to enemy, last for 3 seconds,  6.02 seconds cooldown'
  ]
}, {
  name: 'Ice Epiphyllum',
  file: 'hyouketsu-donten-mozou-reigatana.png',
  stars: [4, 5],
  atk: 265,
  crt: 46,
  recommend: [memento],
  active: [
    'Create a 3.5m freezing AOE under wielder, last for 10.0 seconds, increase friendly unit’s ice elemental damage by 39.8%, enemies inside the area will be exploded with frostbite after 6 seconds, receive 975 ice elemetal damage',
    '(SP Cost: 20 – Cooldown: 18s)'
  ],
  passive: [
    ' Increase elemental damage by 14.9%. Every 5 seconds, the next attack will deal 1260 ice elemental damage within 5m radius. When equipped on Goushinso Memento, performing a critical attack will gain 200KP'
  ]
}, {
  name: 'Sakura Blossom',
  file: 'sakura-fubuki.png',
  stars: [4, 5],
  atk: 289,
  crt: 29,
  recommend: [miko],
  active: [
    'Slash forward, dealing physical damage 400% based on attack power. Additionally inflict stun status against enemy with Sakura mark, last for 3.5 seconds.', 
    'When equipped on Sakura – Gyakushin Miko, perform skill will increase 1 Sakura Counter to enemy.',
    '(SP Cost: 15 – Cooldown: 12s)'
  ],
  passive: [
    'On hit have 100% chance to unleashing blade wave, deal physcial damage 200% based on attack power, has 4.8 seconds cooldown.', 
    'When equipped on Sakura – Gyakushin Miko, blade wave attack increase 1 Sakura Counter to target enemy.',
    'When Sakura sheathe blade and hit enemies, Blade Wave cooldown will immediately reset', 
    'Enemies already inflicted with Sakura Mark receive additional 1920 physical damage'
  ]
}, {
  name: 'Gluttony Scimitar',
  file: 'blade-of-gluttony.png',
  stars: [4, 5],
  atk: 239,
  crt: 22,
  recommend: [sd],
  active: [
    'Release a whirlwind that interupt the enemies and pull them forward wielder, inflict stun for 1.50 seconds, dealing 448 physical damage',
    '(SP Cost: 18 – Cooldown: 15s)'
  ],
  passive: [
    'Gain 4 SP upon 1 enemy take down'
  ]
}, {
  name: 'Wind Wielder',
  file: 'gale-tachi.png',
  stars: [4, 5],
  atk: 224,
  crt: 39,
  recommend: [sd],
  active: [
    'Create a tornado, inflict knock-up to enemies upon touched, dealing 224 ice elemetal damage, reduce 80% attack speed and movement speed, tornado last for 1.80 seconds',
    '(SP Cost: 20 – Cooldown: 25s)'
  ],
  passive: [
    'On hit,  5.0% chance to increase movement speed by 100% for 4.5 seconds, 10 seconds cooldown'
  ]
}, {
  name: 'Sheathed Blade',
  file: 'kouzou.png',
  stars: [4, 5],
  atk: 287,
  crt: 27,
  recommend: [le, sd],
  active: [],
  passive: [
    'Upon performing a successful evasive move, charge electricity. First enemy on-hit remove electric charge, deal AOE 3982 physical damage and AOE 3982 lightning elemental damage. After charging electricity, cannot charge again after 1.5 second.',
    'On hit,  8.0% chance to inflict AOE paralysis status, last for 3 seconds, cooldown 6 seconds'
  ]
}, {
  name: 'Fairy Sword Silven',
  file: 'fairy-sword-sylvan.png',
  stars: [4, 5],
  atk: 275,
  crt: 36,
  recommend: [ci, vb, fs],
  active: [
    'Create a field that grant squad member attack speed by 45%, movement speed by 20%, attack all-damage by 10%. Field last for 19 seconds',
    '(SP Cost: 17 – Cooldown: 38s)'
  ],
  passive: [
    'For each 10% extra movement speed, increase attack all-damage by 5%, stack up to 50%.  Increase movement speed by 20%'
  ]
}, {
  name: 'Pledge of Rain',
  file: 'promise-after-rain.png',
  stars: [4, 5],
  atk: 287,
  crt: 29,
  recommend: [vb],
  active: [
    'Summon an umbrella that shoot out crystal in a circular field, dealing physical damage based on 24* 30% attack power, reduce enemy caught in crystal field attack speed and movement speed by 40%, last for 5 seconds',
    '(SP Cost: 16 – Cooldown: 18s)'
  ],
  passive: [
    'Increase 20% physical damage against slowed enemy.',
    'Increase 20% all-damage when combo reaches 50.'
  ]
}, {
  name: 'Jizo Mitama',
  file: 'jizou-spirit.png',
  stars: [4, 5],
  atk: 289,
  crt: 24,
  recommend: [],
  active: [
    'Summon Jizou Spirit, last for 39 seconds. When enter the battlefield, Jizou deal physical damage 300% based on attack power to enemy and its surrounding, inflict float status. Jizou’s pattern attack:',
    ' - Chop down: Deal physical damage 100% based on attack power',
    ' - Tackle attack: Deal physical damage 200% based on attack power, inflict knock-back',
    ' - Wide slash: Deal physical damage 100% based on attack power, inflict float'
  ],
  passive: [
    'Increase all-damage against float status enemy by 32%',
    '**Weapon Buff – Divine’s Key:**',
    'When weapon’s level increase, the weapon will give buff to users. This skill is activated automatically and cannot be turn on or off. Has a time limit.',
    'Lv 30: Increase all Katana-users defense power by 30',
    'Lv 35: Increase all Katana-users defense power by 40',
    'Lv 40: Increase all Katana-users attack power by 15',
    'Lv 45: Increase all Katana-users HP by 120',
    'Lv 50: Increase all Katana-users attack power by 25'
  ]
}, {
  name: 'Candy Sword',
  file: 'candy-sword.png',
  stars: [4, 5],
  atk: 221,
  crt: 24,
  recommend: [],
  active: [],
  passive: [
    'On hit critical drop 3 ginger man. Each deal 149.7% physical damage based on attack power. Cooldown 8s.',
    'When combo reaches 10, increase elemental damage by 15%'
  ]
}, {
  name: 'Demon Blade - Florid Sakura',
  file: 'demon-katana-red-dyed-cherry-blossoms.png',
  stars: [4, 5],
  atk: 287,
  crt: 31,
  recommend: [fs],
  active: [
    'Spinning dealing multiple instance, total fire elemental based on 500% attack power. If taken damage during skill activation, deal another 200% fire elemental damage to attacker. Invulnerable during performing skill, grant a shield that can negate 1 instance source of damage after skill animation. Shield last for 5 seconds.',
    '(SP Cost: 20 – Cooldown: 21)',
    'When equiped on Sakura – Flame Sakitama, enemy got hit by the skill get a debuff, take additional 25% fire elemental damage, 15% lightning and ice elemental damage. Debuff last for 15 seconds. True Blaze additional branch skill does not benefit from this debuff'
  ],
  passive: [
    'Increase fire elemental damage by Valkyrie by 40%'
  ]
}, {
  name: 'Lightning Soul',
  file: 'lightning-soul-miaodao.png',
  stars: [3, 4],
  atk: 163,
  crt: 38,
  recommend: [vb, miko],
  active: [],
  passive: [
    'Add 42 lightning damage into each attack'
  ]
}, {
  name: 'Hell Thunder',
  file: 'thunder-demon-miaodao.png',
  stars: [3, 4],
  atk: 169,
  crt: 29,
  recommend: [ci],
  active: [
    'Summon a whirlwind, deal physical attack 300% based on attack power, reduce hit enemy defense power by 60%, last for 2.99 seconds',
    '(SP Cost: 12 – Cooldown:12s)'
  ],
  passive: []
}, {
  name: 'Pulse Katana Type-17',
  file: 'pulse-tachi-type-17.png',
  stars: [3, 4],
  atk: 188,
  crt: 3,
  recommend: [le],
  active: [
    'Summon 6 phantom blades, each deal 483 ice elemental damage, on hit reduce attack speed and movement speed by 70% last for 2.5 seconds',
    '(SP Cost: 14 – Cooldown: 12s)'
  ],
  passive: []
}, {
  name: 'Pulse Katana Type-19',
  file: 'pulse-tachi-type-19.png',
  stars: [3, 4],
  atk: 182,
  crt: 12,
  recommend: [vb],
  active: [],
  passive: [
    'Reduce Skill SP Activation Cost by 22% '
  ]
}, {
  name: 'Crystal Edge',
  file: 'reverse-crystal-blade-katana.png',
  stars: [3, 4],
  atk: 169,
  crt: 29,
  recommend: [le],
  active: [
    'Slash using crystal energy, inflict AOE freeze status to enemy, last for 3.99 seconds',
    '(SP Cost: 10 – Cooldown: 18 seconds)'
  ],
  passive: []
}, {
  name: 'Thermal Cutter',
  file: 'heat-cutting-blade.png',
  stars: [3, 4],
  atk: 178,
  crt: 17,
  recommend: [fs],
  active: [
    'Slash using heat energy, dealing physical damage 270% based on attack power while inflict burn status to enemy, deal 372 fire elemental damage per each 0.5 second, last for 4 seconds',
    '(SP Cost: 14- Cooldown: 10s)'
  ],
  passive: []
}, {
  name: 'Vermillion Edge',
  file: 'crimson-cherry-blossoms.png',
  stars: [3, 4],
  atk: 163,
  crt: 19,
  recommend: [ci],
  active: [
    'Slash 7-strike slash to enemy and its surrounding, each strike deal physical damage 50% based on attack power, apply bind status to enemy at center',
    '(SP Cost: 18 – Cooldown: 10s)'
  ],
  passive: []
}, {
  name: 'Thunderstorms',
  file: 'thunder-roar.png',
  stars: [3, 4],
  atk: 180,
  crt: 13,
  recommend: [sd],
  active: [
    'Slash using electricity, deal small AOE 744 lightning damage, inflict paralysis status, last for 2 seconds',
    '(SP Cost: 10 – Cooldown: 15s)'
  ],
  passive: []
}, {
  name: 'Xuanyuan Katana',
  file: 'xuanyuan-pulse-tachi.png',
  stars: [3, 4],
  atk: 165,
  crt: 16,
  recommend: [le],
  active: [
    'Slash using ice energy, form a force field in front that when explode dealing 1017 ice elemental damage. Force field reduce enemy movement speed by 60%, last for 5 seconds',
    '(SP Cost: 14 – Cooldown: 18s)'
  ],
  passive: []
}, {
  name: 'Alloy Gluttony Scimitar',
  file: 'alloyed-gluttony-setto.png',
  stars: [3, 4],
  atk: 166,
  crt: 14,
  recommend: [sd],
  active: [
    'Summon a whirlwind that pull enemy towards wielder, dealing 317 physical damage each hit',
    '(SP Cost: 10 – Cooldown: 15)'
  ],
  passive: []
}, {
  name: 'Alloy Wind Wielder',
  file: 'alloyed-gale-tachi.png',
  stars: [3, 4],
  atk: 157,
  crt: 26,
  recommend: [sd],
  active: [
    'Summon a tornado, each hit deal 178 ice elemental damage',
    '(SP Cost: 14 – Cooldown: 15 seconds)'
  ],
  passive: []
}, {
  name: 'Phoenix Sword',
  file: 'phoenix-blade.png',
  stars: [3, 4],
  atk: 158,
  crt: 25,
  recommend: [fs],
  active: [],
  passive: [
    'On hit add 36 fire elemental damage into each attack. When Kiana in squad, increase enemy burn status fire elemental damage by 18%'
  ]
}, {
  name: 'Proto Sword',
  file: 'pulse-tachi-prototype',
  stars: [1, 4],
  atk: 146,
  crt: 29,
  recommend: [],
  active: [],
  passive: [
    'Enhance weapon, increase basic attack physical damage (branch attack and charge attack included) by 32%, last for 5 seconds',
    '(SP Cost: 8 – Cooldown: 15s)'
  ]
}, {
  name: 'Endergonic Tachi',
  file: 'endotherm-tachi.png',
  stars: [3, 4],
  atk: 175,
  crt: 15,
  recommend: [ci],
  active: [],
  passive: [
    'When current SP is below 20%, increase physical damage by 17%. When current SP is above 80%, add 71 fire elemental into each attack'
  ]
}, {
  name: 'Willow',
  file: 'willow.png',
  stars: [2, 3],
  atk: 128,
  crt: 2,
  recommend: [],
  active: [
    'Perform a slash in a wide angle, deal physical damage 249% based on attack power',
    '(SP Cost: 9 – Cooldown: 7s)'
  ],
  passive: []
}, {
  name: 'Rosefinch',
  file: 'rosefinch.png',
  stars: [2, 3],
  atk: 114,
  crt: 25,
  recommend: [],
  active: [
    'Summon a wave of flame, deal physical damage 100% based on attack power + 284 fire elemental damage to enemy',
    '(SP Cost 10 – Cooldown 7)'
  ],
  passive: []
}, {
  name: 'Muramasa Bloodlust',
  file: 'demon-katana-muramasa.png',
  stars: [2, 3],
  atk: 128,
  crt: 2,
  recommend: [],
  active: [
    'Attack using spirit sword, deal physical damage 50% based on attack power, while also inflict bleed, deal 61 physical damage per each 0.5 second, last for 3 second. Skill have 3 charges',
    '(SP Cost: 3 – Cooldown: 4s)'
  ],
  passive: []
}, {
  name: 'Amemura Bloodlust',
  file: 'demon-katana-uson.png',
  stars: [2, 3],
  atk: 94,
  crt: 59,
  recommend: [],
  active: [],
  passive: []
}, {
  name: 'Horikawa Kunihiro',
  file: 'horikawa-kunihiro.png',
  stars: [2, 3],
  atk: 121,
  crt: 14,
  recommend: [],
  active: [],
  passive: []
}, {
  name: 'Seishuu Muramasa',
  file: 'seishuu-muramasa.png',
  stars: [1, 2],
  atk: 76,
  crt: 8,
  recommend: [],
  active: [],
  passive: []
}
]

export default swords