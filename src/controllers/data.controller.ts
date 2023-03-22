import fs from 'fs'
import path from 'path'
import BaseController from './base.controller'
const cwd = process.cwd()
class DataController extends BaseController {
  constructor(private readonly id?: string) {
    super()
  }

  updateQuickLinkData(newData: QuickLinkDataItem) {
    const self = this
    return this.queryAllQuickLinkData((pathname: string)=>{
      const content = JSON.parse(fs.readFileSync(pathname,{encoding: 'utf8'}))
      let keys = Object.keys(content)
      for(let v of keys) {
        if(content[v][self.id]) {
          content[v][self.id] = newData
          break;
        }
      }
      fs.writeFileSync(pathname, JSON.stringify(content), {encoding: 'utf8'})
    })
  }

  deleteQuickLinkData() {
    const self = this
    return this.queryAllQuickLinkData((pathname: string)=>{
      const content = JSON.parse(fs.readFileSync(pathname,{encoding: 'utf8'}))
      let keys = Object.keys(content)
      for(let v of keys) {
        if(content[v][self.id]) {
          delete content[v][self.id]
          break;
        }
      }
      fs.writeFileSync(pathname, JSON.stringify(content), {encoding: 'utf8'})
    })
  }

  /**
   * 根据关键词，对标题进行模糊查询
   * TODO: 后期可扩展其他查询，如：厂商、描述
   * @param {*} keywords 
   * @returns 
   */
  searchQuickLinkData(keywords: string) {
    let result = []
    const file = path.join(__dirname, 'quickLinkData_default.json')
    if(fs.statSync(file).isFile()) {
      const content = JSON.parse(fs.readFileSync(file,{encoding: 'utf8'}))
      const keys = Object.keys(content.default)
      for(let v of keys) {
        if(content['default'][v].title.includes(keywords)) {
          result.push(v)
        }
      }
    }
    return {
      status: {
        code: 0,
      },
      result
    }
  }
}

export default DataController