/*
* Allows the bot user to set a time limit between uses of a command
*/

export default class Limit {
	period:number
	list:Map<string, Date>

	constructor(period:number) {
		this.list = new Map()
		this.period = period || 30000
	}

	add = (key:string) => {
		if(!this.exists(key)) {
			this.list.set(key, new Date(new Date().getTime() + this.period))
			setTimeout(() => this.remove(key), this.period)
		} else {
			console.log(`${key} needs to wait another ` + (new Date().getTime() - this.list.get(key).getTime()))
		}
	}
	remove = (key:string) => {
		this.list.delete(key)
	}
	exists = (key:string) => 
		this.list.has(key)
}
