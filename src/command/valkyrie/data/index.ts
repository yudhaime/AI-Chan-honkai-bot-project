import {Valkyrie} from '../'
import kianaKaslana from './kiana'
import kallenKaslana from './kallen'
import raidenMei from './mei'
import yaeSakura from './yae'
import bronyaZaychick from './bronya'
import murataHimeko from './himeko'
import theresaApocalypse from './theresa'
import fuhua from './fuhua'

export default [
    ...kianaKaslana.map(valkyrie => ({...valkyrie, name:'Kiana Kaslana'})),
    ...kallenKaslana.map(valkyrie => ({...valkyrie, name:'Kallen Kaslana'})),
    ...raidenMei.map(valkyrie => ({...valkyrie, name:'Raiden Mei'})),
    ...yaeSakura.map(valkyrie => ({...valkyrie, name:'Yae Sakura'})),
    ...bronyaZaychick.map(valkyrie => ({...valkyrie, name:'Bronya Zaychik'})),
    ...murataHimeko.map(valkyrie => ({...valkyrie, name:'Murata Himeko'})),
    ...theresaApocalypse.map(valkyrie => ({...valkyrie, name:'Theresa Apocalypse'})),
    ...fuhua.map(valkyrie => ({...valkyrie, name:'Fu Hua'}))
  ] as Valkyrie[]