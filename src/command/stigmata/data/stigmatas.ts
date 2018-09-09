import {Stigmata} from '../'
import {wc, dp, vr, km, ir, ci, sd, vb, le, miko, memento, fs, vc, ya, ss, db, wd, bn, bs, vt, sf, br, vp, sr, ve, ch, va, sk} from '../../../utility/abbreviation'

const stigmatas:Stigmata[] = [{
  name: 'Selena',
  stars: [1, 2],
  variations: [{
    name: 'Selena (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[1, 2], [0, 1]],
      lvl: 5,
      hp: 85,
      atk: 14,
      def: '?',
      crt: '?',
      load: 2
    }, {
      rarity: [[1, 2], [1, 1]],
      lvl: 10,
      hp: 118,
      atk: 19,
      def: 1,
      crt: '?',
      load: 3
    }, {
      rarity: [[2, 2]],
      lvl: 15,
      hp: 156,
      atk: 25,
      def: 3,
      crt: '?',
      load: 4
    }],
    file: 'sellena-t.png',
    skills: []
  }, {
    name: 'Selena (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[1, 2], [0, 1]],
      lvl: 5,
      hp: 85,
      atk: '?',
      def: '?',
      crt: '?',
      load: 2
    }, {
      rarity: [[1, 2], [1, 1]],
      lvl: 10,
      hp: 118,
      atk: '?',
      def: 1,
      crt: 1,
      load: 3
    }, {
      rarity: [[2, 2]],
      lvl: 15,
      hp: 156,
      atk: '?',
      def: 3,
      crt: 1,
      load: 4
    }],
    file: 'sellena-m.png',
    skills: []
  }, {
    name: 'Selena (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[1, 2], [0, 1]],
      lvl: 5,
      hp: 85,
      atk: 7,
      def: '?',
      crt: '?',
      load: 2
    }, {
      rarity: [[1, 2], [1, 1]],
      lvl: 10,
      hp: 118,
      atk: 9,
      def: 1,
      crt: 1,
      load: 3
    }, {
      rarity: [[2, 2]],
      lvl: 15,
      hp: 156,
      atk: 12,
      def: 3,
      crt: 1,
      load: 4
    }],
    file: 'sellena-b.png',
    skills: []
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase melee physical damage by 10%'
    ]
  }, {
    set: 3,
    skills: [
      'Increase maximum HP by 8% while in combat'
    ]
  }]
}, {
  name: 'Charlotte',
  stars: [1, 2],
  variations: [{
    name: 'Charlotte (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[1, 2], [0, 1]],
      lvl: 5,
      hp: 82,
      atk: 13,
      def: 17,
      crt: '?',
      load: 2
    }, {
      rarity: [[1, 2], [1, 1]],
      lvl: 10,
      hp: 113,
      atk: 19,
      def: 23,
      crt: '?',
      load: 3
    }, {
      rarity: [[2, 2]],
      lvl: 15,
      hp: 149,
      atk: 25,
      def: 30,
      crt: '?',
      load: 4
    }],
    file: 'charlotte-t.png',
    skills: []
  }, {
    name: 'Charlotte (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[1, 2], [0, 1]],
      lvl: 5,
      hp: 82,
      atk: '?',
      def: 17,
      crt: '?',
      load: 2
    }, {
      rarity: [[1, 2], [1, 1]],
      lvl: 10,
      hp: 113,
      atk: '?',
      def: 23,
      crt: 1,
      load: 3
    }, {
      rarity: [[2, 2]],
      lvl: 15,
      hp: 149,
      atk: '?',
      def: 30,
      crt: 1,
      load: 4
    }],
    file: 'charlotte-m.png',
    skills: []
  }, {
    name: 'Charlotte (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[1, 2], [0, 1]],
      lvl: 5,
      hp: 82,
      atk: 6,
      def: 17,
      crt: '?',
      load: 2
    }, {
      rarity: [[1, 2], [1, 1]],
      lvl: 10,
      hp: 113,
      atk: 9,
      def: 23,
      crt: 1,
      load: 3
    }, {
      rarity: [[2, 2]],
      lvl: 15,
      hp: 149,
      atk: 12,
      def: 30,
      crt: 1,
      load: 4
    }],
    file: 'charlotte-b.png',
    skills: []
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase physical damage by 8%'
    ]
  }, {
    set: 3,
    skills: [
      'Increase defense by 20% while in combat'
    ]
  }]
}, {
  name: 'Hannah',
  stars: [2, 3],
  variations: [{
    name: 'Hannah (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[2, 3], [0, 1]],
      lvl: 15,
      hp: 157,
      atk: 25,
      def: '?',
      crt: '?',
      load: 3
    }, {
      rarity: [[2, 3], [1, 1]],
      lvl: 20,
      hp: 200,
      atk: 32,
      def: 2,
      crt: '?',
      load: 4
    }, {
      rarity: [[3, 3]],
      lvl: 25,
      hp: 248,
      atk: 40,
      def: 5,
      crt: '?',
      load: 5
    }],
    file: 'hannah-t.png',
    skills: [
      'Increase tag-in attack physical damage by 7 / 8 / 10 % (QTE included)'
    ]
  }, {
    name: 'Hannah (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[2, 3], [0, 1]],
      lvl: 15,
      hp: 157,
      atk: '?',
      def: '?',
      crt: 2,
      load: 3
    }, {
      rarity: [[2, 3], [1, 1]],
      lvl: 20,
      hp: 200,
      atk: '?',
      def: '?',
      crt: 3,
      load: 4
    }, {
      rarity: [[3, 3]],
      lvl: 25,
      hp: 248,
      atk: '?',
      def: '?',
      crt: 4,
      load: 5
    }],
    file: 'hannah-m.png',
    skills: [
      'Increase tag-in attack physical damage by 7 / 8 / 10 % (QTE included)'
    ]
  }, {
    name: 'Hannah (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[2, 3], [0, 1]],
      lvl: 15,
      hp: 157,
      atk: 12,
      def: '?',
      crt: '?',
      load: 3
    }, {
      rarity: [[2, 3], [1, 1]],
      lvl: 20,
      hp: 200,
      atk: 16,
      def: 2,
      crt: 1,
      load: 4
    }, {
      rarity: [[3, 3]],
      lvl: 25,
      hp: 248,
      atk: 20,
      def: 5,
      crt: 1,
      load: 5
    }],
    file: 'hannah-b.png',
    skills: [
      'Increase tag-in attack physical damage by 7 / 8 / 10 % (QTE included)'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase melee physical damage by 15%',
      'When equipped on Kiana, increase maximum HP by 5% while in combat'
    ]
  }, {
    set: 3,
    skills: [
      'Increase moving speed by 15%'
    ]
  }]
}, {
  name: 'Viola',
  stars: [2, 3],
  variations: [{
    name: 'Viola (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[2, 3], [0, 1]],
      lvl: 15,
      hp: 155,
      atk: 25,
      def: 8,
      crt: '?',
      load: 3
    }, {
      rarity: [[2, 3], [1, 1]],
      lvl: 20,
      hp: 197,
      atk: 32,
      def: 12,
      crt: '?',
      load: 4
    }, {
      rarity: [[3, 3]],
      lvl: 25,
      hp: 245,
      atk: 39,
      def: 16,
      crt: '?',
      load: 5
    }],
    file: 'viola-t.png',
    skills: [
      'Increase maximum HP by 6 / ? / 9 % while in combat'
    ]
  }, {
    name: 'Viola (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[2, 3], [0, 1]],
      lvl: 15,
      hp: 155,
      atk: '?',
      def: 8,
      crt: '?',
      load: 3
    }, {
      rarity: [[2, 3], [1, 1]],
      lvl: 20,
      hp: 197,
      atk: '?',
      def: 12,
      crt: '?',
      load: 4
    }, {
      rarity: [[3, 3]],
      lvl: 25,
      hp: 245,
      atk: '?',
      def: 16,
      crt: '?',
      load: 5
    }],
    file: 'viola-m.png',
    skills: [
      'Increase maximum HP by 6 / ? / 9 % while in combat'
    ]
  }, {
    name: 'Viola (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[2, 3], [0, 1]],
      lvl: 15,
      hp: 155,
      atk: 12,
      def: 8,
      crt: '?',
      load: 3
    }, {
      rarity: [[2, 3], [1, 1]],
      lvl: 20,
      hp: 197,
      atk: 16,
      def: 12,
      crt: '?',
      load: 4
    }, {
      rarity: [[3, 3]],
      lvl: 25,
      hp: 245,
      atk: 19,
      def: 16,
      crt: '?',
      load: 5
    }],
    file: 'viola-b.png',
    skills: [
      'Increase maximum HP by 6 / ? / 9 % while in combat'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'When HP above 80%, increase physical damage by 15%'
    ]
  }, {
    set: 3,
    skills: [
      'Increase moving speed by 25%'
    ]
  }]
}, {
  name: 'Octavia',
  stars: [2, 3],
  variations: [{
    name: 'Octavia (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[2, 3], [0, 1]],
      lvl: 15,
      hp: 148,
      atk: 25,
      def: 33,
      crt: '?',
      load: 3
    }, {
      rarity: [[2, 3], [1, 1]],
      lvl: 20,
      hp: 189,
      atk: 32,
      def: 41,
      crt: '?',
      load: 4
    }, {
      rarity: [[3, 3]],
      lvl: 25,
      hp: 235,
      atk: 40,
      def: 50,
      crt: '?',
      load: 5
    }],
    file: 'octavia-t.png',
    skills: [
      'Increase branch attack physical damage by 5 / 6 / 7 %'
    ]
  }, {
    name: 'Octavia (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[2, 3], [0, 1]],
      lvl: 15,
      hp: '?',
      atk: '?',
      def: 33,
      crt: 3,
      load: 3
    }, {
      rarity: [[2, 3], [1, 1]],
      lvl: 20,
      hp: '?',
      atk: '?',
      def: 41,
      crt: 4,
      load: 4
    }, {
      rarity: [[3, 3]],
      lvl: 25,
      hp: '?',
      atk: '?',
      def: 50,
      crt: 5,
      load: 5
    }],
    file: 'octavia-m.png',
    skills: [
      'Increase branch attack physical damage by 5 / 6 / 7 %'
    ]
  }, {
    name: 'Octavia (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[2, 3], [0, 1]],
      lvl: 15,
      hp: 148,
      atk: 12,
      def: 33,
      crt: 2,
      load: 3
    }, {
      rarity: [[2, 3], [1, 1]],
      lvl: 20,
      hp: 189,
      atk: 16,
      def: 41,
      crt: 2,
      load: 4
    }, {
      rarity: [[3, 3]],
      lvl: 25,
      hp: 235,
      atk: 20,
      def: 50,
      crt: 3,
      load: 5
    }],
    file: 'octavia-b.png',
    skills: [
      'Increase branch attack physical damage by 5 / 6 / 7 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase critical damage by 23%',
      'When equipped on Mei or Sakura, increase maximum HP by 5% while in combat'
    ]
  }, {
    set: 3,
    skills: [
      'Enlarge loot range by 150%'
    ]
  }]
}, {
  name: 'Victoria',
  stars: [2, 3],
  variations: [{
    name: 'Victoria (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[2, 3], [0, 1]],
      lvl: 15,
      hp: 153,
      atk: 25,
      def: 16,
      crt: '?',
      load: 3
    }, {
      rarity: [[2, 3], [1, 1]],
      lvl: 20,
      hp: 195,
      atk: 32,
      def: 21,
      crt: '?',
      load: 4
    }, {
      rarity: [[3, 3]],
      lvl: 25,
      hp: 242,
      atk: 40,
      def: 27,
      crt: '?',
      load: 5
    }],
    file: 'victoria-t.png',
    skills: [
      'Increase melee physical damage by 3 / 4 / 4 %'
    ]
  }, {
    name: 'Victoria (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[2, 3], [0, 1]],
      lvl: 15,
      hp: 153,
      atk: 12,
      def: 16,
      crt: '?',
      load: 3
    }, {
      rarity: [[2, 3], [1, 1]],
      lvl: 20,
      hp: 195,
      atk: 16,
      def: 21,
      crt: '?',
      load: 4
    }, {
      rarity: [[3, 3]],
      lvl: 25,
      hp: 242,
      atk: 20,
      def: 27,
      crt: '?',
      load: 5
    }],
    file: 'victoria-m.png',
    skills: [
      'Increase melee physical damage by 3 / 4 / 4 %'
    ]
  }, {
    name: 'Victoria (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[2, 3], [0, 1]],
      lvl: 15,
      hp: 153,
      atk: 25,
      def: 16,
      crt: '?',
      load: 3
    }, {
      rarity: [[2, 3], [1, 1]],
      lvl: 20,
      hp: 195,
      atk: 32,
      def: 21,
      crt: '?',
      load: 4
    }, {
      rarity: [[3, 3]],
      lvl: 25,
      hp: 242,
      atk: 40,
      def: 27,
      crt: '?',
      load: 5
    }],
    file: 'victoria-b.png',
    skills: [
      'Increase melee physical damage by 3 / 4 / 4 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      '50% chance on-killed to recover 10 SP',
      'When equipped on Himeko, increase maximum HP by 8% while in combat'
    ]
  }, {
    set: 3,
    skills: [
      'Increase critical rate against creature-type enemies by 10%'
    ]
  }]
}, {
  name: 'Lucia',
  stars: [2, 3],
  variations: [{
    name: 'Lucia (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[2, 3], [0, 1]],
      lvl: 15,
      hp: 150,
      atk: 25,
      def: 25,
      crt: '?',
      load: 3
    }, {
      rarity: [[2, 3], [1, 1]],
      lvl: 20,
      hp: 192,
      atk: 32,
      def: 31,
      crt: '?',
      load: 4
    }, {
      rarity: [[3, 3]],
      lvl: 25,
      hp: 238,
      atk: 40,
      def: 38,
      crt: '?',
      load: 5
    }],
    file: 'lucia-t.png',
    skills: [
      'Increase charge attack physical damage by 3 / 4 / 5 %'
    ]
  }, {
    name: 'Lucia (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[2, 3], [0, 1]],
      lvl: 15,
      hp: 150,
      atk: '?',
      def: 25,
      crt: 1,
      load: 3
    }, {
      rarity: [[2, 3], [1, 1]],
      lvl: 20,
      hp: 192,
      atk: '?',
      def: 31,
      crt: 2,
      load: 4
    }, {
      rarity: [[3, 3]],
      lvl: 25,
      hp: 238,
      atk: '?',
      def: 38,
      crt: 2,
      load: 5
    }],
    file: 'lucia-m.png',
    skills: [
      'Increase charge attack physical damage by 3 / 4 / 5 %'
    ]
  }, {
    name: 'Lucia (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[2, 3], [0, 1]],
      lvl: 15,
      hp: 150,
      atk: 12,
      def: 25,
      crt: '?',
      load: 3
    }, {
      rarity: [[2, 3], [1, 1]],
      lvl: 20,
      hp: 192,
      atk: 16,
      def: 31,
      crt: '?',
      load: 4
    }, {
      rarity: [[3, 3]],
      lvl: 25,
      hp: 238,
      atk: 20,
      def: 38,
      crt: '?',
      load: 5
    }],
    file: 'lucia-b.png',
    skills: [
      'Increase charge attack physical damage by 3 / 4 / 5 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase ranged physical damage by 15%',
      'When equipped on Bronya, increase maximum HP by 5% while in combat'
    ]
  }, {
    set: 3,
    skills: [
      'Increase defense by 15% while in combat'
    ]
  }]
}, {
  name: 'Elizabeth Bathory',
  stars: [3, 4],
  variations: [{
    name: 'Elizabeth Bathory (T)',
    type: 'top',
    recommend: [dp, ci, ya, vt, va],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 242,
      atk: 40,
      def: 27,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 294,
      atk: 49,
      def: 33,
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 351,
      atk: 58,
      def: 40,
      crt: '?',
      load: 8
    }],
    file: 'bathory-t.png',
    skills: [
      'When HP above 80%, increase defense by 19 / 24 / 31 %'
    ]
  }, {
    name: 'Elizabeth Bathory (M)',
    type: 'middle',
    recommend: [dp, ci, miko, vt, sf, va],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 242,
      atk: '?',
      def: 27,
      crt: 4,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 294,
      atk: '?',
      def: 33,
      crt: 5,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 351,
      atk: '?',
      def: 40,
      crt: 6,
      load: 8
    }],
    file: 'bathory-m.png',
    skills: [
      'When HP above 80%, increase physical damage by 13 / 16 / 20 %'
    ]
  }, {
    name: 'Elizabeth Bathory (B)',
    type: 'bottom',
    recommend: [ci, dp, vt, va],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 242,
      atk: 20,
      def: 27,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 294,
      atk: 24,
      def: 33,
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 351,
      atk: 29,
      def: 40,
      crt: '?',
      load: 8
    }],
    file: 'bathory-b.png',
    skills: [
      'When HP above 80%, increase moving speed by 25 / 33 / 41 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase melee physical damage by 20%',
      'When equipped on biological-type Valkyrie, increase maximum SP by 10% while in combat'
    ]
  }, {
    set: 3,
    skills: [
      '10% chance on-hit to recover 3% HP, with 2.0 seconds proc cooldown'
    ]
  }]
}, {
  name: 'Wangzhaojun',
  stars: [3, 4],
  variations: [{
    name: 'Wangzhaojun (T)',
    type: 'top',
    recommend: [vr, ss],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 250,
      atk: 39,
      def: '?',
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 30,
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 363,
      atk: 57,
      def: 6,
      crt: '?',
      load: 8
    }],
    file: 'wangzhaojun-t.png',
    skills: [
      'Increase maximum HP by 15 / ? / 26 % while in combat'
    ]
  }, {
    name: 'Wangzhaojun (M)',
    type: 'middle',
    recommend: [vr, wd],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 250,
      atk: '?',
      def: '?',
      crt: 6,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 363,
      atk: '?',
      def: 6,
      crt: 9,
      load: 8
    }],
    file: 'wangzhaojun-m.png',
    skills: [
      'Increase defense by 11 / ? / 21 % while in combat'
    ]
  }, {
    name: 'Wangzhaojun (B)',
    type: 'bottom',
    recommend: [vr, wd, ss],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 250,
      atk: 19,
      def: '?',
      crt: 4,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 363,
      atk: 28,
      def: 6,
      crt: 6,
      load: 8
    }],
    file: 'wangzhaojun-b.png',
    skills: [
      'Increase maximum SP by 6 / ? / 10 % while in combat'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase ranged physical damage by 20%',
      'When equipped on Psychic-type Valkyrie, increase maximum SP by 10% while in combat'
    ]
  }, {
    set: 3,
    skills: [
      'Reduce SP consumption of skills by 15%'
    ]
  }]
}, {
  name: 'Attila',
  stars: [3, 4],
  variations: [{
    name: 'Attila (T)',
    type: 'top',
    recommend: [vb, ir],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 233,
      atk: 40,
      def: 55,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 338,
      atk: 59,
      def: 75,
      crt: '?',
      load: 8
    }],
    file: 'attila-t.png',
    skills: [
      'When over 10 consecutive hits, increase moving speed by 11 / ? / 15 %'
    ]
  }, {
    name: 'Attila (M)',
    type: 'middle',
    recommend: [vb, ya, ve],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 233,
      atk: '?',
      def: 55,
      crt: 2,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 338,
      atk: '?',
      def: 75,
      crt: 3,
      load: 8
    }],
    file: 'attila-m.png',
    skills: [
      'When over 20 consecutive hits, increase defense by 25 / ? / 41 %'
    ]
  }, {
    name: 'Attila (B)',
    type: 'bottom',
    recommend: [km, miko, vb, ve, db],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 234,
      atk: 20,
      def: 55,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 284,
      atk: 25,
      def: 65,
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 338,
      atk: 29,
      def: 75,
      crt: '?',
      load: 8
    }],
    file: 'attila-b.png',
    skills: [
      'When over 30 consecutive hits, increase physical damage by 19 / ? / 31 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase critical damage by 30%',
      'When equipped on Mecha-type Valkyrie, increase maximum SP by 10% while in combat'
    ]
  }, {
    set: 3,
    skills: [
      'Increase CRI stat by 40% while in combat'
    ]
  }]
}, {
  name: 'Sakamoto Ryouma',
  stars: [3, 4],
  variations: [{
    name: 'Sakamoto Ryouma (T)',
    type: 'top',
    recommend: [vc, db, wd, vt, bs],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 237,
      atk: 40,
      def: 41,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 288,
      atk: 48,
      def: 49,
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 344,
      atk: 58,
      def: 57,
      crt: '?',
      load: 8
    }],
    file: 'ryouma-t.png',
    skills: [
      'Increase charge attack physical damage by 11 / 14 / 18 %',
      '(Bronya’s and Himeko’s charge attack)'
    ]
  }, {
    name: 'Sakamoto Ryouma (M)',
    type: 'middle',
    recommend: [ss, vc, ve, sf],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 237,
      atk: '?',
      def: 41,
      crt: 5,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 288,
      atk: '?',
      def: 49,
      crt: 6,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 344,
      atk: '?',
      def: 57,
      crt: 8,
      load: 8
    }],
    file: 'ryouma-m.png',
    skills: [
      'Increase tag-in attack physical damage by 22 / 31 / 41 %',
      '(QTE included)'
    ]
  }, {
    name: 'Sakamoto Ryouma (B)',
    type: 'bottom',
    recommend: [ci, vb, miko],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 237,
      atk: 20,
      def: 41,
      crt: 3,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 288,
      atk: 24,
      def: 49,
      crt: 4,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 344,
      atk: 29,
      def: 57,
      crt: 4,
      load: 8
    }],
    file: 'ryouma-b.png',
    skills: [
      'Increase branch attack physical damage by 15 / 20 / 26 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase all-damage dealt against shield-intact status elites by 10%'
    ]
  }, {
    set: 3,
    skills: [
      'Shorten the status ailments duration by 35%'
    ]
  }]
}, {
  name: 'Nikola Tesla',
  stars: [3, 4],
  variations: [{
    name: 'Nikola Tesla (T)',
    type: 'top',
    recommend: [km, le],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 246,
      atk: 40,
      def: 13,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 357,
      atk: 58,
      def: 23,
      crt: '?',
      load: 8
    }],
    file: 'tesla-t.png',
    skills: [
      'Increase all-damage dealt against paralysis status enemies by 32 / ? / 51 %'
    ]
  }, {
    name: 'Nikola Tesla (M)',
    type: 'middle',
    recommend: [le, ss, memento],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 246,
      atk: '?',
      def: 13,
      crt: 3,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: 4,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 357,
      atk: '?',
      def: 23,
      crt: 5,
      load: 8
    }],
    file: 'tesla-m.png',
    skills: [
      'Increase all-damage dealt against freeze status enemies by 32 / ? / 51 %'
    ]
  }, {
    name: 'Nikola Tesla (B)',
    type: 'bottom',
    recommend: [wc, vc, ir],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 246,
      atk: 20,
      def: 13,
      crt: 1,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: 1,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 357,
      atk: 29,
      def: 23,
      crt: 1,
      load: 8
    }],
    file: 'tesla-b.png',
    skills: [
      'Increase all-damage dealt against faint status enemies by 32 / ? / 51 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase all-damage dealt against barrier-broken status elites by 15%'
    ]
  }, {
    set: 3,
    skills: [
      'Increase lightning elemental damage by 30%'
    ]
  }]
}, {
  name: 'Jixuanyuan: Aqua',
  stars: [3, 4],
  variations: [{
    name: 'Jixuanyuan: Aqua (T)',
    type: 'top',
    recommend: [miko, vb, dp],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 221,
      atk: 36,
      def: 25,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 269,
      atk: 44,
      def: 30,
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 325,
      atk: 54,
      def: 37,
      crt: '?',
      load: 8
    }],
    file: 'jxy-aqua-t.png',
    skills: [
      'Increase branch attack physical damage by 9 / ? / 15 %'
    ]
  }, {
    name: 'Jixuanyuan: Aqua (M)',
    type: 'middle',
    recommend: [db, vt, bs],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 221,
      atk: '?',
      def: 25,
      crt: 4,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 269,
      atk: '?',
      def: 30,
      crt: 5,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 325,
      atk: '?',
      def: 37,
      crt: 6,
      load: 8
    }],
    file: 'jxy-aqua-m.png',
    skills: [
      'Increase charge attack physical damage by 8 / ? / 15 %',
      '(Bronya’s and Himeko’s charge attack)'
    ]
  }, {
    name: 'Jixuanyuan: Aqua (B)',
    type: 'bottom',
    recommend: [ve, vc, sf],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 221,
      atk: 36,
      def: 18,
      crt: 1,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 269,
      atk: 44,
      def: 22,
      crt: 2,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 325,
      atk: 54,
      def: 27,
      crt: 3,
      load: 8
    }],
    file: 'jxy-aqua-b.png',
    skills: [
      'Increase tag attack physical damage by 19 / ? / 31 %',
      '(QTE included)'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase all-damage dealt against shield-broken status elites by 10%'
    ]
  }, {
    set: 3,
    skills: [
      'Increase moving speed by 10%'
    ]
  }]
}, {
  name: 'Edison',
  stars: [3, 4],
  variations: [{
    name: 'Edison (T)',
    type: 'top',
    recommend: [bs],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 242,
      atk: 40,
      def: 26,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 294,
      atk: 49,
      def: 32,
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 351,
      atk: 58,
      def: 38,
      crt: '?',
      load: 8
    }],
    file: 'edison-t.png',
    skills: [
      'Gain a proc every 9.0 / ? / 6.0 seconds, next basic attack (branch attack and charge attack included) deals additional 324 / ? / 510 lightning elemental damage'
    ]
  }, {
    name: 'Edison (M)',
    type: 'middle',
    recommend: [bs],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 242,
      atk: '?',
      def: 26,
      crt: 4,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 294,
      atk: '?',
      def: 32,
      crt: 5,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 351,
      atk: '?',
      def: 38,
      crt: 6,
      load: 8
    }],
    file: 'edison-m.png',
    skills: [
      'Grant a barrier every 9.0 / ? / 6.0 seconds, reduce next incoming damage by 63 / ? / 102'
    ]
  }, {
    name: 'Edison (B)',
    type: 'bottom',
    recommend: [le, bs],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 242,
      atk: 20,
      def: 26,
      crt: 2,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 294,
      atk: 24,
      def: 32,
      crt: 2,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 351,
      atk: 29,
      def: 38,
      crt: 2,
      load: 8
    }],
    file: 'edison-b.png',
    skills: [
      'Gain a proc every 9.0 / ? / 6.0 seconds, next basic attack (branch attack and charge attack included) reduces enemy’s moving speed by 23 / ? / 30 %, last for 4.0 seconds'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Gain a proc every 7.0 seconds, next basic attack (branch attack and charge attack included) gains increase physical damage by 60%'
    ]
  }, {
    set: 3,
    skills: [
      'Increase defense by 30%',
      'When equipped on Himeko, increase maximum HP by 20% while in combat'
    ]
  }]
}, {
  name: 'Bronya: Magic',
  stars: [3, 4],
  variations: [{
    name: 'Bronya: Magic (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 226,
      atk: 38,
      def: 53,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 275,
      atk: 46,
      def: 62,
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 325,
      atk: 55,
      def: 72,
      crt: '?',
      load: 8
    }],
    file: 'bronya-witch-t.png',
    skills: [
      'Increase charge attack physical damage by 13 / ? / 20 %',
      '(Bronya’s and Himeko’s charge attack)'
    ]
  }, {
    name: 'Bronya: Magic (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 226,
      atk: '?',
      def: 53,
      crt: 6,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 275,
      atk: '?',
      def: 62,
      crt: 7,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 325,
      atk: '?',
      def: 72,
      crt: 9,
      load: 8
    }],
    file: 'bronya-witch-m.png',
    skills: [
      'Increase ranged physical damage by 11 / 13 / 15 %',
      'When equipped on Bronya, increase maximum HP by 6 / 8 / 10 % while in combat'
    ]
  }, {
    name: 'Bronya: Magic (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 226,
      atk: 19,
      def: 53,
      crt: 4,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 275,
      atk: 23,
      def: 62,
      crt: 5,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 325,
      atk: 27,
      def: 72,
      crt: 6,
      load: 8
    }],
    file: 'bronya-witch-b.png',
    skills: [
      'Increase fire elemental damage by 13 / 16 / 20 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase all-damage by 10%',
      'When equipped on Bronya, increase tag-in attack (QTE included) all-damage by 10%'
    ]
  }, {
    set: 3,
    skills: [
      'Increase moving speed by 15%'
    ]
  }]
}, {
  name: 'Rowland',
  stars: [3, 4],
  variations: [{
    name: 'Rowland (T)',
    type: 'top',
    recommend: [vr, dp],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 237,
      atk: 40,
      def: 44,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 287,
      atk: 48,
      def: 52,
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 343,
      atk: 58,
      def: 61,
      crt: '?',
      load: 8
    }],
    file: 'rowland-t.png',
    skills: [
      'Recover 22 / ? / 46 HP per every 3.0 seconds'
    ]
  }, {
    name: 'Rowland (M)',
    type: 'middle',
    recommend: [wc],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 237,
      atk: '?',
      def: 44,
      crt: 2,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 287,
      atk: '?',
      def: 52,
      crt: 3,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 343,
      atk: '?',
      def: 61,
      crt: 4,
      load: 8
    }],
    file: 'rowland-m.png',
    skills: [
      'When inflicted with status ailments, 35 / 42 / 51 % chance to instantly cleanse the status ailments'
    ]
  }, {
    name: 'Rowland (B)',
    type: 'bottom',
    recommend: [ya],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 237,
      atk: 20,
      def: 44,
      crt: 2,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 287,
      atk: 25,
      def: 52,
      crt: 3,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 343,
      atk: 29,
      def: 61,
      crt: 4,
      load: 8
    }],
    file: 'rowland-b.png',
    skills: [
      'When HP over 80%, increase defense by 19 / 25 / 31 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Reduce incoming damage from Psychic-type enemies by 20%',
      'When equipped on Kiana, increase maximum HP by 20% while in combat'
    ]
  }, {
    set: 3,
    skills: [
      'Increase physical damage dealt against Psychic-type enemies by 20%',
      'When equipped on Kiana, increase critical rate by 10% while in combat'
    ]
  }]
}, {
  name: 'Galileo',
  stars: [3, 4],
  variations: [{
    name: 'Galileo (T)',
    type: 'top',
    recommend: [ci, sd, vb],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 159,
      atk: 40,
      def: 28,
      crt: '?',
      load: 6
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 230,
      atk: 58,
      def: 41,
      crt: '?',
      load: 8
    }],
    file: 'galileo-top.png',
    skills: [
      'After performed perfect evasion skill, increase all-damage by 5 / 15 %, last for 3 / 5 seconds. If effect is re-activated during activation, refresh its duration'
    ]
  }, {
    name: 'Galileo (M)',
    type: 'middle',
    recommend: [ci, sd, vb],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 191,
      atk: '?',
      def: 56,
      crt: 5,
      load: 6
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 276,
      atk: '?',
      def: 83,
      crt: 7,
      load: 8
    }],
    file: 'galileo-center.png',
    skills: [
      'Increase all-damage by 3 / 5 %',
      'Further increase all-damage dealt against floating enemy by 5 / 10 %'
    ]
  }, {
    name: 'Galileo (B)',
    type: 'bottom',
    recommend: [ci, sd, vb],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 169,
      atk: 17,
      def: 28,
      crt: 7,
      load: 6
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 246,
      atk: 24,
      def: 41,
      crt: 10,
      load: 8
    }],
    file: 'galieo-bottom.png',
    skills: [
      'If keep hitting same target (reset the target if not keep hitting it within 2.5 seconds), increase critical rate by 1% per hit, stack up to 5 / 10 % critical rate'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase critical damage of melee attack by 30%'
    ]
  }, {
    set: 3,
    skills: [
      'Reduce received indirect physical damage (bleeding, etc.) by 40%'
    ]
  }]
}, {
  name: 'Himeko: Christmas',
  stars: [3, 4],
  variations: [{
    name: 'Himeko: Christmas (T)',
    type: 'top',
    recommend: [bs],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 226,
      atk: 38,
      def: 53,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: '?'
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 325,
      atk: 55,
      def: 72,
      crt: '?',
      load: 8
    }],
    file: 'himeko-christmas-t.png',
    skills: [
      'Increase moving speed by 5 / ? / 8 %. When equipped on Himeko, further increase moving speed by 5 / ? / 8 %'
    ]
  }, {
    name: 'Himeko: Christmas (M)',
    type: 'middle',
    recommend: [bs],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 226,
      atk: '?',
      def: 53,
      crt: 5,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: '?'
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 325,
      atk: '?',
      def: 72,
      crt: 7,
      load: 8
    }],
    file: 'himeko-christmas-m.png',
    skills: [
      'When equipped on Himeko, reduce surrounding enemies attack speed by 5 / ? / 15 %, moving speed by 5 / ? / 15 %'
    ]
  }, {
    name: 'Himeko: Christmas (B)',
    type: 'bottom',
    recommend: [vt, dp],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 226,
      atk: 19,
      def: 53,
      crt: 2,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: '?'
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 325,
      atk: 27,
      def: 72,
      crt: 4,
      load: 8
    }],
    file: 'himeko-christmas-b.png',
    skills: [
      'On-hit drops a Christmas bell, that will restore 1 / 2 / 3 SP when looted. When equipped on Himeko, the effect is doubled',
      '5.0 seconds drop cooldown, and will disappear after 8.0 seconds if not looted'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase charge attack physical damage by 15% (Bronya’s and Himeko’s charge attack)'
    ]
  }, {
    set: 3,
    skills: [
      'Increase melee physical damage dealt against Mecha-type enemies by 10%',
      'When equipped on Himeko, increase physical damage by 10%'
    ]
  }]
}, {
  name: 'Charlemagne',
  stars: [3, 4],
  variations: [{
    name: 'Charlemagne (T)',
    type: 'top',
    recommend: [sd],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 137,
      atk: 34,
      def: 34,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: '?'
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 200,
      atk: 50,
      def: 50,
      crt: '?',
      load: 8
    }],
    file: 'charlemagne-t.png',
    skills: [
      'When SP above 70%, each additional 5% SP increase basic attack (branch attack and charge attack included) physical damage by 2 / 3 / 4 %'
    ]
  }, {
    name: 'Charlemagne (M)',
    type: 'middle',
    recommend: [ya],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 275,
      atk: '?',
      def: 103,
      crt: 13,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: '?'
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 400,
      atk: '?',
      def: 150,
      crt: 20,
      load: 8
    }],
    file: 'charlemagne-m.png',
    skills: [
      'When SP above 70%, increase defense by 50 / ? / 75 %'
    ]
  }, {
    name: 'Charlemagne (B)',
    type: 'bottom',
    recommend: [sd],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 206,
      atk: 34,
      def: 68,
      crt: 13,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: '?'
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 300,
      atk: 50,
      def: 100,
      crt: 20,
      load: 8
    }],
    file: 'charlemagne-b.png',
    skills: [
      'When SP above 70%, increase moving speed by 15 / ? / 25 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'When SP above 70%, reduce surrounding enemies damage by 20%, defense by 20%'
    ]
  }, {
    set: 3,
    skills: [
      'Increase physical damage dealt against Mecha-type enemies by 20%',
      'When equipped on Mei or Sakura, increase maximum HP by 25% while in combat'
    ]
  }]
}, {
  name: 'Ogier',
  stars: [3, 4],
  variations: [{
    name: 'Ogier (T)',
    type: 'top',
    recommend: [wc],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 68,
      atk: 39,
      def: 27,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 100,
      atk: 58,
      def: 40,
      crt: '?',
      load: 8
    }],
    file: 'ogier-t.png',
    skills: [
      'When SP below 20%, increase basic attack (branch attack and charge attack included) physical damage by 10 / 15 / 20 %'
    ]
  }, {
    name: 'Ogier (M)',
    type: 'middle',
    recommend: [wc],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 137,
      atk: '?',
      def: 27,
      crt: 6,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 200,
      atk: '?',
      def: 40,
      crt: 10,
      load: 8
    }],
    file: 'ogier-m.png',
    skills: [
      'When SP below 20%, reduce incoming physical damage by 15 / ? / 25 %'
    ]
  }, {
    name: 'Ogier (B)',
    type: 'bottom',
    recommend: [wc],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 206,
      atk: 20,
      def: 68,
      crt: 13,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 300,
      atk: 30,
      def: 100,
      crt: 20,
      load: 8
    }],
    file: 'ogier-b.png',
    skills: [
      'When SP below 20%, increase moving speed by 15 / ? / 25 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase maximum HP by 15% while in combat',
      'When SP below 20%, deal physical damage based on 35% attack power per every 0.5 seconds to the surrounding enemies'
    ]
  }, {
    set: 3,
    skills: [
      'Increase physical damage dealt against biological-type enemies by 20%',
      'When equipped on Bronya, increase critical damage by 40%'
    ]
  }]
}, {
  name: 'Yodo Dono',
  stars: [3, 4],
  variations: [{
    name: 'Yodo Dono (T)',
    type: 'top',
    recommend: [ci, miko, dp, bs, sf],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 235,
      atk: 40,
      def: 29,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 286,
      atk: 49,
      def: 36,
      crt: '?',
      load: '?'
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 341,
      atk: 59,
      def: 43,
      crt: '?',
      load: 8
    }],
    file: 'yodo-dono-t.png',
    skills: [
      'Upon tag-out, grant squad members with 14 / 20 / 26 % fire elemental resistance (not stackable)',
      'Upon tag-in, increase own melee physical damage by 11 / 13 / 15 %'
    ]
  }, {
    name: 'Yodo Dono (M)',
    type: 'middle',
    recommend: [br, sr, fs],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 235,
      atk: '?',
      def: 29,
      crt: 4,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 286,
      atk: '?',
      def: 36,
      crt: 5,
      load: '?'
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 341,
      atk: '?',
      def: 43,
      crt: 6,
      load: 8
    }],
    file: 'yodo-dono-m.png',
    skills: [
      'Increase outgoing fire elemental damage by 19 / 26 / 31 %, reduce incoming fire elemental damage by 20%'
    ]
  }, {
    name: 'Yodo Dono (B)',
    type: 'bottom',
    recommend: [wc],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 235,
      atk: 20,
      def: 29,
      crt: 2,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 286,
      atk: 24,
      def: 36,
      crt: 2,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 341,
      atk: 28,
      def: 43,
      crt: 3,
      load: 8
    }],
    file: 'yodo-dono-b.png',
    skills: [
      'While in combat, each 1 enemy on field increase own moving speed by 6 / 7 / 8 %, defense by 6 / 7 / 8 %, up to 5 times multiplier'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Unleash a 4 meter radius flame wave upon tag-out, dealing fire elemental damage based on 200%attack power to the surrounding enemies, with 30.0 seconds cooldown',
      'When equipped on Kiana, 2 flame waves will be unleashed'
    ]
  }, {
    set: 3,
    skills: [
      'Increase flame wave’s radius by 2 meter, and add additional fire elemental damage based on 200%attack power, each flame wave inflict 5.0 seconds burn status, dealing 30% fire elemental damage per every 0.5 seconds.'
    ]
  }]
}, {
  name: 'Shigure Kira',
  stars: [3, 4],
  variations: [{
    name: 'Shigure Kira (T)',
    type: 'top',
    recommend: [memento, le, fs, br],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 212,
      atk: 38,
      def: 56,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 307,
      atk: 55,
      def: 83,
      crt: '?',
      load: 12
    }],
    file: 'shigure-top.png',
    skills: [
      'Increase fire, lightning, ice elemental damage by 8 / 15 %'
    ]
  }, {
    name: 'Shigure Kira (M)',
    type: 'middle',
    recommend: [memento, le, fs, br],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 244,
      atk: '?',
      def: 61,
      crt: 3,
      load: 9
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 353,
      atk: '?',
      def: 90,
      crt: 4,
      load: 12
    }],
    file: 'shigure-center.png',
    skills: [
      'Increase on-field HP by 8 / 15 %, defense power by 8 / 15 %'
    ]
  }, {
    name: 'Shigure Kira (B)',
    type: 'bottom',
    recommend: [memento, le, fs, br],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 233,
      atk: 22,
      def: 19,
      crt: 5,
      load: 9
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 338,
      atk: 31,
      def: 28,
      crt: 7,
      load: 12
    }],
    file: 'shigure-bottm.png',
    skills: [
      'When perform a perfect evasion skill, increase fire / lightning / ice elemental damage by 8 / 20 %, last for 5 seconds. Re-perform during buff still active will reset the buff duration'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Reduce receiving physical damage by 15%'
    ]
  }, {
    set: 3,
    skills: [
      'Increase all damage by 15%'
    ]
  }]
}, {
  name: 'Naoe Kanetsugu',
  stars: [3, 4],
  variations: [{
    name: 'Naoe Kanetsugu (T)',
    type: 'top',
    recommend: [wc],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 266,
      atk: 40,
      def: 27,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: '?'
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 386,
      atk: 58,
      def: 40,
      crt: '?',
      load: 8
    }],
    file: 'naoe-t.png',
    skills: [
      'Increase all-damage dealt against barrier-intact status elites by 15 / ? / 25 %, and increase critical rate against barrier-broken status elites by 8 / ? / 15 %'
    ]
  }, {
    name: 'Naoe Kanetsugu (M)',
    type: 'middle',
    recommend: [wc],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 266,
      atk: '?',
      def: 27,
      crt: 4,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 386,
      atk: '?',
      def: 40,
      crt: 6,
      load: 8
    }],
    file: 'naoe-m.png',
    skills: [
      'Grant 10 / ? / 25 % fire elemental resistance',
      'After received fire elemental damage increase self-physical damage by 20 / ? / 40 %, last for 4.0 seconds, with 10.0 seconds cooldown'
    ]
  }, {
    name: 'Naoe Kanetsugu (B)',
    type: 'bottom',
    recommend: [wc],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 266,
      atk: 20,
      def: 27,
      crt: 2,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 386,
      atk: 29,
      def: 40,
      crt: 3,
      load: 8
    }],
    file: 'naoe-b.png',
    skills: [
      'When surrounding has enemies, recover 2% HP per every 6.0 / ? / 4.0 seconds'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Reduce incoming frontal physical damage by 80% in exchange increase incoming non-frontal physical damage by 40%, the frontal damage reduction lost its effect for 20.0 seconds after perfect evasive move is triggered'
    ]
  }, {
    set: 3,
    skills: [
      'Entering combat grant Vajrayana’s Blessing, that increase physical damage by 40%, and defense by 60%, last for 20.0 seconds, with 60.0 seconds cooldown'
    ]
  }]
}, {
  name: 'Dragon Boat',
  stars: [3, 4],
  variations: [{
    name: 'Kiana: Dragon Boat Festival (T)',
    type: 'top',
    recommend: [miko, vb, sd],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 236,
      atk: 38,
      def: 24,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: '?'
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 343,
      atk: 55,
      def: 43,
      crt: '?',
      load: 8
    }],
    file: 'dragon-boat-t.png',
    skills: [
      'Increase branch attack physical damage by 10 / ? / 20 %, and branch attack critical rate by 3 / ? / 5 %'
    ]
  }, {
    name: 'Mei: Dragon Boat Festival (M)',
    type: 'middle',
    recommend: [km],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 236,
      atk: '?',
      def: 24,
      crt: 4,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 286,
      atk: '?',
      def: '?',
      crt: 5,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 343,
      atk: '?',
      def: 37,
      crt: 6,
      load: 8
    }],
    file: 'dragon-boat-m.png',
    skills: [
      '10% chance on-hit to inflict 2.0 seconds paralysis status to the enemies, with 8.0 / ? / 5.0 seconds cooldown'
    ]
  }, {
    name: 'Bronya: Dragon Boat Festival (B)',
    type: 'bottom',
    recommend: [ve, vc],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 236,
      atk: 20,
      def: 24,
      crt: 2,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 343,
      atk: 27,
      def: 37,
      crt: 3,
      load: 8
    }],
    file: 'dragon-boat-b.png',
    skills: [
      'Shorten the status ailments duration by 15 / ? / 30 %',
      'Increase tag-in attack (QTE included) physical damage by 15 / ? / 25 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase maximum SP by 10% while in combat',
      'Increase maximum HP by 10% while in combat'
    ]
  }, {
    set: 3,
    skills: [
      'When HP above 70%, each additional 5% HP increase physical damage by 6%'
    ]
  }]
}, {
  name: 'Rinaldo',
  stars: [3, 4],
  variations: [{
    name: 'Rinaldo (T)',
    type: 'top',
    recommend: [km, ve, sf],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 226,
      atk: 44,
      def: 22,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: '?'
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 329,
      atk: 64,
      def: 32,
      crt: '?',
      load: 8
    }],
    file: 'rinaldo-t.png',
    skills: [
      'Critical hit additionally deal physical damage based on 80 / ? / 150 %attack power to the target and enemies within 2.0 meter radius, with 5.0 seconds cooldown'
    ]
  }, {
    name: 'Rinaldo (M)',
    type: 'middle',
    recommend: [km, ve],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 272,
      atk: '?',
      def: 59,
      crt: 5,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 394,
      atk: '?',
      def: 87,
      crt: 5,
      load: 8
    }],
    file: 'rinaldo-m.png',
    skills: [
      'Critical hit inflict 1.5 seconds paralysis status to the target and enemies within 2.0 meter radius, with 8.0 / ? / 5.0 seconds cooldown'
    ]
  }, {
    name: 'Rinaldo (B)',
    type: 'bottom',
    recommend: [ya, dp],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 196,
      atk: 21,
      def: 29,
      crt: 4,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 285,
      atk: 31,
      def: 43,
      crt: 6,
      load: 8
    }],
    file: 'rinaldo-b.png',
    skills: [
      'Critical hit restore 60 / ? / 120 HP, with 8.0 seconds cooldown'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase critical rate by 15%'
    ]
  }, {
    set: 3,
    skills: [
      'After an enemy on-killed, increase critical damage by 50%, last for 6.0 seconds, consecutive trigger refresh the duration'
    ]
  }]
}, {
  name: 'Theresa: Origin',
  stars: [3, 4],
  variations: [{
    name: 'Theresa: Origin (T)',
    type: 'top',
    recommend: [vp, ve, sr, ch],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 226,
      atk: 43,
      def: 29,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 275,
      atk: 52,
      def: 36,
      crt: '?',
      load: '?'
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 329,
      atk: 62,
      def: 43,
      crt: '?',
      load: 8
    }],
    file: 'theresa-origins-t.png',
    skills: [
      'After activating weapon skill, increase all-damage by 15 / ? / 30 %, last for 6.0 seconds'
    ]
  }, {
    name: 'Theresa: Origin (M)',
    type: 'middle',
    recommend: [vp, sr, ch],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 287,
      atk: '?',
      def: 66,
      crt: 2,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 349,
      atk: '?',
      def: 81,
      crt: 3,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 416,
      atk: '?',
      def: 98,
      crt: 4,
      load: 8
    }],
    file: 'theresa-origins-m.png',
    skills: [
      'Reduce weapon skill cooldown by 15 / ? / 30 %'
    ]
  }, {
    name: 'Theresa: Origin (B)',
    type: 'bottom',
    recommend: [vp, sr, ch],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 221,
      atk: 16,
      def: 44,
      crt: 4,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 257,
      atk: 20,
      def: 54,
      crt: 5,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 307,
      atk: 23,
      def: 65,
      crt: 6,
      load: 8
    }],
    file: 'theresa-origins-b.png',
    skills: [
      'After activating weapon skill, increase attack speed by 10 / ? / 25 %, last for 4.0 seconds'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Reduce allied (teammates / Valkyrie) incoming frontal physical damage by 20%',
      'When equipped on Theresa, increase maximum SP by 20% while in combat'
    ]
  }, {
    set: 3,
    skills: [
      'Increase allied (teammates / Valkyrie) basic attack (branch attack and charge attack included) physical damage by 15% (This skill does not stack with other buff effect)',
      'When equipped on Theresa, further increase self-basic attack (branch attack and charge attack included) physical damage by 15%'
    ]
  }]
}, {
  name: 'Homu',
  stars: [3, 4],
  variations: [{
    name: 'Homu (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 221,
      atk: 47,
      def: 25,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: '?'
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 307,
      atk: 69,
      def: 38,
      crt: '?',
      load: 8
    }],
    file: 'homu-t.png',
    skills: [
      '30 / 40 / 50 % chance basic attack (branch attack and charged attack included) on-hit drops a Homu coin (4.0 seconds cooldown), that each Homu coin will increase self all-damage by 5 / ? / 10 % (last for 10 seconds), up to 3 times multiplier'
    ]
  }, {
    name: 'Homu (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 254,
      atk: '?',
      def: 59,
      crt: 2,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 368,
      atk: '?',
      def: 87,
      crt: 4,
      load: 8
    }],
    file: 'homu-m.png',
    skills: [
      'Enlarge loot range by 0.5 / 1.0 / 1.5'
    ]
  }, {
    name: 'Homu (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 227,
      atk: 18,
      def: 37,
      crt: 4,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 330,
      atk: 26,
      def: 54,
      crt: 6,
      load: 8
    }],
    file: 'homu-b.png',
    skills: [
      'Increase moving speed by 10 / 15 / 20 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'After consecutive looting 1 Homu coin, will materialize a suicide explosive Homu, dealing physical damage based on 400% attack power to the surrounding enemies within 4.0 meter radius'
    ]
  }, {
    set: 3,
    skills: [
      'After consecutive looting 3 Homu coin, will restore self HP by 10%, SP by 10%'
    ]
  }]
}, {
  name: 'Seele: Cyan Sea',
  stars: [3, 4],
  variations: [{
    name: 'Seele: Cyan Sea (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: '?'
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 326,
      atk: '?',
      def: 36,
      crt: 6,
      load: 8
    }],
    file: 'seele-cyan-m.png',
    skills: [
      'Increases Movement Speed by 10% when there are no more than 4 enemies on the battlefield. Increases maximum SP during battle by an additional 10% when equipped on Bronya.'
    ]
  }],
  setSkills: []
},//new stigma
{
  name: 'Akutagawa Ryuunosuke',
  stars: [3, 4],
  variations: [{
    name: 'Akutagawa Ryuunosuke (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 148,
      atk: 41,
      def: 28,
      crt: '?',
      load: 6
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 215,
      atk: 60,
      def: 41,
      crt: '?',
      load: 8
    }],
    file: 'ryuunosuke-t.png',
    skills: [
      'Increase melee physical damage by 10% / 20%'
    ]
  }, {
    name: 'Akutagawa Ryuunosuke (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 201,
      atk: 66,
      def: '?',
      crt: 2,
      load: 6
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 292,
      atk: 97,
      def: '?',
      crt: 3,
      load: 8
    }],
    file: 'ryuunosuke-m.png',
    skills: [
      'Increase critical stats by 3 / 5 for every hit in combo chain, stack up to 15 / 25'
    ]
  }, {
    name: 'Akutagawa Ryuunosuke (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 169,
      atk: 18,
      def: 28,
      crt: 6,
      load: 6
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 246,
      atk: 26,
      def: 41,
      crt: 8,
      load: 8
    }],
    file: 'ryuunosuke-b.png',
    skills: [
      'Increase attack speed by 1% / 2% for every hit in combo chain, stack up to 5% / 10%'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'When deployed, grant a shield that can absorb 15% all damage based on user max HP (up to 1800 damage).', 
      'The shield regenerates after 15 seconds if it is broken',
      'While the shield is active, increase user critical damage by 40%'
    ]
  }, {
    set: 3,
    skills: [
      'Increase melee all damage by 20%'
    ]
  }]
}, //till here 
{
  name: 'Bronya: Hacker',
  stars: [3, 4],
  variations: [{
    name: 'Bronya: Hacker (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 174,
      atk: 51,
      def: 33,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 285,
      atk: 47,
      def: 33,
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 253,
      atk: 74,
      def: 49,
      crt: '?',
      load: 8
    }],
    file: 'bronya-hacker-t.png',
    skills: [
      'Increases ranged Critical Damage by 25%. Increases Attack Speed by 15% when equipped on Bronya.'
    ]
  }],
  setSkills: []
}, {
  name: 'Eternal Love',
  stars: [3, 4],
  variations: [{
    name: 'Eternal Love (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 236,
      atk: '?',
      def: 21,
      crt: 3,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 287,
      atk: '?',
      def: 26,
      crt: 4,
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 339,
      atk: '?',
      def: 32,
      crt: 5,
      load: 8
    }],
    file: 'eternal-love-m.png',
    skills: [
      'Increase maximum HP by 13 / 16 / 20 % while in combat',
      'When equipped on Kiana, increase on-field Mei\'s physical damage by 6 / 7 / 8 %',
      'When equipped on Mei, increase on-field Kiana\'s physical damage by 6 / 7 / 8 %',
      'Not stackable'
    ]
  }],
  setSkills: []
}, {
  name: 'Kiana: Winter Princess',
  stars: [3, 4],
  variations: [{
    name: 'Kiana: Winter Princess (T)',
    type: 'top',
    recommend: [dp],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 235,
      atk: 39,
      def: 25,
      crt: '?',
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: 285,
      atk: 47,
      def: 33,
      crt: '?',
      load: '?'
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 337,
      atk: 56,
      def: 37,
      crt: '?',
      load: 8
    }],
    file: 'winter-princess-t.png',
    skills: [
      'Increase melee physical damage by 13 / 16 / 20 %',
      'When equipped on Kiana, 13 / 16 / 20 % chance on-hit to inflict freeze status to an enemy, last for 3.0 seconds, with 16.0 seconds proc cooldown'
    ]
  }],
  setSkills: []
}, {
  name: 'Himeko: Noel',
  stars: [3, 4],
  variations: [{
    name: 'Himeko: Noel (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 233,
      atk: '?',
      def: 74,
      crt: 2,
      load: 8
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 338,
      atk: 41,
      def: 109,
      crt: 3,
      load: 10
    }],
    file: 'himeko-noel-m.png',
    skills: [
      'Increase HP while on battle field by 10 / ? / 15 %. When equipped on Himeko, basic attack (branch attack & charge attack included) has 20 / ? / 40 % chance to inflict slow / burn / vulnerable / weaken status. Last for 2 / ? / 5 seconds. Cooldown 10 seconds'
    ]
  }],
  setSkills: []
}, {
  name: 'Mei: Bride',
  stars: [3, 4],
  variations: [{
    name: 'Mei: Bride (M)',
    type: 'middle',
    recommend: [sd],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 228,
      atk: '?',
      def: 27,
      crt: 4,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 327,
      atk: '?',
      def: 40,
      crt: 6,
      load: 8
    }],
    file: 'mei-bride-m.png',
    skills: [
      'When equipped on Mei, reduce incoming all-elemental damage by 14 / 20 / 26 %',
      'When surrounding has enemies, increase moving speed by 19 / 25 / 31 %'
    ]
  }],
  setSkills: []
}, {
  name: 'Himeko: Bride',
  stars: [3, 4],
  variations: [{
    name: 'Himeko: Bride (M)',
    type: 'middle',
    recommend: [vt],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 272,
      atk: '?',
      def: 51,
      crt: 5,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 394,
      atk: '?',
      def: 76,
      crt: 9,
      load: 8
    }],
    file: 'himeko-bride-m.png',
    skills: [
      'Increase charge attack physical damage by 5 / ? / 10 %',
      'When equipped on Himeko, increase critical damage by 5 / ? / 10 %'
    ]
  }],
  setSkills: []
}, {
  name: 'Theresa: Magical Girl',
  stars: [3, 4],
  variations: [{
    name: 'Theresa: Magical Girl (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 8
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 307,
      atk: '?',
      def: 83,
      crt: 3,
      load: 9
    }],
    file: 'theresa-magical-girl-m.png',
    skills: [
      'Increase fire elemental damage by 30%.',
      'When equipped on Theresa, increase all-damage of cross type weapon by 15%'
    ]
  }],
  setSkills: []
}, {
  name: 'Teriteri',
  stars: [3, 4],
  variations: [{
    name: 'Teriteri (M)',
    type: 'middle',
    recommend: [bs],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 241,
      atk: '?',
      def: 25,
      crt: 4,
      load: 6
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 346,
      atk: '?',
      def: 37,
      crt: 6,
      load: 8
    }],
    file: 'theresa-m.png',
    skills: [
      'While on-target, reduce incoming physical damage from all enemies other than the target by 20 / 36 %'
    ]
  }],
  setSkills: []
}, {
  name: 'Kiana: Happy New Year',
  stars: [3, 4],
  variations: [{
    name: 'Kiana: Happy New Year (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 169,
      atk: 18,
      def: 30,
      crt: 5,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 246,
      atk: 26,
      def: 44,
      crt: 7,
      load: 8
    }],
    file: 'kiana-happy-new-year.png',
    skills: [
      'Increase attack speed by 8  / ? / 15 %. When used on Kiana or Kallen Valkyrie, after tag-in has 5 charges, each charge gives 5 / ? / 10 % critical chance. You loose a charge per each 2.0 seconds. This skill has a 25 / ? / 15 seconds cooldown'
    ]
  }],
  setSkills: []
}, {
  name: 'Sakura: Blistering Summer',
  stars: [3, 4],
  variations: [{
    name: 'Sakura: Blistering Summer (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 243,
      atk: 18,
      def: 37,
      crt: 3,
      load: 6
    }, {
      rarity: [[3, 4], [1, 1]],
      lvl: 30,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 7
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 353,
      atk: 26,
      def: 54,
      crt: 5,
      load: 8
    }],
    file: 'sakura-summer.png',
    skills: [
      'Upon tag-in, increase basic attack (branch attack and charged attack included) all-damage by 10 / ? / 15 %',
      'Upon tag-out, grant squad members with 10 / ? / 25 % ice elemental resistance (not stackable).'
    ]
  }],
  setSkills: []
}, {
  name: 'Cleopatra',
  stars: [4, 5],
  variations: [{
    name: 'Cleopatra (T)',
    type: 'top',
    recommend: [wc, ve, vr, ir],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 351,
      atk: 58,
      def: 41,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 552,
      atk: 92,
      def: 65,
      crt: '?',
      load: 12
    }],
    file: 'cleopatra-t.png',
    skills: [
      'Increase all-damage dealt against shield-break enemy by 28 / 41 %'
    ]
  }, {
    name: 'Cleopatra (M)',
    type: 'middle',
    recommend: [wc, vr, vc],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 351,
      atk: '?',
      def: 41,
      crt: 7,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 552,
      atk: '?',
      def: 65,
      crt: 11,
      load: 12
    }],
    file: 'cleopatra-m.png',
    skills: [
      'Increase all-damage dealt against stunned enemy by 48 / 82 %'
    ]
  }, {
    name: 'Cleopatra (B)',
    type: 'bottom',
    recommend: [vr, km, le],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 351,
      atk: 29,
      def: 41,
      crt: 3,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 552,
      atk: 46,
      def: 65,
      crt: 5,
      load: 12
    }],
    file: 'cleopatra-b.png',
    skills: [
      'Increase all-damage dealt against paralyzed enemy by 48 / 82 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase movement speed by 25%',
      'When equipped on Kiana or Kallen, increase max HP by 20% during combat'
    ]
  }, {
    set: 3,
    skills: [
      'Increase physical damage by 5% per meter away from enemy, stack up 10 times'
    ]
  }]
}, {
  name: 'Jixuanyuan',
  stars: [4, 5],
  variations: [{
    name: 'Jixuanyuan (T)',
    type: 'top',
    recommend: [ve, vc, bs],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 344,
      atk: 59,
      def: 61,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 541,
      atk: 93,
      def: 92,
      crt: '?',
      load: 12
    }],
    file: 'jixuanyuan-t.png',
    skills: [
      'Increase tag-in attack physical damage by 36 / 62 % (QTE included)'
    ]
  }, {
    name: 'Jixuanyuan (M)',
    type: 'middle',
    recommend: [vc, bn, bs],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 344,
      atk: '?',
      def: 61,
      crt: 3,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 541,
      atk: '?',
      def: 92,
      crt: 6,
      load: 12
    }],
    file: 'jixuanyuan-m.png',
    skills: [
      'Increase charge attack physical damage by 23 / 36 %'
    ]
  }, {
    name: 'Jixuanyuan (B)',
    type: 'bottom',
    recommend: [bn, bs],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 365,
      atk: 30,
      def: '?',
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 574,
      atk: 47,
      def: 12,
      crt: 1,
      load: 12
    }],
    file: 'jixuanyuan-b.png',
    skills: [
      'Increase weapon skill all-damage by 24 / 41 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Reduce debuff duration by 50%.',
      'When equipped on Mei or Sakura, increase max HP by 20% while in combat'
    ]
  }, {
    set: 3,
    skills: [
      'Charge for 5 seconds, increase physical damage by 80%, critical rate by 50% for next basic attack (branch attack and charge attack included) and a short duration afterwards'
    ]
  }]
}, {
  name: 'Shakespeare',
  stars: [4, 5],
  variations: [{
    name: 'Shakespeare (T)',
    type: 'top',
    recommend: [vp, sf, le],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 337,
      atk: 58,
      def: 81,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 530,
      atk: 91,
      def: 118,
      crt: '?',
      load: 12
    }],
    file: 'shakespeare-t.png',
    skills: [
      'Increase lightning elemental damage by 34 / 51 %'
    ]
  }, {
    name: 'Shakespeare (M)',
    type: 'middle',
    recommend: [br, sr, fs],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 337,
      atk: '?',
      def: 81,
      crt: 10,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 530,
      atk: '?',
      def: 118,
      crt: 15,
      load: 12
    }],
    file: 'shakespeare-m.png',
    skills: [
      'Increase fire elemental damage by 34 / 51 %'
    ]
  }, {
    name: 'Shakespeare (B)',
    type: 'bottom',
    recommend: [ss, memento],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 337,
      atk: 29,
      def: 81,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 530,
      atk: 45,
      def: 118,
      crt: 10,
      load: 12
    }],
    file: 'shakespeare-b.png',
    skills: [
      'Increase ice elemental damage by 34 /51 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Reduce evasion (defense) skill cooldown by 35%.',
      'When equipped on Psychic type Valkyrie, increase max SP by 15% while in combat'
    ]
  }, {
    set: 3,
    skills: [
      'Reduce SP consumption when activating skill by 20%'
    ]
  }]
}, {
  name: 'Ekaterina',
  stars: [4, 5],
  variations: [{
    name: 'Ekaterina (T)',
    type: 'top',
    recommend: [miko, vb],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 344,
      atk: 59,
      def: 61,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 541,
      atk: 93,
      def: 91,
      crt: '?',
      load: 12
    }],
    file: 'ekaterina-t.png',
    skills: [
      'When combo is above 25 hits, increase defense power by 44 / 61 %'
    ]
  }, {
    name: 'Ekaterina (M)',
    type: 'middle',
    recommend: [ci, miko, vb, km],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 344,
      atk: '?',
      def: 61,
      crt: 5,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 541,
      atk: '?',
      def: 91,
      crt: 9,
      load: 12
    }],
    file: 'ekaterina-m.png',
    skills: [
      'When combo is above 40 hits, increase physical damage by 32 / 41 %'
    ]
  }, {
    name: 'Ekaterina (B)',
    type: 'bottom',
    recommend: [miko, vb],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 344,
      atk: 29,
      def: 61,
      crt: 2,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 541,
      atk: 46,
      def: 91,
      crt: 3,
      load: 12
    }],
    file: 'ekaterina-b.png',
    skills: [
      'When combo is above 10 hits, increase movement speed by 18 / 31 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase critical rate by 15% while in combat.',
      'When equipped on Mecha type Valkyrie, increase max SP by 15% while in combat'
    ]
  }, {
    set: 3,
    skills: [
      'When combo is above 70 hits, increase critical damage by 120%'
    ]
  }]
}, {
  name: 'Lier',
  stars: [4, 5],
  variations: [{
    name: 'Lier (T)',
    type: 'top',
    recommend: [ya],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 358,
      atk: 58,
      def: 20,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 563,
      atk: 91,
      def: 38,
      crt: '?',
      load: 12
    }],
    file: 'lier-t.png',
    skills: [
      'When HP is above 80%, increase defense power by 60 / 103 %'
    ]
  }, {
    name: 'Lier (M)',
    type: 'middle',
    recommend: [le, bs],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 358,
      atk: '?',
      def: 20,
      crt: 8,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 563,
      atk: '?',
      def: 38,
      crt: 13,
      load: 12
    }],
    file: 'lier-m.png',
    skills: [
      'When HP is above 60%, increase movement speed by 23 / 36 %'
    ]
  }, {
    name: 'Lier (B)',
    type: 'bottom',
    recommend: [miko, bn],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 358,
      atk: 29,
      def: 20,
      crt: 5,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 563,
      atk: 45,
      def: 38,
      crt: 7,
      load: 12
    }],
    file: 'lier-b.png',
    skills: [
      'When HP is at 100%, increase physical damage by 29 / 46 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'When hit an enemy, 15% chance to restore HP by 5%, cooldown 2 seconds.',
      'When equipped on Biological type Valkyrie, increase max SP by 15% while in combat'
    ]
  }, {
    set: 3,
    skills: [
      'Guard one interruptible hit, knock back enemy, cooldown 5 seconds'
    ]
  }]
}, {
  name: 'Einstein',
  stars: [4, 5],
  variations: [{
    name: 'Einstein (T)',
    type: 'top',
    recommend: [br],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 313,
      atk: 54,
      def: 75,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 496,
      atk: 85,
      def: 110,
      crt: '?',
      load: 12
    }],
    file: 'einstein-t.png',
    skills: [
      'When HP below 33%, increase all-damage by 28 / 41 %'
    ]
  }, {
    name: 'Einstein (M)',
    type: 'middle',
    recommend: [br],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 313,
      atk: '?',
      def: 75,
      crt: 9,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 496,
      atk: '?',
      def: 110,
      crt: 14,
      load: 12
    }],
    file: 'einstein-m.png',
    skills: [
      'When HP below 33%, reduce recevied ranged damage by 28 /41 %'
    ]
  }, {
    name: 'Einstein (B)',
    type: 'bottom',
    recommend: [br],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 313,
      atk: 27,
      def: 75,
      crt: 6,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 496,
      atk: 43,
      def: 110,
      crt: 9,
      load: 12
    }],
    file: 'einstein-b.png',
    skills: [
      'When HP below 33%, increase defense power by 22 / 31 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'The further away from enemy, the less damage will be received, stack up to 4%*10'
    ]
  }, {
    set: 3,
    skills: [
      'The nearer approach, the more damage can be dealed, stack up to 25%'
    ]
  }]
}, {
  name: 'Fuxi',
  stars: [4, 5],
  variations: [{
    name: 'Fuxi (T)',
    type: 'top',
    recommend: [memento],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 362,
      atk: 58,
      def: 10,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 569,
      atk: 91,
      def: 25,
      crt: '?',
      load: 12
    }],
    file: 'fuxi-t.png',
    skills: [
      'Increase elemental damage dealt against frozen enemy by 58 / 92 %'
    ]
  }, {
    name: 'Fuxi (M)',
    type: 'middle',
    recommend: [le],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 362,
      atk: '?',
      def: 10,
      crt: 9,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 569,
      atk: '?',
      def: 25,
      crt: 14,
      load: 12
    }],
    file: 'fuxi-m.png',
    skills: [
      'Increase elemental damage dealt against paralyzed enemy by 58 / 92%'
    ]
  }, {
    name: 'Fuxi (B)',
    type: 'bottom',
    recommend: [br, sr],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 362,
      atk: 28,
      def: 10,
      crt: 5,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 569,
      atk: 45,
      def: 25,
      crt: 8,
      load: 12
    }],
    file: 'fuxi-b.png',
    skills: [
      'Increase elemental damage dealt against burned enemy by 51%'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase max HP by 15% while in combat.',
      'Reduce Valkyrie own ultimate skill and evasion skill cooldown by 20%'
    ]
  }, {
    set: 3,
    skills: [
      'When enemy on field is equal or greater than 3, reduce received elemental damage by 50% and increase elemental damage by 60%'
    ]
  }]
}, {
  name: 'Nuwa',
  stars: [4, 5],
  variations: [{
    name: 'Nuwa (T)',
    type: 'top',
    recommend: [sr],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 340,
      atk: 59,
      def: 71,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 535,
      atk: 93,
      def: 105,
      crt: '?',
      load: 12
    }],
    file: 'nuwa-t.png',
    skills: [
      'Cause an explosion when hit a burned enemy, deal 48 / 82 % fire elemental damage based on attack power to the surrounding enemy, cooldown 1.5 seconds'
    ]
  }, {
    name: 'Nuwa (M)',
    type: 'middle',
    recommend: [sr, fs],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 340,
      atk: '?',
      def: 71,
      crt: 4,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 535,
      atk: '?',
      def: 105,
      crt: 8,
      load: 12
    }],
    file: 'nuwa-m.png',
    skills: [
      'Increase fire elemental damage by 1% per hit in combo chain, stack up to 60 / 102 times'
    ]
  }, {
    name: 'Nuwa (B)',
    type: 'bottom',
    recommend: [sr],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 340,
      atk: 30,
      def: 71,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 535,
      atk: 46,
      def: 105,
      crt: 2,
      load: 12
    }],
    file: 'nuwa-b.png',
    skills: [
      'Increase fire elemental damage of burn debuff by 60 / 103 % and increase the duration by 60 / 103 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase Valkyrie own summoned unit all–damage by 50%'
    ]
  }, {
    set: 3,
    skills: [
      'When tag-in, increase Valkryja own all-damage by 20% per allied summoned unit (friend‘s included) stack up to 5 times'
    ]
  }]
}, {
  name: 'Shennong',
  stars: [4, 5],
  variations: [{
    name: 'Shennong (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 355,
      atk: 58,
      def: 51,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 558,
      atk: 92,
      def: 78,
      crt: '?',
      load: 12
    }],
    file: 'shennong-t.png',
    skills: [
      'When picking up SP item, increase physical damage by 44 / 61 %, defense power by 44 / 61 %, last for 10.0 seconds, cooldown 15 seconds'
    ]
  }, {
    name: 'Shennong (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 355,
      atk: '?',
      def: 51,
      crt: 6,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 557,
      atk: '?',
      def: 78,
      crt: 10,
      load: 12
    }],
    file: 'shennong-m.png',
    skills: [
      'When picking up coin, increase attack speed by 34 / 51 %, movement speed by 34 / 51 %, last for 7.0 seconds, cooldown 10 seconds'
    ]
  }, {
    name: 'Shennong (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 355,
      atk: 29,
      def: 51,
      crt: 3,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 558,
      atk: 46,
      def: 78,
      crt: 4,
      load: 12
    }],
    file: 'shennong-b.png',
    skills: [
      'After being attacked, grant a shield that can take all–damage based on 18 / 31 % of Valkyrie own max HP, last for 5 seconds, cooldown 12 seconds'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'When being attacked by weaken enemy, 40% chance to ignore its damage (elemental damage excluded)'
    ]
  }, {
    set: 3,
    skills: [
      'Increase the effect of HP and SP item by 50%'
    ]
  }]
}, {
  name: 'Jingwei',
  stars: [4, 5],
  variations: [{
    name: 'Jingwei (T)',
    type: 'top',
    recommend: [miko, vp, br],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 329,
      atk: 55,
      def: 28,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 523,
      atk: 87,
      def: 49,
      crt: '?',
      load: 12
    }],
    file: 'jingwei-t.png',
    skills: [
      'When enemy on field is 1 , increase all-damage by 18 / 31 %'
    ]
  }, {
    name: 'Jingwei (M)',
    type: 'middle',
    recommend: [miko],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 329,
      atk: '?',
      def: 28,
      crt: 6,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 523,
      atk: '?',
      def: 49,
      crt: 9,
      load: 12
    }],
    file: 'jingwei-m.png',
    skills: [
      'When enemy on-field not more than 3, increase moving speed by 18 / 31 %'
    ]
  }, {
    name: 'Jingwei (B)',
    type: 'bottom',
    recommend: [ya],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 329,
      atk: 27,
      def: 28,
      crt: 2,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 523,
      atk: 43,
      def: 48,
      crt: 4,
      load: 12
    }],
    file: 'jingwei-b.png',
    skills: [
      'When enemy on field is equal or less than 2, increase defense 24 / 41 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase attack speed by 10% per burned enemy, stack up to 5 times'
    ]
  }, {
    set: 3,
    skills: [
      'During lock on, reduce received damage from other enemy by 70%'
    ]
  }]
}, {
  name: 'Isaac Newton',
  stars: [4, 5],
  variations: [{
    name: 'Isaac Newton (T)',
    type: 'top',
    recommend: [ci, dp],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 348,
      atk: 58,
      def: 49,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 547,
      atk: 92,
      def: 76,
      crt: '?',
      load: 12
    }],
    file: 'newton-t.png',
    skills: [
      'Increase melee physical damage by 29 / 46 %. When being attacked two times, the effect will be disabled and enters 10.0 seconds cooldown'
    ]
  }, {
    name: 'Isaac Newton (M)',
    type: 'middle',
    recommend: [dp],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 348,
      atk: '?',
      def: 49,
      crt: 7,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 548,
      atk: '?',
      def: 76,
      crt: 11,
      load: 12
    }],
    file: 'newton-m.png',
    skills: [
      'After being attacked, increase movement speed by 41%, and grant a shield that can take physical damage based on 21% of Valkyrie own max HP, last for 4 seconds, cooldown 15 seconds'
    ]
  }, {
    name: 'Isaac Newton (B)',
    type: 'bottom',
    recommend: [vc, vp, sf, sd],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 348,
      atk: 29,
      def: 48,
      crt: 3,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 548,
      atk: 46,
      def: 76,
      crt: 5,
      load: 12
    }],
    file: 'newton-b.png',
    skills: [
      'Inflict 5.0 seconds dare status on on-hit enemy.',
      'During dare status, increase enemy all damage by 28 / 41 %, however, its received damage will also be increased by 22 / 31 %, last for 10 seconds'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Basic attack (branch attack and charge attack included) has 10% chance inflict any one of the paralysis, freeze, stun, slow, burn, vulnerable, weaken status on on-hit enemy, last for 6.0 seconds, cooldown 2 seconds'
    ]
  }, {
    set: 3,
    skills: [
      'Increase all-damage of the next basic attack (branch attack and charge attack included) by 20% per second, stack up to 5 times. The buff is removed upon attacking and enters 7.0 seconds cooldown'
    ]
  }]
}, {
  name: 'Schrodinger',
  stars: [4, 5],
  variations: [{
    name: 'Schrodinger (T)',
    type: 'top',
    recommend: [ss, bn, db, vt, memento],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 351,
      atk: 59,
      def: 41,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 552,
      atk: 92,
      def: 65,
      crt: '?',
      load: 12
    }],
    file: 'schrodinger-t.png',
    skills: [
      'Charge for 6 seconds, next basic attack (branch attack and charge attack included) and a short duration afterwards have 50% chance to increase all–damage by 120 / 205 %, otherwise increase by 26 / 52 %'
    ]
  }, {
    name: 'Schrodinger (M)',
    type: 'middle',
    recommend: [km, wc],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 351,
      atk: '?',
      def: 41,
      crt: 5,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 552,
      atk: '?',
      def: 65,
      crt: 9,
      load: 12
    }],
    file: 'schrodinger-m.png',
    skills: [
      'After activated ultimate skill or evasion skill, 50% chance to reduce cooldown by 34 / 51 %, otherwise increase by 20%'
    ]
  }, {
    name: 'Schrodinger (B)',
    type: 'bottom',
    recommend: [wc, dp],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 351,
      atk: 29,
      def: 41,
      crt: 2,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 552,
      atk: 46,
      def: 65,
      crt: 3,
      load: 12
    }],
    file: 'schrodinger-b.png',
    skills: [
      'Charge for 4.0 seconds, next basic attack (branch attack and charge attack included) has 50% chance to increase gained SP by 180 / 308 %, otherwise reduce gain by 100%'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'After being attacked, 50% chance reduce received damage by 70%, otherwise increase received damage by 40%'
    ]
  }, {
    set: 3,
    skills: [
      'Increase good effect triggered chance of all Stigmata in this Stigmata set by 10%. When equipped on Himeko, further increase by 10%'
    ]
  }]
}, {
  name: 'Schrodinger: Band',
  stars: [4, 5],
  variations: [{
    name: 'Schrodinger: Band (T)',
    type: 'top',
    recommend: [ir],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 261,
      atk: 67,
      def: 55,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 411,
      atk: 106,
      def: 89,
      crt: '?',
      load: 12
    }],
    file: 'schrodinger-band-top.png',
    skills: [
      'Every attack gains one stack (cooldown 0.3 second), each stack increases physical damage by 2%. After gained 7 stacks, enter Passionate Mode for 5 seconds. Under Passionate Mode, increase all-damage by 25%. After Passionate Mode ended, reset all effects. During Passionate Mode, damage up effect is not added'
    ]
  }, {
    name: 'Schrodinger: Band (M)',
    type: 'middle',
    recommend: [ir],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 322,
      atk: '?',
      def: 111,
      crt: 5,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 507,
      atk: '?',
      def: 177,
      crt: 8,
      load: 12
    }],
    file: 'schrodinger-band-center.png',
    skills: [
      'Every attack gains one stack (cooldown 0.3 second), each stack increases critical rate by 2%. After gained 7 stacks, enter Passionate Mode for 5 seconds. Under Passionate Mode, immune from immobilize effect, and reduce received all-damage by 15%. After Passionate Mode ended, reset all effects. During Passionate Mode, critical rate up effect is not added'
    ]
  }, {
    name: 'Schrodinger: Band (B)',
    type: 'bottom',
    recommend: [ir],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 322,
      atk: 34,
      def: 28,
      crt: 7,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 507,
      atk: 53,
      def: 44,
      crt: 11,
      load: 12
    }],
    file: 'schrodinger-band-bottom.png',
    skills: [
      'Every attack gains one stack (cooldown 0.3 second), each stack increases attack speed by 2%. After gained 7 stacks, enter Passionate Mode for 5 seconds. Under Passionate Mode, every attack gains additional 2 SP (cooldown 0.9). After Passionate Mode ended, reset all effects. During Passionate Mode, attack speed up effect is not added'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increases duration of Passionate Mode by 2 seconds, and effect of every stack of this stigmata set every hit by 1%. When enter Passionate Mode, the next attack and short duration afterwards, increase physical damage of branch attack by 50%'
    ]
  }, {
    set: 3,
    skills: [
      'Increase physical damage dealt against frozen enemy by 20%',
      'When equipped on Kiana or Kallen, increase all-damage of branch attack by 20%'
    ]
  }]
}, {
  name: 'Planck',
  stars: [4, 5],
  variations: [{
    name: 'Planck (T)',
    type: 'top',
    recommend: [br, ss, fs],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 354,
      atk: 59,
      def: 32,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 556,
      atk: 93,
      def: 54,
      crt: '?',
      load: 12
    }],
    file: 'planck-t.png',
    skills: [
      'Increase all damage by 3.6 / 6.2 % per 10.0% HP lost'
    ]
  }, {
    name: 'Planck (M)',
    type: 'middle',
    recommend: [sd, ss, db, wd, bn, vt, sf],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 354,
      atk: '?',
      def: 32,
      crt: 4,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 556,
      atk: '?',
      def: 65,
      crt: 7,
      load: 12
    }],
    file: 'planck-m.png',
    skills: [
      'Increase physical damage of basic attack (branch attack and charge attack included) by 34 / 51 %, however, received damage will also increase by 46 / 72 %'
    ]
  }, {
    name: 'Planck (B)',
    type: 'bottom',
    recommend: [ss, vt, br],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 354,
      atk: 30,
      def: 32,
      crt: 1,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 556,
      atk: 46,
      def: 54,
      crt: 2,
      load: 12
    }],
    file: 'planck-b.png',
    skills: [
      'Increase attack speed by 22 / 31 %, however, movement speed will also be reduced by 32 / 41 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'When being attacked, if the damage is less than 15*Valkyrie lvl, it will still be calculated but Valkyrie action will not be interrupted.',
      'When equipped on Bronya, increase all–damage of ranged attack by 15%'
    ]
  }, {
    set: 3,
    skills: [
      'Restore 5% HP when hit an enemy, cooldown 5.0 seconds.',
      'When equipped on Bronya, increase SP gained via attack by 30%'
    ]
  }]
}, {
  name: 'Zhugekongming',
  stars: [4, 5],
  variations: [{
    name: 'Zhugekongming (T)',
    type: 'top',
    recommend: [dp],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 351,
      atk: 59,
      def: 41,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 552,
      atk: 92,
      def: 65,
      crt: '?',
      load: 12
    }],
    file: 'zhugekongming-t.png',
    skills: [
      'Reduce evasion (defense) skill cooldown by 17 / 26 %'
    ]
  }, {
    name: 'Zhugekongming (M)',
    type: 'middle',
    recommend: [dp],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 351,
      atk: '?',
      def: 41,
      crt: 6,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 552,
      atk: '?',
      def: 65,
      crt: 10,
      load: 12
    }],
    file: 'zhugekongming-m.png',
    skills: [
      'When being attacked, 31% chance to reduce received damge by 120 / 418'
    ]
  }, {
    name: 'Zhugekongming (B)',
    type: 'bottom',
    recommend: [ya],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 351,
      atk: 29,
      def: 41,
      crt: 3,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 552,
      atk: 46,
      def: 65,
      crt: 5,
      load: 12
    }],
    file: 'zhugekongming-b.png',
    skills: [
      'When combo is above 20, increase defense by 24 / 41 %',
      'When combo is above 50, increase defense by 48 / 82 %',
      'When combo is above 100, increase defense by 72 /123%'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'After being attacked, increase endurance, last for 4 seconds, cooldown 10 seconds. When equipped on Kiana or Kallen, increase max HP by 30% while in combat'
    ]
  }, {
    set: 3,
    skills: [
      'When being attacked, 20% chance to knock back the surrounding enemy with 3m, cooldown 6 seconds'
    ]
  }]
}, {
  name: 'Lier Scarlet',
  stars: [4, 5],
  variations: [{
    name: 'Lier: Scarlet (T)',
    type: 'top',
    recommend: [sd, miko, fs, sr, vt],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 338,
      atk: 59,
      def: 42,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 532,
      atk: 93,
      def: 68,
      crt: '?',
      load: 12
    }],
    file: 'lier-scarlet-t.png',
    skills: [
      'Increase all–damage of basic attack (branch attack and charge attack included) by 23 / 36 %, however, max HP will also be reduced by 20%'
    ]
  }, {
    name: 'Lier: Scarlet (M)',
    type: 'middle',
    recommend: [sf, sd],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 338,
      atk: '?',
      def: 43,
      crt: 6,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 532,
      atk: '?',
      def: 68,
      crt: 11,
      load: 12
    }],
    file: 'lier-scarlet-m.png',
    skills: [
      'When around enemy, deal 60 / 103 % physical damage based on attack power to that enemy per second, and restore Valkyrie own HP by 12 / 20 per 3 seconds, however, max HP will also be reduced by 15%'
    ]
  }, {
    name: 'Lier: Scarlet (B)',
    type: 'bottom',
    recommend: [vc, ss, db, vt],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 338,
      atk: 30,
      def: 43,
      crt: 3,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 532,
      atk: 47,
      def: 68,
      crt: 5,
      load: 12
    }],
    file: 'lier-scarlet-b.png',
    skills: [
      'Increase Valkyrie own movement speed by 11 /15 %, attack speed by 16 / 20 %, however, max HP will also be reduced by 15%'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Reduce received physical damage by 25%, received indirect physical damage (bleeding, etc.) by 70%'
    ]
  }, {
    set: 3,
    skills: [
      'Activate when HP is below 5%, last for 6.0 seconds, cooldown 60 seconds. While this effect is activating, immune to death, increase critical rate and critical damage by 80%'
    ]
  }]
}, {
  name: 'Dark Jixuanyuan',
  stars: [4, 5],
  variations: [{
    name: 'Dark Jixuanyuan (T)',
    type: 'top',
    recommend: [dp],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 318,
      atk: 32,
      def: 19,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 500,
      atk: 50,
      def: 30,
      crt: '?',
      load: 12
    }],
    file: 'djxy-t.png',
    skills: [
      'When activating **Time Fracture**, deal 300 / 450 % physical damage based on attack power to surrounding enemy and knockback it, cooldown 20 seconds'
    ]
  }, {
    name: 'Dark Jixuanyuan (M)',
    type: 'middle',
    recommend: [dp, ve],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 350,
      atk: '?',
      def: 114,
      crt: 19,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 550,
      atk: '?',
      def: 180,
      crt: 29,
      load: 12
    }],
    file: 'djxy-m.png',
    skills: [
      'Increase critical rate by 15 / 30 % during **Time Fracture**'
    ]
  }, {
    name: 'Dark Jixuanyuan (B)',
    type: 'bottom',
    recommend: [dp, ve],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 350,
      atk: 29,
      def: 48,
      crt: 6,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 552,
      atk: 46,
      def: 74,
      crt: 9,
      load: 12
    }],
    file: 'djxy-b.png',
    skills: [
      'Increase movement speed by 15 / 30 %, attack speed by 10 / 25 % during **Time Fracture**'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase physical damage by 40% during completed **Time Fracture**.',
      'When equipped on Kiana or Kallen, increase SP gained via basic attack (branch attack and charged attack included) by 4, cooldown 2 seconds'
    ]
  }, {
    set: 3,
    skills: [
      'Reduce SP consumption when activating skill by 30% during **Time Fracture**'
    ]
  }]
}, {
  name: 'Sin Mal',
  stars: [4, 5],
  variations: [{
    name: 'Sin Mal (T)',
    type: 'top',
    recommend: [bn],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 215,
      atk: 74,
      def: 33,
      crt: 4,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 338,
      atk: 117,
      def: 53,
      crt: 7,
      load: 12
    }],
    file: 'sin-mal-t.png',
    skills: [
      'Increase all-damage by 15%, during stealth mode, further increase all-damage by 15% per second, stack up to 3 times, the effect continues for 4 seconds after broke out from stealth mode'
    ]
  }, {
    name: 'Sin Mal (M)',
    type: 'middle',
    recommend: [bn],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 307,
      atk: '?',
      def: 88,
      crt: 8,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 483,
      atk: '?',
      def: 140,
      crt: 13,
      load: 12
    }],
    file: 'sin-mal-m.png',
    skills: [
      'Reduce received all-damage by 20%, during stealth mode, further reduce received all-damage by 10%, increase movement speed by 30%, the effect continues for 6 seconds after broke out from stealth mode'
    ]
  }, {
    name: 'Sin Mal (B)',
    type: 'bottom',
    recommend: [bn],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 261,
      atk: 36,
      def: 33,
      crt: 10,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 411,
      atk: 53,
      def: 57,
      crt: 16,
      load: 12
    }],
    file: 'sin-mal-b.png',
    skills: [
      'During stealth mode, increase attack speed by 25%, critical rate by 20%, the effect continues for 6 seconds after broke out from stealth mode'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'After entered stealth mode, grant a charge',
      'After broke out from stealth mode, deal 200% physical damage based on attack power to all enemies',
      'Next basic attack (branch attack and charge attack included) and short duration afterwards, inflict 3 seconds shackle status on the target'
    ]
  }, {
    set: 3,
    skills: [
      'During stealth mode, restore Valkyrie own HP by 2%, SP by 2% per 0.9 second'
    ]
  }]
}, {
  name: 'Otto Apocalypse',
  stars: [4, 5],
  variations: [{
    name: 'Otto Apocalypse (T)',
    type: 'top',
    recommend: [vp, sf],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 261,
      atk: 72,
      def: 33,
      crt: 3,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 411,
      atk: 113,
      def: 53,
      crt: 4,
      load: 12
    }],
    file: 'otto-t.png',
    skills: [
      'Increase basic attack skill (not including charge attack, branch attack) physical damage by 20 / ? / ? / 35 %. Each basic attack skill gain 1 charge layer (cooldown 0.8s). When have 3 charge layer, increase the next charge attack all-damage by 45 / ? / ? / 75 %'
    ]
  }, {
    name: 'Otto Apocalypse (M)',
    type: 'middle',
    recommend: [vp],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 322,
      atk: '?',
      def: 99,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 507,
      atk: '?',
      def: 158,
      crt: 9,
      load: 12
    }],
    file: 'otto-m.png',
    skills: [
      'Basic attack skill (not including charge attack, branch attack) inflict weaken status to enemy, reduce their attack power by 20 / ? / ? / 30 %, last for 2 / ? / ? / 4 seconds, cooldown 2 seconds'
    ]
  }, {
    name: 'Otto Apocalypse (B)',
    type: 'bottom',
    recommend: [vp, sf],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 307,
      atk: 36,
      def: 33,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 483,
      atk: 57,
      def: 53,
      crt: 9,
      load: 12
    }],
    file: 'otto-b.png',
    skills: [
      'Increase lightning damage by 35 / ? / ? / 55 % when your summoned unit is on the field'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Each basic attack gain a charge layer (cooldown 0.8s). After reaching to 3 layers, on-hit charge attack will create a 3 m radius electric shock field, enemy inside the field take extra 40 % lightning damage'
    ]
  }, {
    set: 3,
    skills: [
      'Gain a charge every 5 seconds, enemy hit by the next charge attack, after a short period will be imbued with Azure Mark. Azure mark activate after 0.5 second, deal 80% lightning damage to enemy and its surrounding'
    ]
  }]
}, {
  name: 'Nagamitsu',
  stars: [4, 5],
  variations: [{
    name: 'Nagamitsu (T)',
    type: 'top',
    recommend: [le],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 338,
      atk: 60,
      def: 44,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 531,
      atk: 94,
      def: 70,
      crt: '?',
      load: 12
    }],
    file: 'nagamitsu-t.png',
    skills: [
      'Create a force field around self, that deal lightning elemental damage based on 70/?/?/125 % attack power per every 1.0 seconds, to any enemies within the force field more than 3.0 seconds, but effect wear-off when leaving force field more than 2.0 seconds'
    ]
  }, {
    name: 'Nagamitsu (M)',
    type: 'middle',
    recommend: [le, vp],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 384,
      atk: '?',
      def: 109,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 604,
      atk: '?',
      def: 175,
      crt: '?',
      load: 12
    }],
    file: 'nagamitsu-m.png',
    skills: [
      'Create a force field around self, that increase lightning elemental damage dealt by 15/?/?/30 % to any enemies within the force field more than 3.0 seconds, but effect wear-off when leaving force field more than 2.0 seconds'
    ]
  }, {
    name: 'Nagamitsu (B)',
    type: 'bottom',
    recommend: [le],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 384,
      atk: 22,
      def: 66,
      crt: 4,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 604,
      atk: 34,
      def: 105,
      crt: 7,
      load: 12
    }],
    file: 'nagamitsu-b.png',
    skills: [
      'Create a force field around self, that reduce incoming all-damage by 15/?/?/30 %, by any enemies within the force field more than 3.0 seconds, but effect wear-off when leaving force field more than 2.0 seconds'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Inflict 20% slow moving and attack speed, to any enemies within the force field more than 5.0 seconds, last for 4.0 seconds (trigger time reset after debuff expired), but trigger time reset when leaving force field more than 2.0 seconds'
    ]
  }, {
    set: 3,
    skills: [
      'Inflict 2.0 seconds freeze status (trigger time reset after debuff expired), to to any enemies within the force field more than 5.0 seconds, but trigger time reset when leaving force field more than 2.0 seconds'
    ]
  }]
}, {
  name: 'Kukuria',
  stars: [4, 5],
  variations: [{
    name: 'Kukuria (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 315,
      atk: 50,
      def: 33,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 495,
      atk: 79,
      def: 53,
      crt: '?',
      load: 12
    }],
    file: 'cacalia-t.png',
    skills: [
      'Increase basic attack (branch attack and charge attack included) physical damage by 11 / 14 / 17 / 20 %, when present of own summoned-units on-field, increase self critical damage by 10 / 15 / 20 / 25 %'
    ]
  }, {
    name: 'Kukuria (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 322,
      atk: '?',
      def: 71,
      crt: 3,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 507,
      atk: '?',
      def: 114,
      crt: 4,
      load: 12
    }],
    file: 'cacalia-m.png',
    skills: [
      'Increase maximum HP by 4 / 6 / 8 / 10 % while in combat, reduce incoming all-damage by 9 / 11 / 13 / 15 %'
    ]
  }, {
    name: 'Kukuria (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 292,
      atk: 22,
      def: 38,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 459,
      atk: 34,
      def: 61,
      crt: 9,
      load: 12
    }],
    file: 'cacalia-b.png',
    skills: [
      'Increase self attack speed by 7 / 9 / 11 / 13 %, Increase own summoned-units physical damage by 19 / ? / ? / 40 % after evasive move, last for 6.0 seconds, with 8.0 seconds cooldown'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Allied summoned-units while being-hit gain a barrier, during the barrier duration reduce incoming all-damage by 50%, last for 7.0 seconds, with 21.0 seconds cooldown'
    ]
  }, {
    set: 3,
    skills: [
      'When the barrier destroyed, create an explosion, dealing physical damage based on 500% attack power to the surrounding enemies'
    ]
  }]
}, {
  name: 'Kallen: Hymn',
  stars: [4, 5],
  variations: [{
    name: 'Kallen: Hymn (T)',
    type: 'top',
    recommend: [ch],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 276,
      atk: 70,
      def: 38,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 435,
      atk: 109,
      def: 61,
      crt: '?',
      load: 12
    }],
    file: 'kallen-gratia-t.png',
    skills: [
      'Self Valkyria & self summoned-units: Increase physical damage by 15 / ? / ? /20 %, further increase physical damage by 6 / ? / ? / 12 % against enemies inflicted with weaken status'
    ]
  }, {
    name: 'Kallen: Hymn (M)',
    type: 'middle',
    recommend: [ch],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 338,
      atk: '?',
      def: 109,
      crt: 3,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 531,
      atk: '?',
      def: 175,
      crt: 4,
      load: 12
    }],
    file: 'kallen-gratia-m.png',
    skills: [
      'Grant Evangelium barrier when entering combat, after withstanding incoming damage by 150 / ? / ? / 400, the barrier dematerialized and enter 6.0 seconds cooldown. During the present of Evangelium barrier, reduce self incoming damage by 20 / ? / ? / 30 %'
    ]
  }, {
    name: 'Kallen: Hymn (B)',
    type: 'bottom',
    recommend: [ch],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 292,
      atk: 26,
      def: 44,
      crt: 7,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 459,
      atk: 42,
      def: 70,
      crt: 11,
      load: 12
    }],
    file: 'kallen-gratia-b.png',
    skills: [
      'Increase self attack speed by 3 / ? / ? / 6 % and critical damage by 5%, per 1 enemy on-field inflicted with weaken status, up to 4 times multiplier'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'One-time SP consumption at least 15, 70, 125, increase allied (teammates / Valkyria) all-damage by 8%, 15%, 22%, last for 7.0 seconds, not stackable'
    ]
  }, {
    set: 3,
    skills: [
      'On-hit against enemies inflicted with weaken status, instantly recover 8% HP and 5% EP, with 8.0 seconds cooldown'
    ]
  }]
}, {
  name: 'Celine',
  stars: [4, 5],
  variations: [{
    name: 'Celine (T)',
    type: 'top',
    recommend: [ci, miko, sd],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 230,
      atk: 79,
      def: 22,
      crt: 3,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 362,
      atk: 125,
      def: 35,
      crt: 4,
      load: 12
    }],
    file: 'celine-t.png',
    skills: [
      'Increase melee physical damage by 15 / ? / ? / 25 %, increase physical damage against float status enemies additionally by 10 / ? / ? / 20 %'
    ]
  }, {
    name: 'Celine (M)',
    type: 'middle',
    recommend: [miko],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 338,
      atk: '?',
      def: 99,
      crt: 3,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 531,
      atk: '?',
      def: 158,
      crt: 4,
      load: 12
    }],
    file: 'celine-m.png',
    skills: [
      'Reduce incoming all-elemental damage by 15 / ? / ? / 30 %, when inflicted with status ailments 20% chance to instantly cleanse the status ailments'
    ]
  }, {
    name: 'Celine (B)',
    type: 'bottom',
    recommend: [miko, sd],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 276,
      atk: 36,
      def: 44,
      crt: 7,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 386,
      atk: 42,
      def: 70,
      crt: 11,
      load: 12
    }],
    file: 'celine-b.png',
    skills: [
      'Gain a proc after perfect evasive move, next basic attack and the following 5 seconds, increase all-damage by 20 / ? / ? / 35 %, with 1.5 seconds cooldown'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'When equipped on Mei or Sakura, hitting the same target (reset target if not attacking within 2.5 seconds), each hit increase critical chance by 3%, critical damage by 8%, maximum up to 15% bonus critical chance, 40% bonus critical damage'
    ]
  }, {
    set: 3,
    skills: [
      'When the Valkyria is on-field and HP above 60%, debuff on-field enemies outgoing with damage reduction by 15% and incoming damage amplification by 10%. This effect can’t be stacked'
    ]
  }]
}, {
  name: 'Mary Shelley',
  stars: [4, 5],
  variations: [{
    name: 'Mary Shelley (T)',
    type: 'top',
    recommend: [bs],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 315,
      atk: 52,
      def: 44,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 495,
      atk: 81,
      def: 70,
      crt: '?',
      load: 12
    }],
    file: 'mary-shelley-t.png',
    skills: [
      'Increases maximum HP in combat by 15%. Give the next attack instance additional physical damage based on 40 / ? / ? / 50 % maximum HP, has 5 / ? / ? / 3 seconds cooldown'
    ]
  }, {
    name: 'Mary Shelley (M)',
    type: 'middle',
    recommend: [bs],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 322,
      atk: '?',
      def: 77,
      crt: 4,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 507,
      atk: '?',
      def: 123,
      crt: 7,
      load: 12
    }],
    file: 'mary-shelley-m.png',
    skills: [
      'Increases maximum HP in combat by 5%. Creates a shield that can absorb all-damage. The shield destroyed only when the attack is greater than 15 / ? / ? / 25 % of holder maximum health. Shield re-activation after destruction takes 40 / ? / ? /30 seconds'
    ]
  }, {
    name: 'Mary Shelley (B)',
    type: 'bottom',
    recommend: [bs],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 322,
      atk: 26,
      def: 11,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 5,
      atk: 42,
      def: 18,
      crt: 9,
      load: 12
    }],
    file: 'mary-shelley-b.png',
    skills: [
      'Increases maximum HP in combat by 10%. At the start of the match, while on-field and not-on-field, give entire squad 20 / ? / ? / 40 DEF stat per each 5 seconds. Stack up to 5 times. Effect last till the end of the match'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'When there is an enemy nearby,  creates a beacon around self per every 4 seconds, deal lightning damage equal to 40% attack power to all nearby enemies'
    ]
  }, {
    set: 3,
    skills: [
      'When there are 7 beacons on field, wielder will go into Frankenstein mode: Increases basic attack (charge attack and branch attack included) all-damage by 40%, heal the whole squad for 1% of their max HP per 1.0 second. Last for 10 seconds. Consumes all of the beacon when Frankenstein mode duration runs out'
    ]
  }]
}, {
  name: 'Tesla: Band',
  stars: [4, 5],
  variations: [{
    name: 'Tesla: Band (T)',
    type: 'top',
    recommend: [vt, vc],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 307,
      atk: 67,
      def: 44,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 483,
      atk: 106,
      def: 70,
      crt: '?',
      load: 12
    }],
    file: 'tesla-band-top.png',
    skills: [
      'While off-field, increase all squad member physical damage by 10% (Effect can’t be stacked)',
      'While on field, increase physical damage and attack speed by 15%'
    ]
  }, {
    name: 'Tesla: Band (M)',
    type: 'middle',
    recommend: [le, dp],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 322,
      atk: '?',
      def: 99,
      crt: 4,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 507,
      atk: '?',
      def: 158,
      crt: 7,
      load: 12
    }],
    file: 'tesla-band-center.png',
    skills: [
      'While off-field, increase all squad member lightning resistance and lightning damage by 15% (Effect can’t be stacked)',
      'While on field, decrease receiving physical damage by 25%'
    ]
  }, {
    name: 'Tesla: Band (B)',
    type: 'bottom',
    recommend: [vp, le, sf],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 307,
      atk: 34,
      def: 33,
      crt: 6,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 483,
      atk: 53,
      def: 53,
      crt: 9,
      load: 12
    }],
    file: 'telsa-band-bottom.png',
    skills: [
      'While off-field, increase all squad member movement speed by 10% (Effect can’t be stacked)',
      'While on field, increase lightning damage by 35% and movement speed by 10%'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Every attack (branch attack and charge attack included) gains 1 chord charge (cooldown 1 second).',
      'After gaining 4 charge, all charges will be released, release a chain lightning attacking 4 random targets, inflict paralyze status for 5 seconds.',
      'Chain lightning deals 600% lightning damage based on attack power, reduces damage by 20% for each jump, has a 15 seconds cooldown',
      '',
      ''
    ]
  }, {
    set: 3,
    skills: [
      'While in combat, increase maximum HP by 20%, lightning damage by 40%.',
      'Chain lightning no longer reduces damage per jump'
    ]
  }]
}, {
  name: 'One Year Anniversary',
  stars: [4, 5],
  variations: [{
    name: 'Kiana: One Year Anniversary (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 261,
      atk: 53,
      def: 41,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 411,
      atk: 83,
      def: 66,
      crt: '?',
      load: 12
    }],
    file: 'kiana-one-year-anniversary.png',
    skills: [
      'While on-field HP is above 800, for each additional 400 HP, increase physical damage by 1 / 4 %, stack up to 7 times'
    ]
  }, {
    name: 'Mei: One Year Anniversary (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 261,
      atk: '?',
      def: 124,
      crt: 3,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 411,
      atk: '?',
      def: 199,
      crt: 7,
      load: 12
    }],
    file: 'mei-one-year-anniversary.png',
    skills: [
      'While on-field HP is above 800, for each additional 400 HP, reduce receiving physical damage from direct attack by 1 / 4 %, stack up to 7 times'
    ]
  }, {
    name: 'Bronya: One Year Anniversary (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 292,
      atk: 26,
      def: 28,
      crt: 5,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 459,
      atk: 42,
      def: 44,
      crt: 8,
      load: 12
    }],
    file: 'bronya-one-year-anniversary.png',
    skills: [
      'While on-field HP is above 800, for each additional 400 HP, increase attack speed by 1 / 2%, stack up to 7 times'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase CRIT stat by 30',
      'Increase critical damage by 40%'
    ]
  }, {
    set: 3,
    skills: [
      'Increase on-field HP by 15%',
      'Reduce skill-activation load by 30%'
    ]
  }]
}, {
  name: 'Kallen Pledge',
  stars: [4, 5],
  variations: [{
    name: 'Kallen Pledge (T)',
    type: 'top',
    recommend: [wc],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 348,
      atk: 58,
      def: 48,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 547,
      atk: 91,
      def: 75,
      crt: '?',
      load: 12
    }],
    file: 'kallen-pledge-t.png',
    skills: [
      'Basic attack (branch attack and charge attack included) 26 / ? / ? / 52 % chance on-hit to deal physical damage based on 72 / ? / ? / 123 % attack power to the target and surrounding enemies, with 2.0 seconds cooldown'
    ]
  }, {
    name: 'Kallen Pledge (M)',
    type: 'middle',
    recommend: [wc],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 348,
      atk: '?',
      def: 48,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 547,
      atk: '?',
      def: 75,
      crt: 10,
      load: 12
    }],
    file: 'kallen-pledge-m.png',
    skills: [
      'Increase maximum HP by 20% while in combat',
      'When inflicted with status ailments, 18 / ? / ? / 31 % chance to instantly cleanse the status ailments'
    ]
  }, {
    name: 'Kallen Pledge (B)',
    type: 'bottom',
    recommend: [miko, vb],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 348,
      atk: 29,
      def: 48,
      crt: 3,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 547,
      atk: 46,
      def: 75,
      crt: 5,
      load: 12
    }],
    file: 'kallen-pledge-b.png',
    skills: [
      'Increase physical damage dealt against elites by 12 / ? / ? / 21 %, and reduce incoming damage from elites by 12 / ? / ? / 21 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase critical rate by 8%, per 1 elite on-field, up to 4 times multiplier'
    ]
  }, {
    set: 3,
    skills: [
      'Increase basic attack (branch attack and charge attack included) physical damage by 15%, per 1 elite on-killed, up to 3 times multiplier, last for 120 seconds (increase stack will not reset the lasting duration)'
    ]
  }]
}, {
  name: 'Sanada Yukimura',
  stars: [4, 5],
  variations: [{
    name: 'Sanada Yukimura (T)',
    type: 'top',
    recommend: [wc],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 127,
      atk: 75,
      def: 31,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 200,
      atk: 119,
      def: 50,
      crt: '?',
      load: 12
    }],
    file: 'sanada-yukimura-t.png',
    skills: [
      'Engage in combat increase basic attack (branch attack and charge attack included) physical damage by 20 / ? / ? / 35 %, last for 15.0seconds, with 30.0 seconds cooldown'
    ]
  }, {
    name: 'Sanada Yukimura (M)',
    type: 'middle',
    recommend: [wc],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 317,
      atk: 12,
      def: 127,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 500,
      atk: 19,
      def: 200,
      crt: 19,
      load: 12
    }],
    file: 'sanada-yukimura-m.png',
    skills: [
      'Engage in combat increase critical rate by 10 / ? / ? / 25 %, last for 15.0 seconds, with 30.0 seconds'
    ]
  }, {
    name: 'Sanada Yukimura (B)',
    type: 'bottom',
    recommend: [wc],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 190,
      atk: 31,
      def: 47,
      crt: 9,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 300,
      atk: 50,
      def: 74,
      crt: 14,
      load: 12
    }],
    file: 'sanada-yukimura-b.png',
    skills: [
      'Engage in combat increase defense by 150 / ? / ? / 300 %, last for 15 seconds, with 30.0 seconds'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Negate one single incoming damage more than 20% HP, with 25.0 seconds cooldown'
    ]
  }, {
    set: 3,
    skills: [
      'Increase this set all stigmata’s effect by 10%',
      'When equipped on Mei, increase maximum HP by 20% while in combat'
    ]
  }]
}, {
  name: 'Siegfried Kaslana',
  stars: [4, 5],
  variations: [{
    name: 'Siegfried Kaslana (T)',
    type: 'top',
    recommend: [vr],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 298,
      atk: 76,
      def: 40,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 469,
      atk: 119,
      def: 65,
      crt: '?',
      load: 12
    }],
    file: 'siegfried-t.png',
    skills: [
      'Reduce weapon skill SP consumption by 10 / ? / ? / 25 %',
      'After activating weapon skill, increase attack speed by 20 / ? / ? / 35 %, last for 6.0 seconds'
    ]
  }, {
    name: 'Siegfried Kaslana (M)',
    type: 'middle',
    recommend: [vp, vr],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 298,
      atk: '?',
      def: 121,
      crt: 13,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 469,
      atk: '?',
      def: 170,
      crt: 24,
      load: 12
    }],
    file: 'siegfried-m.png',
    skills: [
      'Reduce weapon skill cooldown by 10 / ? / ? / 40 %',
      'After activating weapon skill, increase defense by 30 / ? / ? / 50 %, last for 6.0 seconds'
    ]
  }, {
    name: 'Siegfried Kaslana (B)',
    type: 'bottom',
    recommend: [vr],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 298,
      atk: 38,
      def: 40,
      crt: 10,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 469,
      atk: 59,
      def: 65,
      crt: 14,
      load: 12
    }],
    file: 'siegfried-b.png',
    skills: [
      'Increase weapon skill all-damage by 20 / ? / ? / 35 %',
      'After activating weapon skill, increase moving speed by 10 / ? / ? / 20 %, last for 6.0 seconds'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Activate another weapon skill within 10.0 seconds increase the next weapon skill for all-damage by 20%, up to 5 times multiplier, increase stack will reset the lasting duration'
    ]
  }, {
    set: 3,
    skills: [
      'Activate weapon skill 6 times gains a 20.0 seconds hero status (60.0 seconds cooldown), increase physical damage by 70%, attack speed and moving speed by 25%, and immune to most status ailments'
    ]
  }]
}, {
  name: 'Cecilia Schariac',
  stars: [4, 5],
  variations: [{
    name: 'Cecilia Schariac (T)',
    type: 'top',
    recommend: [dp, ir, miko],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 386,
      atk: 61,
      def: 48,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 607,
      atk: 96,
      def: 75,
      crt: '?',
      load: 12
    }],
    file: 'cecilia-t.png',
    skills: [
      'A pair of black-white orbs float above Valkyrie (Require 2 stigmata pieces to illuminate the orbs): When black orbs are illuminated, increase basic attack physical damage by 20 / ? / ? / 45 %; else when white orbs are illuminated, increase branch attack physical damage by 20 / ? / ? / 45 %'
    ]
  }, {
    name: 'Cecilia Schariac (M)',
    type: 'middle',
    recommend: [dp, ir, miko],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 386,
      atk: '?',
      def: 48,
      crt: 7,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 607,
      atk: '?',
      def: 75,
      crt: 11,
      load: 12
    }],
    file: 'cecilia-m.png',
    skills: [
      'A pair of black-white orbs float above Valkyrie (Require 2 stigmata pieces to illuminate the orbs): When black orbs are illuminated, basic attack gains additional 1 / 2 / 3 / 4 EP, with 2.0 seconds cooldown; else when white orbs are illuminated, branch attack recover 0.5 / 1.0 / 1.5 / 2.0 % own HP, with 2.0 seconds cooldown'
    ]
  }, {
    name: 'Cecilia Schariac (B)',
    type: 'bottom',
    recommend: [miko, dp, ir],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 386,
      atk: 30,
      def: 48,
      crt: 4,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 607,
      atk: 48,
      def: 75,
      crt: 6,
      load: 12
    }],
    file: 'cecilia-b.png',
    skills: [
      'A pair of black-white orbs float above Valkyrie (Require 2 stigmata pieces to illuminate the orbs): When black orbs are illuminated, increase attack speed by 15 / 20 / 25 / 30 %; else when white orbs are illuminated, reduce incoming all-damage by 20 / ? / ? / 40 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Illuminate the pair of black-white orbs: When black orbs are illuminated, basic attack 10% chance on-hit against non-BOSS enemy to deal additional physical damage based on 1,000% attack power, with 5.0 seconds cooldown; else when white orbs are illuminated, increase branch attack critical rate by 30%'
    ]
  }, {
    set: 3,
    skills: [
      'While on-field, each times the pair of black-white orbs alternate between black and white, increase own all-damage by 12%, up to 3 times multiplier, tag-out will reset the stack.'
    ]
  }]
}, {
  name: 'Nohime',
  stars: [4, 5],
  variations: [{
    name: 'Nohime (T)',
    type: 'top',
    recommend: [memento],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 375,
      atk: 46,
      def: 77,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 607,
      atk: 73,
      def: 112,
      crt: '?',
      load: 12
    }],
    file: 'nouhime-t.png',
    skills: [
      'Basic attack (branch attack and charge attack included) 10 / ? / ? / 15 % chance on-hit to inflict freeze status to an enemy, last for 4.0 seconds, with 8.0 seconds proc cooldown',
      'Increase basic attack (branch attack and charge attack included) all-damage dealt against freeze status enemies by 20 / ? / ? / 40 %'
    ]
  }, {
    name: 'Nohime (M)',
    type: 'middle',
    recommend: [memento],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 375,
      atk: '?',
      def: 77,
      crt: 3,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 590,
      atk: '?',
      def: 112,
      crt: 6,
      load: 12
    }],
    file: 'nouhime-m.png',
    skills: [
      'Add additional ice elemental damage based on 50 / ? / ? / 80 % attack power on-hit, with 1.0 seconds cooldown'
    ]
  }, {
    name: 'Nohime (B)',
    type: 'bottom',
    recommend: [memento],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 375,
      atk: 23,
      def: 77,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 590,
      atk: 36,
      def: 112,
      crt: 1,
      load: 12
    }],
    file: 'nouhime-b.png',
    skills: [
      'Increase moving speed by 5 / ? / ? / 10 % and ice elemental damage by 15 / ? / ? / 25 %, per 1 enemy on-field inflicted with slow-moving or freeze status, up to 3 times multiplier'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'When surrounding has enemies, dealing ice elemental damage based on 60% attack power per every 1.0 seconds to them, and 30% chance to inflict slow-moving status to them, last for 4.0 seconds'
    ]
  }, {
    set: 3,
    skills: [
      'Increase maximum HP by 20% while in combat',
      'Increase ice elemental damage by 80%'
    ]
  }]
}, {
  name: 'Yae Sakura',
  stars: [4, 5],
  variations: [{
    name: 'Yae Sakura (T)',
    type: 'top',
    recommend: [miko],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 298,
      atk: 76,
      def: 40,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 469,
      atk: 119,
      def: 65,
      crt: '?',
      load: 12
    }],
    file: 'sakura-t.png',
    skills: [
      '40% chance being-hit by enemies inflicted with Cherry Blossoms Mark to reduce physical damage by 40 / ? / ? / 80 %, and inflict 1.0 seconds stun status to them'
    ]
  }, {
    name: 'Yae Sakura (M)',
    type: 'middle',
    recommend: [miko],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 298,
      atk: '?',
      def: 121,
      crt: 13,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 469,
      atk: '?',
      def: 170,
      crt: 24,
      load: 12
    }],
    file: 'sakura-m.png',
    skills: [
      'Basic attack (branch attack and charge attack included against enemies inflicted with Cherry Blossoms Mark deals additional lightning elemental damage based on 50 / ? / ? / 80 % attack power, with 1.0 seconds cooldown, and 20% chance, to deal the same amount of lightning elemental damage to the surrounding enemies'
    ]
  }, {
    name: 'Yae Sakura (B)',
    type: 'bottom',
    recommend: [miko],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 298,
      atk: 38,
      def: 40,
      crt: 10,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 469,
      atk: 59,
      def: 65,
      crt: 14,
      load: 12
    }],
    file: 'sakura-b.png',
    skills: [
      'Increase all-damage by 4 / ? / ? / 7 %, per 1 enemies on-field inflicted with Cherry Blossoms Mark, up to 5 times multiplier'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase maximum HP by 20% while in combat',
      'Increase lightning elemental damage dealt against enemies inflicted with Cherry Blossoms Mark by 50%'
    ]
  }, {
    set: 3,
    skills: [
      'On-killed 1 elite restore 30% HP, with 10.0 seconds cooldown'
    ]
  }]
}, {
  name: 'Seele Vollerei',
  stars: [4, 5],
  variations: [{
    name: 'Seele Vollerei (T)',
    type: 'top',
    recommend: [vt, vr],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 175,
      atk: 58,
      def: 24,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 276,
      atk: 91,
      def: 43,
      crt: '?',
      load: 12
    }],
    file: 'seele-vollerei-t.png',
    skills: [
      'When maximum SP is more than 150 while in combat, each additional 20 EP increase physical damage by 3 / 4 / 5 / 6 %, up to 6 times multiplier'
    ]
  }, {
    name: 'Seele Vollerei (M)',
    type: 'middle',
    recommend: [vt, vr],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 526,
      atk: '?',
      def: 60,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 526,
      atk: '?',
      def: 91,
      crt: 10,
      load: 12
    }],
    file: 'seele-vollerei-m.png',
    skills: [
      'When maximum SP is more than 150 while in combat, each additional 20 SP reduce incoming physical damage by 2 / 3 / 4 / 5 %, up to 6 times multiplier'
    ]
  }, {
    name: 'Seele Vollerei (B)',
    type: 'bottom',
    recommend: [vt, vr],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 351,
      atk: 29,
      def: 38,
      crt: 3,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 552,
      atk: 59,
      def: 62,
      crt: 5,
      load: 12
    }],
    file: 'seele-vollerei-b.png',
    skills: [
      'When maximum SP is more than 150 while in combat, each additional 20 EP increase attack speed by 1 / 2 / 3 / 4 %, up to 6 times multiplier'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase moving speed by 30%.',
      'Right before being-hit will randomly teleport Valkyrie to nearest location, with 10.0 seconds cooldown'
    ]
  }, {
    set: 3,
    skills: [
      'The 3.0 seconds after activate ultimate, or weapon skill’s instant damage, gains increase all-damage based on how many remaining EP, gain 15% all-damage for each 20% remaining EP'
    ]
  }]
}, {
  name: 'Einstein: Band',
  stars: [4, 5],
  variations: [{
    name: 'Einstein: Band (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 285,
      atk: 65,
      def: 43,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 448,
      atk: 101,
      def: 70,
      crt: '?',
      load: 12
    }],
    file: 'einstein-band-t.png',
    skills: [
      'Summon an AI combat assistant and unlock its particle charge attack perk, that will deal huge amount of physical damage',
      'When enemy on-field not less than 2, increase Valkyrie all-damage by 10 / 15 / 20 / 25 %'
    ]
  }, {
    name: 'Einstein: Band (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 398,
      atk: '?',
      def: 109,
      crt: 4,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 621,
      atk: '?',
      def: 175,
      crt: 6,
      load: 12
    }],
    file: 'einstein-band-m.png',
    skills: [
      'Summon an AI combat assistant and unlock its particle shockwave attack perk, that will deal AoE physical damage and knockdown the enemies',
      'When enemy on-field not less than 3, randomly inflict 1.0 / ? / ? / 3.0 seconds float and space-time slow status to an enemy per every 6.0 seconds'
    ]
  }, {
    name: 'Einstein: Band (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 263,
      atk: 28,
      def: 54,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 414,
      atk: 45,
      def: 87,
      crt: 11,
      load: 12
    }],
    file: 'einstein-band-b.png',
    skills: [
      'Summon an AI combat assistant and unlock its particle beam attack perk, that will deal rapid physical damage',
      'When enemy not on-field less than 4, Valkyrie 10 / 15 / 20 / 25 % chance to nullify incoming damage'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'AI combat assistant’s particle charge, shockwave, and beam attack has 30% chance to deal double damage'
    ]
  }, {
    set: 3,
    skills: [
      'Remove this set all stigmata’s enemy on-field trigger condition',
      'increase Valkyrie all-damage by 15 %'
    ]
  }]
}, {
  name: 'Kepler',
  stars: [4, 5],
  variations: [{
    name: 'Kepler (T)',
    type: 'top',
    recommend: [sf, km, ve],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 219,
      atk: 74,
      def: 21,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 345,
      atk: 116,
      def: 35,
      crt: '?',
      load: 12
    }],
    file: 'kepler-t.png',
    skills: [
      'Critical hit additionally deal physical damage based on 110 / ? / ? / 200 % attack power to the target and enemies within 3.0 meter radius, with 3.0 seconds cooldown'
    ]
  }, {
    name: 'Kepler (M)',
    type: 'middle',
    recommend: [sf, km, ve],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 329,
      atk: '?',
      def: 76,
      crt: 9,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 517,
      atk: '?',
      def: 122,
      crt: 15,
      load: 12
    }],
    file: 'kepler-m.png',
    skills: [
      'Critical hit inflict 2.0 seconds paralysis status to the target and enemies within 3.0 meter radius, with 7.0 / ? / ? / 4.0 seconds cooldown'
    ]
  }, {
    name: 'Kepler (B)',
    type: 'bottom',
    recommend: [dp, vr, ya],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 263,
      atk: 33,
      def: 43,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 414,
      atk: 52,
      def: 70,
      crt: 11,
      load: 12
    }],
    file: 'kepler-b.png',
    skills: [
      'Critical hit restore 130 / ? / ? / 250 HP, with 6.0 seconds cooldown'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase critical damage by 55%'
    ]
  }, {
    set: 3,
    skills: [
      'Critical hit inflict trial status to non-BOSS enemies. Trial status deal 15% physical damage based on attack power per second, last for 30.0 seconds, 5 seconds cooldown',
      'Increase critical rate by 6%, per 1 enemy on-field inflicted with trial status, stack up to 5 times'
    ]
  }]
}, {
  name: 'Pool Party',
  stars: [4, 5],
  variations: [{
    name: 'Kiana: Pool Party (T)',
    type: 'top',
    recommend: [wc],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 329,
      atk: 62,
      def: 43,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 517,
      atk: 98,
      def: 70,
      crt: '?',
      load: 12
    }],
    file: 'kiana-pool-party-t.png',
    skills: [
      'On-killed normal enemies restore 5 / 6 / 7 / 8 EP, on-killed elites and BOSS restore 15 / 18 / 21 / 24 EP'
    ]
  }, {
    name: 'Mei: Pool Party (M)',
    type: 'middle',
    recommend: [vp, sf, memento],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 416,
      atk: '?',
      def: 87,
      crt: 4,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 655,
      atk: '?',
      def: 140,
      crt: 6,
      load: 12
    }],
    file: 'mei-pool-party-m.png',
    skills: [
      'Increase outgoing all-damage by 12 / 14 / 16 / 18 %',
      'On-hit enemies increase their receiving all-damage by 10 / ? / ? / 15 % within the next 4.0 seconds, with 8.0 seconds cooldown'
    ]
  }, {
    name: 'Bronya: Pool Party (B)',
    type: 'bottom',
    recommend: [le],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 307,
      atk: 28,
      def: 49,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 483,
      atk: 45,
      def: 78,
      crt: 11,
      load: 12
    }],
    file: 'bronya-pool-party-b.png',
    skills: [
      'All on-field squad members have 10 / ? / ? / 15 % chance on-hit to inflict 30 / 40 / 50 / 60 % moving speed slow, last for 3.0seconds, with 10.0 seconds cooldown, not stackable'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      '12% chance on-hit to summon a Homu King knockdown the surrounding enemies and dealing physical damage based on 450% attack power, with 16.0 seconds cooldown'
    ]
  }, {
    set: 3,
    skills: [
      'When Homu King appear all squad members (clone units included) gain a fire barrier, dealing 893 fire elemental damage per every 0.5 seconds to the surrounding enemies, fire barrier last for 6.0 seconds'
    ]
  }]
}, {
  name: 'Zhangheng',
  stars: [4, 5],
  variations: [{
    name: 'Zhangheng (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 245,
      atk: 74,
      def: 32,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 386,
      atk: 116,
      def: 52,
      crt: '?',
      load: 12
    }],
    file: 'zhang-heng-t.png',
    skills: [
      'When consecutive hit less than 20, increase non-tag-in attack all-damage by 10 / ? / ? / 25 %'
    ]
  }, {
    name: 'Zhangheng (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 291,
      atk: '?',
      def: 98,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 458,
      atk: '?',
      def: 157,
      crt: 11,
      load: 12
    }],
    file: 'zhang-heng-m.png',
    skills: [
      'When consecutive hit less than 20, reduce incoming physical damage from enemies by 18 / ? / ? / 30 %'
    ]
  }, {
    name: 'Zhangheng (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 291,
      atk: 31,
      def: 43,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 458,
      atk: 49,
      def: 70,
      crt: 11,
      load: 12
    }],
    file: 'zhang-heng-b.png',
    skills: [
      'When consecutive hit less than 20, within the 2.0 seconds after perfect evasive move, increase lightning elemental damage by 80 / ? / ? / 120 %'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'When surrounding have enemies, with self as center cause a 3.0 meter radius shockwave every 5.0 seconds, for each 3 shockwave: the 1st & 2nd shockwave knockdown non-BOSS enemies, the 3rd shockwave inflict 3.0 seconds faint status to the non-BOSS enemies'
    ]
  }, {
    set: 3,
    skills: [
      'When enemy on-field equal or more than 3, increase allied (teammates / Valkyria) physical damage by 15%, critical damage by 25%, not stackable.'
    ]
  }]
}, {
  name: 'Dracula',
  stars: [4, 5],
  variations: [{
    name: 'Dracula (T)',
    type: 'top',
    recommend: [ve],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 276,
      atk: 57,
      def: 54,
      crt: 5,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 434,
      atk: 90,
      def: 87,
      crt: 8,
      load: 12
    }],
    file: 'dracula-t.png',
    skills: [
      'Increase physical damage against bleeding status enemies by 25 / ? / ? / 40 %'
    ]
  }, {
    name: 'Dracula (M)',
    type: 'middle',
    recommend: [ve],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 276,
      atk: '?',
      def: 109,
      crt: 8,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 434,
      atk: '?',
      def: 175,
      crt: 13,
      load: 12
    }],
    file: 'dracula-m.png',
    skills: [
      'On-hit bleeding status enemies, restore own 1.5 / ? / ? / 3.0 % HP, 1.5 / ? / ? / 3.0 % SP, with 4.o seconds cooldown'
    ]
  }, {
    name: 'Dracula (B)',
    type: 'bottom',
    recommend: [ve],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 276,
      atk: 23,
      def: 76,
      crt: 8,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 434,
      atk: 37,
      def: 122,
      crt: 13,
      load: 12
    }],
    file: 'dracula-b.png',
    skills: [
      'Increase attack speed by 6 / ? / ? / 12 % and critical rate by 2.0 / ? / ? / 4.0 %, per 1 enemy on-field inflicted with bleeding status, up to 3 times multiplier'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'On-killed enemy summon a vampire bat with 60.0 seconds duration, at the same time refresh all vampire bats duration',
      'Vampire bat deal physical damage based on 50% attack power from the equipped Valkyrie, and also inherit buff from the equipped Valkyrie',
      'Maximum 3 vampire bats on-field, each vampire bats increase the equipped Valkyrie critical damage by 15%'
    ]
  }, {
    set: 3,
    skills: [
      'Instant trigger resurrection when HP below 1%, during resurrection period gain reduce incoming all-damage by 100%, but unable to attack or move, each seconds recover the equipped Valkyrie 20% HP, upon resurrection completed knockback and inflict 5.0 seconds bleeding status to the surrounding enemies, dealing physical damage based on 20% attack power per every 1.0 seconds, with 300.0 seconds cooldown'
    ]
  }]
}, {
  name: 'Bronya: Shadow',
  stars: [4, 5],
  variations: [{
    name: 'Bronya: Shadow (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 245,
      atk: 71,
      def: 21,
      crt: 4,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 386,
      atk: 113,
      def: 35,
      crt: 6,
      load: 12
    }],
    file: 'dbronya-t.png',
    skills: [
      'Increase ranged basic attack (branch attack and charged attack included) physical damage by 20 / ? / ? / 38 %'
    ]
  }, {
    name: 'Bronya: Shadow (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 291,
      atk: '?',
      def: 76,
      crt: 11,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 458,
      atk: '?',
      def: 122,
      crt: 17,
      load: 12
    }],
    file: 'dbronya-m.png',
    skills: [
      'Grant whole squad members an one-time dark domain, reduce all-damage inside dark domain by 11 / ? / ? / 20 %. Skill doesn’t stack with itself'
    ]
  }, {
    name: 'Bronya: Shadow (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 261,
      atk: 38,
      def: 32,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 410,
      atk: 60,
      def: 52,
      crt: 11,
      load: 12
    }],
    file: 'dbronya-b.png',
    skills: [
      'Create a dark field after stay within a small radius for 3.0 seconds, increase attack speed inside the dark field by 20 / ? / ? / 30 %, and will lose the effect if move outside of the dark field (Only affected dark field creator Valkyrie)'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'When equipped Rocket Launcher or Cluster Missile Pod, after charged attack, within the 1.0 ~ 4.0 seconds duration, the next charged attack all-damage increase by 15%, buff stackable and duration refresh upon new stack, up to 3 times multiplier'
    ]
  }, {
    set: 3,
    skills: [
      'When equipped on Bronya, increase critical damage by 60%'
    ]
  }]
}, {
  name: 'Performance Form',
  stars: [4, 5],
  variations: [{
    name: 'White Comet • Burst Form (T)',
    type: 'top',
    recommend: [ci],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 315,
      atk: 50,
      def: 38,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 495,
      atk: 79,
      def: 61,
      crt: '?',
      load: 12
    }],
    file: 'transcendental-t.png',
    skills: [
      'When perform perfect evasive move, create an explosion around self deal physical damage 90 / ? / ? / 180 % based on attack power, cooldown 8 / ? / ? / 4 seconds'
    ]
  }, {
    name: 'Yamabuki • Iron Wall Form (M)',
    type: 'middle',
    recommend: [ci],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 322,
      atk: '?',
      def: 77,
      crt: 3,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 507,
      atk: '?',
      def: 123,
      crt: 4,
      load: 12
    }],
    file: 'transcendental-m.png',
    skills: [
      'Reduce incoming physical damage from enemy with lower %HP (compared to your own current %HP) by 15 / ? / ? / 30 %'
    ]
  }, {
    name: 'Crimson • Transcend Form (B)',
    type: 'bottom',
    recommend: [ci],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 292,
      atk: 22,
      def: 44,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 459,
      atk: 34,
      def: 70,
      crt: 9,
      load: 12
    }],
    file: 'transcendental-b.png',
    skills: [
      'Increase critical damage by 20 / ? / ? / 50 % against enemy with lower %HP (compared to your current %HP)'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'There are 3 separate effects that tied in with each stigmata piece', 
      'all share the same 10 second cooldown:',
      '• **Kiana Stigmata:** After performing a perfect evasive move, increase out going physical damage by 45% for 5 seconds',
      '• **Mei Stigmata:** After using branch attack, regenerate 30 HP per second, last for 5 seconds',
      '• **Bronya Stigmata:** When receiving an attack, reduce that attack all-damage by 30%, increase attack speed by 25% for 5 seconds',
      ''
    ]
  }, {
    set: 3,
    skills: [
      'Increase total HP by 15%, critical chance by 10% while in battle'
    ]
  }]
}, {
  name: 'Picasso',
  stars: [4, 5],
  variations: [{
    name: 'Picasso (T)',
    type: 'top',
    recommend: [db, miko, vb],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 261,
      atk: 60,
      def: 22,
      crt: 3,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 411,
      atk: 94,
      def: 35,
      crt: 4,
      load: 12
    }],
    file: 'picasso-t.png',
    skills: [
      '• **Passive 1:** Basic normal attack (charge attack + branch attack included) applies 1 charge of Red Pigment (cooldown 1 second).', 
      'When reaches 4 charges, increase physical damage by 15 / ? / ? / 32 % for 3 / ? / ? / 6 seconds.', 
      'Reset duration if re-activated again while under Red Pigment effect',
      '• **Passive 2:** Can save pigment color on enemy'
    ]
  }, {
    name: 'Picasso (M)',
    type: 'middle',
    recommend: [db, miko, vb],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 307,
      atk: '?',
      def: 77,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 483,
      atk: '?',
      def: 123,
      crt: 9,
      load: 12
    }],
    file: 'picasso-m.png',
    skills: [
      '• **Passive 1:** Basic normal attack (charge attack + branch attack included) applies 1 charge of Yellow Pigment (cooldown 1 second).', 
      'When reaches 4 charges, reduce physical damage directly coming from that enemy by 10 / ? / ? / 25 % and reduce physical damage indirectly coming from that enemy by 20 / ? / ?/ 40 %. Last for 3 / ? / ? / 6 seconds.', 
      'Reset duration if re-activated again while under Yellow Pigment effect',
      '• **Passive 2:** Can save pigment color on enemy',
    ]
  }, {
    name: 'Picasso (B)',
    type: 'bottom',
    recommend: [miko],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 276,
      atk: 26,
      def: 33,
      crt: 7,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 435,
      atk: 42,
      def: 53,
      crt: 11,
      load: 12
    }],
    file: 'picasso-b.png',
    skills: [
      '• **Passive 1:** Basic normal attack (charge attack + branch attack included) applies 1 charge of Blue Pigment (cooldown 1 second).', 
      'When reaches 4 charges, increase attack speed by 10 / ? / ? / 20 % for 3 / ? / ? / 6 seconds.', 
      'Reset duration if re-activated again while under Blue Pigment effect',
      '• **Passive 2:** Can save pigment color on enemy',
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Basic normal attack (charge attack + branch attack included) per each every 1 second, applies 1 Color Pigment you have to the enemy, last for 10 seconds. Color Pigment rotates every 3 seconds, two different colors mixing together creates mixed color:',
      '• **Red + Yellow = Orange:** Target receives extra 25% physical damage',
      '• **Red + Blue = Purple:** Deal physical damage 120% based on attack power at ranged distance',
      '• **Yellow + Blue = Green:** Immediately recover your HP by 4%',
      'Mixed color effect lasts for 4 seconds. Other colors cannot be painted',
    ]
  }, {
    set: 3,
    skills: []
  }]
}, {
  name: 'Higokumaru',
  stars: [4, 5],
  variations: [{
    name: 'Higokumaru (T)',
    type: 'top',
    recommend: [br, sr, fs],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 315,
      atk: 67,
      def: 44,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 495,
      atk: 106,
      def: 70,
      crt: '?',
      load: 12
    }],
    file: 'higokumaru-t.png',
    skills: [
      'Increase Valkyria own fire elemental damage by 30 / ? / ? / 45 %, When basic attack (branch attack and charge attack included) on-hit break enemies barrier (shield), the Higokumaru servant with attack power of 200 / ? / ? / 600, cast a fire blast for 6.0 seconds, dealing fire elemental damage based on Higokumaru 320% attack power, with Higokumaru 10.0 seconds global cooldown.'
    ]
  }, {
    name: 'Higokumaru (M)',
    type: 'middle',
    recommend: [fs],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 322,
      atk: '?',
      def: 99,
      crt: 4,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 507,
      atk: '?',
      def: 158,
      crt: 7,
      load: 12
    }],
    file: 'higokumaru-m.png',
    skills: [
      'Reduce incoming physical damage by 15 / ? / ? / 30 %, After perfect evasive movet he Higokumaru servant with attack power of 200 / ? / ? / 600, cast a fire pillar, dealing fire elemental damage based on Higokumaru 500% attack power, with Higokumaru 10.0 seconds global cooldown.'
    ]
  }, {
    name: 'Higokumaru (B)',
    type: 'bottom',
    recommend: [sr, fs],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 322,
      atk: 26,
      def: 33,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 507,
      atk: 42,
      def: 53,
      crt: 9,
      load: 12
    }],
    file: 'higokumaru-b.png',
    skills: [
      'Increase attack speed by 3 / ? / ? / 6 %, per 1 enemy on-field inflicted with burn status, up to 3 times multiplier, when surrounding has enemies, dealing fire elemental damage based on 30 / ? / ? / 60 % attack power per every 1.0 seconds to them.'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase Valkyria and Higokumaru fire elemental damage by 1%, per 1 consecutive hits, up to 40 times multiplier'
    ]
  }, {
    set: 3,
    skills: [
      'When entering combat mode, if the consecutive hits less than 50, instantly raise to 50, with 30.0 seconds cooldown, Raise 2-set bonus consecutive hits capped limit by another 40'
    ]
  }]
}, {
  name: 'Fresh Summer',
  stars: [4, 5],
  variations: [{
    name: 'Fresh Summer (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 276,
      atk: 62,
      def: 43,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 607,
      atk: 96,
      def: 75,
      crt: '?',
      load: 12
    }],
    file: 'fresh-summer-t.png',
    skills: [
      'Grant on-hit to materialize a 3.0 seconds timed explosive water ball (9.0 / ? / ? / 5.0 seconds cooldown), dealing ice elemental damage based on 150 / 200 / 250 / 300 % self attack power'
    ]
  }, {
    name: 'Fresh Summer (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 307,
      atk: '?',
      def: 87,
      crt: 4,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 483,
      atk: '?',
      def: 140,
      crt: 6,
      load: 12
    }],
    file: 'fresh-summer-m.png',
    skills: [
      '(Require top stigmata piece) When water ball explode, any own ally units hit by water ball blast wave gain increase fire, ice, and lightning elemental damage by 18 / ? / ? / 30 % within the next 4.5 / ? / ? / 6.0 seconds, not stackable'
    ]
  }, {
    name: 'Fresh Summer (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 268,
      atk: 28,
      def: 49,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 422,
      atk: 45,
      def: 78,
      crt: 11,
      load: 12
    }],
    file: 'fresh-summer-b.png',
    skills: [
      '(Require top stigmata piece) Squad members within the water ball blast wave restore ? / ? / ? / 500 HP'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase timed explosive water ball by 2.0 meter radius, and inflict 1.5 seconds freeze status to enemies within the explosion'
    ]
  }, {
    set: 3,
    skills: [
      'Timed explosive water ball deal additional 200% ice elemental damage, and reduce cooldown time by 2.0 seconds'
    ]
  }]
}, {
  name: 'Theresa: Gluttony',
  stars: [4, 5],
  variations: [{
    name: 'Theresa: Gluttony (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 246,
      atk: 60,
      def: 44,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 386,
      atk: 94,
      def: 70,
      crt: '?',
      load: 12
    }],
    file: 'theresa-gluttony.png',
    skills: [
      '10% chance on-hit drops a candy, that will increase 9 / 12 / 15 / 18 % all-damage when looted, last for 5.0 seconds, 2.0 seconds drop cooldown, and will disappear after 8.0 seconds if not looted'
    ]
  }],
  setSkills: []
}, {
  name: 'Bronya: Doll',
  stars: [4, 5],
  variations: [{
    name: 'Bronya: Doll (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 215,
      atk: 60,
      def: 41,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 338,
      atk: 94,
      def: 66,
      crt: '?',
      load: 12
    }],
    file: 'bronya-doll.png',
    skills: [
      'Increase range damage by 10 / 15 %',
      'When equipped on Bronya, 20 / 40 % chance to shackle the target upon attacking, last for 4 seconds, cooldown 10 seconds'
    ]
  }],
  setSkills: []
}, {
  name: 'Kiana: Singer',
  stars: [4, 5],
  variations: [{
    name: 'Kiana: Singer (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 323,
      atk: '?',
      def: 79,
      crt: 3,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 508,
      atk: '?',
      def: 127,
      crt: 4,
      load: 12
    }],
    file: 'kiana-singer.png',
    skills: [
      'After performing perfect evasion skill, all members of team receive HP regen by 6 / ? / ? /12  per each 1.0 second, last for 7 seconds. Triggered again will refresh effect duration. When equipped on Kiana, increase own HP regen by 4 / ? / ? / 12.7 per each 1.0 second, active even when not in play'
    ]
  }],
  setSkills: []
}, {
  name: 'Mei: Wrath',
  stars: [4, 5],
  variations: [{
    name: 'Mei: Wrath (M)',
    type: 'middle',
    recommend: [sd],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 332,
      atk: '?',
      def: 18,
      crt: '?',
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 528,
      atk: '?',
      def: 36,
      crt: 1,
      load: 12
    }],
    file: 'mei-wrath.png',
    skills: [
      'Convert all incoming damage into a wave of wrath, reflect back as damage, dealing 280% / ? / ? / 408% * original damage to the surrounding enemies'
    ]
  }],
  setSkills: []
}, {
  name: 'Yae Sakura: Prayer',
  stars: [4, 5],
  variations: [{
    name: 'Yae Sakura: Prayer (B)',
    type: 'bottom',
    recommend: [miko],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 276,
      atk: 28,
      def: 43,
      crt: 9,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 434,
      atk: 45,
      def: 70,
      crt: 15,
      load: 12
    }],
    file: 'sakura-prayer.png',
    skills: [
      'Increase branch attack physical damage by 10 / ? / ? / 20 %',
      'When equipped on Sakura, further increase branch attack physical damage by 5 / ? / ? / 10 %'
    ]
  }],
  setSkills: []
}, {
  name: 'Bronya: Sloth',
  stars: [4, 5],
  variations: [{
    name: 'Bronya: Sloth (B)',
    type: 'bottom',
    recommend: [vc],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 339,
      atk: 26,
      def: 43,
      crt: 9,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 538,
      atk: 41,
      def: 11,
      crt: 13,
      load: 12
    }],
    file: 'bronya-sloth.png',
    skills: [
      'Ability 1: Lose all SP when tag-out, but recover 1.2 / ? / ? / 2.1 EP every 1.0 second before tag-in',
      'Ability 2: Gradually lose SP after tag-in and staying on-field, when SP below 20%, become fatigued and no battle morale (inflicted slow debuff)',
      '',
      ''
    ]
  }],
  setSkills: []
}, {
  name: 'Murata Ouji',
  stars: [4, 5],
  variations: [{
    name: 'Murata Ouji (T)',
    type: 'top',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 200,
      atk: 65,
      def: 33,
      crt: 3,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 314,
      atk: 102,
      def: 53,
      crt: 4,
      load: 12
    }],
    file: 'murata-ouji-t.png',
    skills: [
      'Increase melee physical damage by 11 / 20 %.\nWhen equipped on Himeko, charge attack has 5 / 10 % chance to deal additional 100 / 300 % physical damage based on attack power, cooldown 12 seconds'
    ]
  }],
  setSkills: []
}, {
  name: 'Mei: Demon',
  stars: [3, 4],
  variations: [{
    name: 'Mei: Demon (M)',
    type: 'middle',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 228,
      atk: 0,
      def: 28,
      crt: 4,
      load: 6
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 327,
      atk: 0,
      def: 41,
      crt: 6,
      load: 8
    }],
    file: 'mei-demon.png',
    skills: [
      'Increases Movement Speed by 3%/4% and melee physical damage by 4%/6% for 10 sec upon killing an enemy. The damage boost effect stacks up to 5 times (up to 8 times when equipped on Mei).'
    ]
  }],
  setSkills: []
}, {
  name: 'Ottoria',
  stars: [4, 5],
  variations: [{
    name: 'Ottoria (B)',
    type: 'bottom',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 246,
      atk: 26,
      def: 44,
      crt: 7,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 386,
      atk: 42,
      def: 70,
      crt: 11,
      load: 12
    }],
    file: 'ottoria-t.png',
    skills: [
      'Increase movement speed by 4 / 10 %\nWhen equipped on Theresa, increase attack speed by  4 / 10 %, SP gain speed by 10%'
    ]
  }],
  setSkills: []
},{
  name: 'Fuka: Pride',
  stars: [4, 5],
  variations: [{
    name: 'Fuka: Pride (B)',
    type: 'bottom',
    recommend: [sf, br, ci, sd],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 276,
      atk: 22,
      def: 55,
      crt: 6,
      load: 9
    }, {
      rarity: [[4, 5], [1, 2]],
      lvl: 40,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 10
    }, {
      rarity: [[4, 5], [2, 2]],
      lvl: 45,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 11
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 435,
      atk: 34,
      def: 88,
      crt: 9,
      load: 12
    }],
    file: 'fuka-pride.png',
    skills: [
      'Increase melee physical damage by 15 / ? / ? / 30 %. However on-killed 1 enemies, increase own incoming all-damage by 7%, last for 30.0 seconds, up to 10 times multiplier'
    ]
  }],
  setSkills: []
}, {
  name: 'Michelangelo',
  stars: [4, 5],
  variations: [{
    name: 'Michelangelo (T)',
    type: 'top',
    file: 'michelangelo-top.png',
    recommend: [sd, vb, db],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 276,
      atk: 70,
      def: 28,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 435,
      atk: 109,
      def: 44,
      crt: '?',
      load: 12
    }],
    skills: [
      'Basic attack (charge attack, branch attack included) grant a charge, each charge increases physical damage by 3.6 / 7.2 %, last for 2 / 3 seconds, stack up to 5 times. Getting a new charge will refresh the oldest charge duration'
    ]
  }, {
    name: 'Michelangelo (M)',
    type: 'middle',
    file: 'michelangelo-center.png',
    recommend: [sd, vb, db],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 338,
      atk: '?',
      def: 97,
      crt: 5,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 531,
      atk: '?',
      def: 155,
      crt: 8,
      load: 12
    }],
    skills: [
      'Basic attack (charge attack, branch attack included) grant a charge, each charge increases critical rate by 1.5 /3 %, last for 2 / 3 seconds, stack up to 5 times. Getting a new charge will refresh the oldest charge duration'
    ]
  }, {
    name: 'Michelangelo (B)',
    type: 'bottom',
    file: 'michelangelo-bottom.png',
    recommend: [sd, vb, db],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 276,
      atk: 26,
      def: 83,
      crt: 10,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 435,
      atk: 42,
      def: 133,
      crt: 16,
      load: 12
    }],
    skills: [
      'Basic attack (charge attack, branch attack included) grant a charge, each charge increases critical damage by 8 /14 %, last for 2 / 3 seconds, stack up to 5 times. Getting a new charge will refresh the oldest charge duration'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Increase all-damage by 15%',
      'When tag-in, increase all-damage by 15%, last for 15 seconds, cooldown 30 seconds'
    ]
  }, {
    set: 3,
    skills: [
      'When tag-out, restore HP by 2% per second, last for 10 seconds, deal 300% physical damage based on attack power to all enemies on the field. If the enemy has less than 10% of its max HP, deal additional 300% physical damage based on attack power. Cooldown 30 seconds'
    ]
  }]
}, {
  name: 'Nuwa Figurine Master',
  stars: [4, 5],
  variations: [{
    name: 'Nuwa Figurine Master (T)',
    type: 'top',
    file: 'nuwa-puppeter-t.png',
    recommend: [va],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 269,
      atk: 68,
      def: 41,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 423,
      atk: 108,
      def: 66,
      crt: '?',
      load: 12
    }],
    skills: [
      'Stun enemy for 5 seconds when breaking its shield',
      'Increase all-damage dealt against shield-break enemy by 20%'
    ]
  }, {
    name: 'Nuwa Figurine Master (M)',
    type: 'middle',
    file: 'nuwa-puppeter-m.png',
    recommend: [va, ci],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 299,
      atk: '?',
      def: 118,
      crt: 7,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 471,
      atk: '?',
      def: 188,
      crt: 11,
      load: 12
    }],
    skills: [
      'Increase physical damage of branch attack by 30%',
      'After performing branch attack 3 times, grants Valkyrie a shield that reduces received damage by 15% for 5 seconds, cooldown 6 seconds'
    ]
  }, {
    name: 'Nuwa Figurine Master (B)',
    type: 'bottom',
    file: 'nuwa-puppeter-b.png',
    recommend: [va],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 269,
      atk: 34,
      def: 76,
      crt: 7,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 423,
      atk: 53,
      def: 122,
      crt: 11,
      load: 12
    }],
    skills: [
      'After performing ultimate skill, increase all-damage dealt by Valkyrie by 12%, last for 15 seconds, stack up to 4 times, cooldown 3 seconds. If effect is re-activated while being active, refresh its duration'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'After performing ultimate skill 2 times, generate a 5m radius Puppet boundary, shackle enemy stands within the boundary, and increase its received physical damage by 20%. After 6 seconds, Puppet boundary disappears and enters 18 seconds cooldown. This skill cannot be stacked with other skill'
    ]
  }, {
    set: 3,
    skills: [
      'Reduce debuff duration against Valkyrie by 30%',
      'Increase all-damage dealt against enemy under debuff by 30%'
    ]
  }]
}, {
  name: 'Monet',
  stars: [4, 5],
  variations: [{
    name: 'Monet (T)',
    type: 'top',
    file: 'monet-t.png',
    recommend: [sk, le],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 261,
      atk: 74,
      def: 14,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 411,
      atk: 117,
      def: 22,
      crt: '?',
      load: 12
    }],
    skills: [
      'Increase lightning elemental damage by 30%',
      'Increase all-damage by 1% per hit in combo chain, stack up to 15 times'
    ]
  }, {
    name: 'Monet (M)',
    type: 'middle',
    file: 'monet-m.png',
    recommend: [sk, vp],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 361,
      atk: '?',
      def: 111,
      crt: 1,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 568,
      atk: '?',
      def: 177,
      crt: 1,
      load: 12
    }],
    skills: [
      'Reduce received all-damage by 20%',
      'Increase lightning elemental damage by 2% per hit in combo chain, stack up to 15 times'
    ]
  }, {
    name: 'Monet (B)',
    type: 'bottom',
    file: 'monet-b.png',
    recommend: [sk, le],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 295,
      atk: 42,
      def: 28,
      crt: 4,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 464,
      atk: 65,
      def: 44,
      crt: 7,
      load: 12
    }],
    skills: [
      'Every 10 seconds, the next branch, charge attack inflicts 60% movespeed slow for 6 seconds',
      'When combo is above 30 hits, increase attack speed by 15%'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Gain a lightning shield on self, while the shield is active, increase lightning damage by 30%. When hit by an enemy, the shield will block direct physical damage for 0.3 second, then disappears. Shield recharges after 15 seconds'
    ]
  }, {
    set: 3,
    skills: [
      'When the slow effect of the bottom piece of this stigmata triggers, additionally inflicts 30% slow to all enemies 3 meter radius around the target for 6 second, and recovers 8% HP'
    ]
  }]
}, {
  name: 'Shinshuu Tour',
  stars: [4, 5],
  variations: [{
    name: 'Shinshuu Tour (T)',
    type: 'top',
    file: 'shinshuu-tour-t.png',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 246,
      atk: 55,
      def: 41,
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 386,
      atk: 87,
      def: 66,
      crt: '?',
      load: 12
    }],
    skills: [
      'A firecracker trap is setup in front when attacking. The trap explodes 1 time every second, deals 150% fire elemental damage based on attack power to surrounding enemies, last for 6 seconds, cooldown 12 seconds'
    ]
  }, {
    name: 'Shinshuu Tour (M)',
    type: 'middle',
    file: 'shinshuu-tour-m.png',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 276,
      atk: '?',
      def: 97,
      crt: 5,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 435,
      atk: '?',
      def: 155,
      crt: 8,
      load: 12
    }],
    skills: [
      '(This skill required (T) to trigger) Fortunate Rain starts when firecracker exploded. Recovery surrounding allies’s HP by 2%, add extra 100 fire elemental damage to those allies’s attack for 8 seconds. This skill cannot be stacked with other skill'
    ]
  }, {
    name: 'Shinshuu Tour (B)',
    type: 'bottom',
    file: 'shinshuu-tour-b.png',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: 261,
      atk: 29,
      def: 28,
      crt: 7,
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 411,
      atk: 45,
      def: 44,
      crt: 11,
      load: 12
    }],
    skills: [
      '(This skill required (T) to trigger) When firecracker exploded, increase physical, fire elemental damage by 20% for all team members inside the explosion range, last for 6 seconds. This skill cannot be stacked with other skill'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'When firecracker set fire, surrounding enemies receive 100 fire elemental damage every 0.5 second due to the explosion, last for 5 seconds. Increase fire elemental damage dealt against burn enemy by 15%. This skill cannot be stacked with other skill'
    ]
  }, {
    set: 3,
    skills: [
      'Increase fire elemental damage dealt through firecracker by 20%, a big explosion occurs when firecracker disappears, deals 300% physical damage based on attack power to all surrounding enemies and stuns them for 4 seconds'
    ]
  }]
}, 
//new stigma
{
  name: 'Ye Caizhang',
  stars: [4, 5],
  variations: [{
    name: 'Ye Caizhang (T)',
    type: 'top',
    file: 'yecaizhang-t.png',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 423,
      atk: 109,
      def: 55,
      crt: '?',
      load: 12
    }],
    skills: [
      'Increase defense power by 40% during battle',
      'Increase all elemental damage dealt by 15% for all allies standing within Ran field (same skill cannot be stacked)'
    ]
  }, {
    name: 'Ye Caizhang (M)',
    type: 'middle',
    file: 'yecaizhang-m.png',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 519,
      atk: '?',
      def: 177,
      crt: 7,
      load: 12
    }],
    skills: [
      'When undeployed, increase ice resistance by 15% and ice elemental damage by 15% for all members in squad (same skill cannot be stacked)',
      'When deployed, increase user ice elemental damage by 35%'
    ]
  }, {
    name: 'Ye Caizhang (B)',
    type: 'bottom',
    file: 'yecaizhang-b.png',
    recommend: [],
    growth: [{
      rarity: [[4, 5], [0, 2]],
      lvl: 35,
      hp: '?',
      atk: '?',
      def: '?',
      crt: '?',
      load: 9
    }, {
      rarity: [[5, 5]],
      lvl: 50,
      hp: 495,
      atk: 45,
      def: 1111,
      crt: 9,
      load: 12
    }],
    skills: [
      'Increase attack speed by 15%',
      'Decrease all damage taken by 20% for all allies standing within Ran field (same skill cannot be stacked)'
    ]
  }],
  setSkills: [{
    set: 2,
    skills: [
      'Create a Ran field for 6 seconds upon attacking, cooldown 9 seconds (same skill cannot be stacked)',
      'Increase all elemental damage dealt by 30% for all allies standing within Ran field',
      'Increase enemy all elemental damage taken by 10% when they stand within Ran field'
    ]
  }, {
    set: 3,
    skills: [
      'Increase duration of Ran field by 3 seconds',
      'Grant a Frost Protection effect for all allies standing within Ran field.',
      'When being attacked, if the damage is less than (10xValkyrja’s level), it’s still calculated but Valkyrja action is not interrupted'
    ]
  }]
}, {
  name: 'Fuka: Inspection Tour',
  stars: [3, 4],
  variations: [{
    name: 'Fuka: Inspection Tour (B)',
    type: 'bottom',
    file: 'fuka-inspection-tour.png',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 191,
      atk: 20,
      def: 19,
      crt: 3,
      load: 6
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 276,
      atk: 29,
      def: 28,
      crt: 5,
      load: 8
    }],
    skills: [
      'When equipped on Fuka, increase attack speed by 15%, increase movement speed by 20%'
    ]
  }],
  setSkills: []
}, {
  name: 'Mei: Songstress',
  stars: [3, 4],
  variations: [{
    name: 'Mei: Songstress (M)',
    type: 'middle',
    file: 'mei-songstress.png',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 212,
      atk: '?',
      def: 61,
      crt: 2,
      load: 6
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 307,
      atk: '?',
      def: 90,
      crt: 3,
      load: 8
    }],
    skills: [
      'Increase critical damage by 20%',
      'When equipped on Mei, further increase critical damage by 20%'
    ]
  }],
  setSkills: []
}, {
  name: 'Valkyrie Judah',
  stars: [3, 4],
  variations: [{
    name: 'Valkyrie Judah (T)',
    type: 'top',
    file: 'valk-judah.png',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 159,
      atk: 40,
      def: 25,
      crt: 0,
      load: 6
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 230,
      atk: 58,
      def: 37,
      crt: 0,
      load: 8
    }],
    skills: [
      'When basic attack hit the enemy, drop a Theresa doll in front of the enemy that explodes after 2 second delay,', 
      'dealing 100% / 200% lightning elemental damage based on attack power in a 4 meter radius. Cooldown 10 / 5 seconds'
    ]
  }],
  setSkills: []
}, {
  name: 'Himeko: Teacher',
  stars: [3, 4],
  variations: [{
    name: 'Himeko Teacher (M)',
    type: 'middle',
    file: 'himeko-teacher.png',
    recommend: [],
    growth: [{
      rarity: [[3, 4], [0, 1]],
      lvl: 25,
      hp: 191,
      atk: 0,
      def: 75,
      crt: 2,
      load: 6
    }, {
      rarity: [[4, 4]],
      lvl: 35,
      hp: 276,
      atk: 0,
      def: 111,
      crt: 3,
      load: 8
    }],
    skills: [
      'Increase physical damage of branch/charge attack by 5% / 10%',
      'When equipped on Kiana, increase critical stats by 9 / 15'
    ]
  }],
  setSkills: []
}]

export default stigmatas