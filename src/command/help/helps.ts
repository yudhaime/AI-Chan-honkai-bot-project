export default (prefix:string) => [{
  commands: ['ping'],
  category: 'UTILITY',
  description: 'Check your ping connection and my ping connection to discord server',
  examples: [],
  notes: []
}, {
  commands: ['weapon'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about a game weapon from Honkai Impact 3rd',
  examples: ['weapon <weapon name>', 'weapon <valkyrie name>', 'weapon <category>'],
  notes: [
    `If you don't put any query bot will show you menu to browse our weapon gallery`,
    `Tips:`, 
    `You can just write short name of the weapon like <${prefix}weapon Judah> will result <Oath of Judah>`,
    `You can write initial name of weapon for easy calling like <${prefix}weapon 2sr> will result <2nd Sacred Relic>`,
    `This command has shortform \`${prefix}w\` for fast calling`
  ]
}, {
  commands: ['stigma', 'stigmata'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about a stigmata\'s effect from Hokai Impact 3rd',
  examples: ['stigmata <stigmata name>', 'stigmata <stigmata name> <T/M/B>'],
  notes: [
    `If you don't put any query bot will show you menu to browse our stigmata gallery`,
    `Tips:`,
    `You don't need to write full name of stigma, for example <${prefix}stigmata tesla> will show you result of all stigma with your query`,
    `You can tap emoji to jump to a detailed version of a stigmata variation or stigmata set`,
    `This command has shortform \`${prefix}s\` for fast calling`
  ]
}, {
  commands: ['valk', 'valkyrie'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about a valkyrie\'s detail informations',
  examples: ['valkyrie <valkyrie name>', 'valkyrie <battlesuit name>'],
  notes: [
    `If you don't put any query bot will show you menu to browse our valkyrie data`,
    `Tips:`,
    `You can just type valkyrie initial of battlesuit for fast calling, for example: <${prefix}valkyrie SD> will result <Shadow Dash>`,
    `You can tap emoji to jump to recommendation setup of valkyrie`,
    `This command has shortform \`${prefix}v\` for fast calling`
  ]
},{
  commands: ['form', 'formation'],
  category: 'HONKAI IMPACT',
  description: 'Show you detail about a valkyrie\'s formation and strategy',
  examples: ['formation <valkyrie name>', 'form <battlesuit name>'],
  notes: [
    `If you don't put any query bot will show you menu to browse our valkyrie data`,
    `Tips:`,
    `You can just type valkyrie initial of battlesuit for fast calling, for example: <${prefix}formation SD> will result <Shadow Dash>`,
    `You can tap emoji to jump to recommendation setup of valkyrie`,
    `This command has shortform \`${prefix}f\` for fast calling`
  ]
}, {
  commands: ['recom', 'recommendation'],
  category: 'HONKAI IMPACT',
  description: 'Show you recommendation about equipment setup for a specified valkyrie',
  examples: ['recommendation <valkyrie name>', 'recommendation <battlesuit name>'],
  notes: [
    `If you don't put any query bot will show you menu to browse our valkyrie data`,
    `Tips:`,
    `You can just type valkyrie initial of battlesuit for fast calling, for example: <${prefix}recommendation SD> will result <Shadow Dash>`,
    `You can tap emoji to jump to detail info about valkyrie`,
    `This command has shortform \`${prefix}r\` for fast calling`
  ]
}, {
  commands: ['gacha'],
  category: 'FUN',
  description: 'Do gacha simulation like on Honkai Impact 3rd',
  examples: ['gacha', 'gacha <focused/standard>', 'gacha <number of pull>'],
  notes: [
    `Not giving any query will result to pull standart supply gacha`,
    `There is cooldown 1 minute after execute this command`,
    `Default number of pull is 10 but you can change it by type the number at the end query`,
    `For Example: <${prefix}gacha focused 8>, or <${prefix}gacha 5>`
  ]
}]