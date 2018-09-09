export const drawBarChart = (imageContext, score:Record<string, number>, interval:number[], barSize:{x:number, y:number}, fontSize:number, center:{x:number, y:number}) => {
  const scoreKeys = Object.keys(score)
  const startY = (scoreKeys.length * barSize.y + scoreKeys.length * 10) / 2
  const max = Math.max(...interval)
  interval.forEach((indicator, index) => {
    imageContext.beginPath()
    const x = center.x + (indicator / max * barSize.x)
    imageContext.moveTo(x, center.y - startY)
    imageContext.lineTo(x, center.y + startY)
    imageContext.lineWidth = 3
    imageContext.strokeStyle = 'rgba(33, 150, 243, 0.3)'
    imageContext.stroke()
  })
  const gradient = imageContext.createLinearGradient(center.x, center.y, center.x + barSize.x, center.y)
  gradient.addColorStop(0, 'rgba(244, 67, 54, 0.8)')
  gradient.addColorStop(0.5, 'rgba(76, 175, 80, 0.8)')
  scoreKeys.forEach((scoreKey, index) => {
    imageContext.beginPath()
    const y = (barSize.y + 10) * index + 5
    const x = score[scoreKey] / max * barSize.x
    imageContext.moveTo(center.x, center.y - startY + y)
    imageContext.lineTo(center.x, center.y - startY + y + barSize.y)
    imageContext.lineTo(center.x + x, center.y - startY + y + barSize.y)
    imageContext.lineTo(center.x + x, center.y - startY + y)
    imageContext.lineTo(center.x, center.y - startY + y)
    imageContext.fillStyle = gradient
    imageContext.fill()
    const word = scoreKey
    imageContext.font = `italic ${fontSize}px Impact`
    imageContext.fillStyle = 'rgba(255, 255, 255, 0.8)'
    const textBounding = imageContext.measureText(word)
    imageContext.fillText(word,
      center.x - fontSize - textBounding.width,
      center.y - startY + y + barSize.y / 2 + fontSize / 4
    )
    const scoreText = score[scoreKey].toString()
    imageContext.font = `italic ${fontSize}px Impact`
    imageContext.fillStyle = 'rgba(255, 255, 255, 0.8)'
    const scoreTextBounding = imageContext.measureText(scoreText)
    imageContext.fillText(scoreText,
      center.x  + x - fontSize / 2 - scoreTextBounding.width,
      center.y - startY + y + barSize.y / 2 + fontSize / 4
    )
  })
  imageContext.beginPath()
  imageContext.moveTo(center.x, center.y - startY)
  imageContext.lineTo(center.x, center.y + startY)
  imageContext.lineWidth = 6
  imageContext.strokeStyle = 'rgb(255, 255, 255, 0.8)'
  imageContext.stroke()
}

export const drawRadarChart = (imageContext, score, max:number, radius:number, fontSize:number, center:{x:number, y:number}) => {
  const scoreKeys = Object.keys(score)
  const calcXRad = (index:number) => Math.cos(index / scoreKeys.length * 2 * Math.PI - (Math.PI / 6 * 2))
  const calcYRad = (index:number) => Math.sin(index / scoreKeys.length * 2 * Math.PI - (Math.PI / 6 * 2))
  for(let i = 1; i <= max; i++) {
    const currentRadius = radius / max * i
    imageContext.beginPath()
    for(let index = 0; index < scoreKeys.length; index++) {
      if(index === 0) {
        imageContext.moveTo(center.x + (currentRadius * calcXRad(index)), center.y + (currentRadius * calcYRad(index)))
      }
      imageContext.lineTo(center.x + (currentRadius * calcXRad(index + 1)), center.y + (currentRadius * calcYRad(index + 1)))
    }
    imageContext.lineWidth = 3
    imageContext.fillStyle = 'rgba(255, 255, 255, 0.06)'
    imageContext.strokeStyle = 'rgba(33, 150, 243, 0.3)'
    imageContext.stroke()
    imageContext.fill()
  }
  scoreKeys.map((key, index) => {
    const xrad = calcXRad(index)
    const yrad = calcYRad(index)
    const word = key
    imageContext.font = `italic ${fontSize}px Impact`
    imageContext.fillStyle = 'rgba(255, 255, 255, 0.8)'
    const textBounding = imageContext.measureText(word)
    imageContext.fillText(word,
      center.x + ((radius + 10) * xrad) - (xrad > 0.1? 0:xrad < -0.1? textBounding.width:textBounding.width / 2),
      center.y + ((radius + 10) * yrad) + (yrad > 0.1? 20:yrad < -0.1? 0:10)
    )
  })
  const gradient = imageContext.createRadialGradient(center.x, center.y, 0, center.x, center.y, radius)
  gradient.addColorStop(0, 'rgba(244, 67, 54, 0.3)')
  gradient.addColorStop(0.5, 'rgba(244, 67, 54, 0)')
  imageContext.beginPath()
  for(let index = 0; index < scoreKeys.length; index++) {
    if(index === 0) {
      const currentRadius = radius / max * score[scoreKeys[index]]
      imageContext.moveTo(center.x + (currentRadius * calcXRad(index)), center.y + (currentRadius * calcYRad(index)))
    }
    const nextRadius = radius / max * score[scoreKeys[index + 1 === scoreKeys.length? 0:index + 1]]
    imageContext.lineTo(center.x + (nextRadius * calcXRad(index + 1)), center.y + (nextRadius * calcYRad(index + 1)))
  }
  imageContext.fillStyle = 'rgba(3, 169, 244, 0.5)'
  imageContext.fill()
  imageContext.fillStyle = gradient
  imageContext.fill()
}