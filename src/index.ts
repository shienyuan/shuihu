import jsonData from './static/generals.json'

class Shuihu {
  private readonly data: any[] = jsonData

  getAllGenerals() {
    return this.data
  }
}

const shuihu: Shuihu = new Shuihu()

export default shuihu
