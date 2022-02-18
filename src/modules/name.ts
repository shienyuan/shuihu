import General from './general'

export default class Name {
  private readonly generals

  constructor() {
    this.generals = new General().data
  }

  getRandom(): string {
    const randomIndex = Math.floor(Math.random() * this.generals.length)
    return this.generals[randomIndex].name
  }
}
