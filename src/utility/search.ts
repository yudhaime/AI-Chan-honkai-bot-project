export const clean = (field:string) => field.replace(/[']/gi, '').split(/[^0-9a-z]/gi).filter(field => field !== '').join(' ').toLowerCase()
export const untrimIncludes = (sentence:string, keyword:string) => ` ${clean(sentence)} `.includes(` ${keyword} `)
export const matchPoint = (field:string, sentence:string) => untrimIncludes(sentence, clean(field))?
  clean(field).split(' ').filter(word => untrimIncludes(sentence, word)).length / clean(field).split(' ').length * 10:0
export const keywordPoint = (keyword:string, sentence:string, sensitive?:boolean) => clean(sentence).split(' ').reduce((points, word) =>
  points + (
  keyword === word && keyword.replace(/\d+/g, '').length > 0? 5:
  keyword.match(/\d+/g) && keyword.match(/\d+/g).includes(word)? 4:
  word.length > 2 && keyword.length > 2 && (keyword.includes(word) || word.includes(keyword))? 3:
  sensitive && word.length > 0 && keyword.indexOf(word) === 0? 1:0
), 0)

export const searchKeyword = (fields:string[], sentence:string):{hits:{field:string, hits:number}[], max:number} => {
  const hits = fields.map(field => ({
    field,
    hits: matchPoint(field, sentence) + clean(field).split(' ').reduce((hits, keyword) => hits + keywordPoint(keyword, sentence, true), 0)
  })).filter(result => result.hits > result.field.split(' ').filter(text => text.match(/[0-9a-z]/gi)).length)
  const max = Math.max(...hits.map(result => result.hits))
  return {hits, max}
}