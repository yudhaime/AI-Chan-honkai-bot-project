import {CategorizedWeapon} from '../'
import guns from './guns'
import swords from './swords'
import cannons from './cannons'
import greatswords from './greatswords'
import crosses from './crosses'
import gauntlets from './gauntlets'

export default [
  ...guns.map(weapon => ({...weapon, category:'guns'})),
  ...swords.map(weapon => ({...weapon, category:'swords'})),
  ...cannons.map(weapon => ({...weapon, category:'cannons'})),
  ...greatswords.map(weapon => ({...weapon, category:'greatswords'})),
  ...crosses.map(weapon => ({...weapon, category:'crosses'})),
  ...gauntlets.map(weapon => ({...weapon, category:'gauntlets'}))
] as CategorizedWeapon[]