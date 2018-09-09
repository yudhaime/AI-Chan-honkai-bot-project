export const rowSpread = (total:number, distance:number) =>
  Array.apply(undefined, {length:total}).map((item, index) =>
    (((total - 1) / 2) - index) * distance
  )

export const alignCenterImage = (image, width:number, height:number, center:{x:number, y:number}) => {
  let calcWidth:number
  let calcHeight:number
  if(height / width < image.height / image.width) {
    calcHeight = height
    calcWidth = image.width / image.height * height
  } else {
    calcWidth = width
    calcHeight = image.height / image.width * width
  }
  return [image, center.x - (calcWidth / 2), center.y - (calcHeight / 2), calcWidth, calcHeight]
}