export const generate = (number:number, content?:string) => {
  let array = []
  for(let i = 0; i < number; i++) array.push(content? content:i)
  return array
}

export const unique = (value, index, self) => 
  self.indexOf(value) === index