import * as Discord from 'discord.js'

export const featureEmoji = {
  attract: ['Attract'],
  bleed: ['Bleed'],
  charge: ['Charge'],
  float: ['Floating'],
  freeze: ['Frozen', 'Ice'],
  ignite: ['Fire', 'Ignite'],
  immobilize: ['Immobilize', 'Slowed'],
  knockback: ['Knockback'],
  paralyze: ['Lightning', 'Paralyze'],
  shieldbreak: ['Shield Break'],
  stun: ['Stun'],
  time: ['Time'],
  weaken: ['Impaired', 'Weaken']
}

export const get = (member:Discord.GuildMember, symbol:string, fallback:string) => {
  if(!member.hasPermission('USE_EXTERNAL_EMOJIS')) {
    return fallback
  } else {
    return member.client.emojis.find('name', symbol) || fallback
  }
}