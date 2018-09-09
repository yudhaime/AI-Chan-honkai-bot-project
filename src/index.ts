import * as aiChan from './ai-chan'

aiChan.start()


if(module.hot) {
  let aiChanNow = aiChan
  module.hot.accept(['./ai-chan'], (modules) => {
    aiChanNow.stop().then(() => import('./ai-chan')).then(aiChan => {
      aiChan.start()
      aiChanNow = aiChan
    })
  })
}