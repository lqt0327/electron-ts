import fs from 'fs'
import path from 'path'
import { QueryAllQuickLinkData } from './decorator'

class DataController {
  constructor(private readonly id?: string) { }

  @QueryAllQuickLinkData()
  addQuickLinkData(newData: QuickLinkDataItem) {
    // 1. 遍历文件夹 2. 文件存在？创建 3. 遍历数据 4. 已存在？覆盖or跳过 5. 
    // 类型： _time _default ...
    return (pathname: string, type: string) => {
      let content = JSON.parse(fs.readFileSync(pathname,{encoding: 'utf8'}) || '{}')
      if(type==='default') {
        if(content['default']) {
          content['default'][newData.id] = newData
        }else {
          content['default'] = {[newData.id]: newData}
        }
      }
      else if(type === 'time') {
        if(content[newData.createTime]) {
          content[newData.createTime][newData.id] = newData
        }else {
          content[newData.createTime] = {
            [newData.id]: newData
          }
        }
      }
      fs.writeFileSync(pathname, JSON.stringify(content), {encoding: 'utf8'})
    }
  }

  @QueryAllQuickLinkData()
  updateQuickLinkData(newData: QuickLinkDataItem) {
    const self = this
    return (pathname: string, type: string)=>{
      const content = JSON.parse(fs.readFileSync(pathname,{encoding: 'utf8'}))
      if(type === 'default') {
        content['default'][self.id] = newData
      }else if (type === 'time') {
        let keys = Object.keys(content)
        for(let v of keys) {
          if(content[v][self.id]) {
            delete content[v][self.id]
            break;
          }
        }
        if(content[newData.createTime]) {
          content[newData.createTime][self.id] = newData
        }else {
          content[newData.createTime] = {[self.id]: newData}
        }
      }
      fs.writeFileSync(pathname, JSON.stringify(content), {encoding: 'utf8'})
    }
  }

  @QueryAllQuickLinkData()
  deleteQuickLinkData() {
    const self = this
    return (pathname: string)=>{
      const content = JSON.parse(fs.readFileSync(pathname,{encoding: 'utf8'}))
      let keys = Object.keys(content)
      for(let v of keys) {
        if(content[v][self.id]) {
          delete content[v][self.id]
          break;
        }
      }
      fs.writeFileSync(pathname, JSON.stringify(content), {encoding: 'utf8'})
    }
  }

  /**
   * 根据关键词，对标题进行模糊查询
   * TODO: 后期可扩展其他查询，如：厂商、描述
   * @param {*} keywords 
   * @returns 
   */
  searchQuickLinkData(keywords: string) {
    let result = []
    const file = path.join(QUICK_LINK_DATA_PATH, 'quickLinkData_default.json')
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