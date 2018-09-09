export const capitalize = (sentence:string) =>
  sentence.split(' ').map(word => word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

export const conjuctJoin = (words:string[]) =>
  [words.slice(0, words.length - 1).join(', '), words.slice(words.length - 1)].filter(sentence => sentence !== '').join(' and ')

export const fillInDigit = (number:number, digit:number) => {
  const max = Math.pow(10, digit)
  var clean = (number % max).toString()
  while(clean.length < digit) clean = '0' + clean
  return clean
}

export const fillInBlank = (word:number | string, space:number, separator?:string) => {
  var clean:string
  if(typeof word === 'number') {
    const max = Math.pow(10, space)
    clean = (word % max).toString()
  } else {
    clean = word.slice(0, space)
  }
  clean += (separator? separator:'')
  return clean + Array.apply(' ', {length:space - clean.length}).map(each => ' ').join('')
}
  