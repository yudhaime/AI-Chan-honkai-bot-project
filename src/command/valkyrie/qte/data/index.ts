import {wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch, va, sk, p, lk} from '../../../../utility/abbreviation'

export default [{
  condition: 'Float',
  emoji: 'float',
  description: 'Condition when enemies lifted in the air',
  triggeree: {
    qte: [wc, km, ci, le, ss, bn, miko]
  },
  triggerer: {
    weapon: ['Artemis\' Guardian', 'Blaze Destroyer', 'Jizo Mitama', 'Star Destroyer 19c', 'Vanguard'],
    stigma: ['Einstein: Band (M)'],
    valkyrie: [wc, dp, ci, sd, miko, db, sf, ve]
  }
}, {
  condition: 'Stun',
  emoji: 'stun',
  description: 'Condition when enemies got dazed and can\'t move',
  triggeree: {
    qte: [sd, vc, br]
  },
  triggerer: {
    weapon: ['7th Sacred Relic', 'Ai-Chan\'s Hammer', 'Betrayer\'s Greatsword', 'Briareus PRI', 'Colt Peacemaker', 'Energy Leaper', 'Gluttony Scimitar', 'Lurker\' Cannon', 'Sakura Blossom'],
    stigma: ['Isaac Newton (B)', 'Yae Sakura (T)', 'Zhangheng (2 Set)'],
    valkyrie: [wc, vr, km, memento, vt, br, ve]
  }
}, {
  condition: 'Freeze',
  emoji: 'freeze',
  description: 'Condition when enemies turned into ice and can\'t move',
  triggeree: {
    qte: [vr, vt, ir, vp, sk]
  },
  triggerer: {
    weapon: ['Chiyou Cannon', 'Nitro Crystal', 'Xuanyuan Sword'],
    stigma: ['Kiana: Winter Princess (T)', 'Nagamitsu (3 Set)', 'Nohime (T)'],
    valkyrie: [ss, memento]
  }
}, {
  condition: 'Paralyze',
  emoji: 'paralyze',
  description: 'Condition when enemies got shocked by electrical attack (mostly lightning elemental damage)',
  triggeree: {
    qte: [dp, db, bs, sr, fs, lk]
  },
  triggerer: {
    weapon: ['Briareus PRI', 'Cathode Type-09', 'Core Evoker Delta', 'Ion Resonance', 'Lightning Angel', 'Xuanyuan Sword'],
    stigma: ['Isaac Newton (2 Set)', 'Kepler (M)', 'Rinaldo (M)', 'Tesla Band (2 Set)'],
    valkyrie: [km, le, memento, sf]
  }
}, {
  condition: 'Time Slow',
  emoji: 'time',
  description: 'Condition when enemies trapped into time distortion effect (Time Fracture, Time Slow,  or Time Lock)',
  triggeree: {
    qte: [vb, ya, wd, bn, sf, ve, ch]
  },
  triggerer: {
    weapon: ['Artemis\' Guardian', 'Dark Xuanyuan Sword', 'Shennong Guardian', 'Void Blade'],
    stigma: [],
    valkyrie: [wc, dp, km, ci, vb, vc, ya, wd, bs, vt, vp, ve]
  }
}, {
  condition: 'Shield Break',
  emoji: 'shieldbreak',
  description: 'Condition when enemies\' shield got break or shield bar got depleted',
  triggeree: {
    qte: [memento, va]
  },
  triggerer: {
    weapon: [],
    stigma: [],
    valkyrie: [wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch]
  }
}, {
  condition: 'Ignite', //it's also can be burn too
  emoji: 'ignite',
  description: 'Condition when enemies\' on fire and HP decreased for specisif amount of time by fire elemental damage',
  triggeree: {
    qte: [p] //will be for Phoenix Fuka/Fuhua on the next update
  },
  triggerer: {
    weapon: ['Blaze Destroyer', 'Dominator Pistol', 'Fafnir Flame', 'Fire Spirit Type-I', 'Fire Spirit Type-II', 'Phoenix Pistols', 'Jingwei Wing', 'Judgement of Shamash', 'Nuwa\'s Sword', 'Thermal Cutter','Godfather Greatsword', 'Sunfire Greatsword', 'Xuanyuan Sword', 'Star Destroyer 19c', 'Devourer Laser', 'Markov Type A', 'Xuanyuan Cannon', 'Book of Fuxi', 'Fire Angel', 'Fire Oath'],
    stigma: ['Yodo Dono (3 Set)', 'Himeko: Noel (M)', 'Isaac Newton (2 Set)', ],
    valkyrie: [br]
  }
}]