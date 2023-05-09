import fs from 'fs'
import path from 'path'
import { QueryAllQuickLinkData } from './decorator'
import BaseController from './base.controller'
import fse from 'fs-extra'

class DataController extends BaseController {
  #option_data: { default: (content: QuickLinkData, newData: QuickLinkDataItem) => QuickLinkData; time: (content: QuickLinkData, newData: QuickLinkDataItem) => QuickLinkData; collect: (content: QuickLinkData, newData: QuickLinkDataItem) => QuickLinkData } = {
    'default': (content, newData) => this.#defaultData(content, newData),
    'time': (content, newData) => this.#timeData(content, newData),
    'collect': (content, newData) => this.#collectData(content, newData)
  }
  
  constructor(private readonly id?: string) { 
    super()
  }

  #defaultData(content: QuickLinkData, newData: QuickLinkDataItem) {
    if(content['default']) {
      content['default'][newData.id] = newData
    }else {
      content['default'] = {[newData.id]: newData}
    }
    return content
  }

  #timeData(content: QuickLinkData, newData: QuickLinkDataItem) {
    let date = newData.createTime
    let year = (new Date(date)).getFullYear()
    if(content[year]) {
      if(content[year][newData.id]) {
        let keys = Object.keys(content)
        for(let v of keys) {
          if(content[v][newData.id]) {
            delete content[v][newData.id]
            break;
          }
        }
        let date = newData.createTime
        let year = (new Date(date)).getFullYear()
        if(content[year]) {
          content[year][newData.id] = newData
        }else {
          content[year] = {[newData.id]: newData}
        }
      }else {
        content[year][newData.id] = newData
      }
    }else {
      content[year] = {
        [newData.id]: newData
      }
    }
    return content
  }

  /**
   * 编辑 新增 操作需要进行区分
   * @param content 
   * @param newData 
   * @returns 
   */
  #collectData(content: QuickLinkData, newData: QuickLinkDataItem) {
    if(content['default']) {
      content['default'][newData.id] = newData
    }else {
      content['default'] = {[newData.id]: newData}
    }
    return content
  }

  #create(newData: QuickLinkDataItem, pathname: string, type: string) {
    let content = JSON.parse(fs.readFileSync(pathname,{encoding: 'utf8'}) || '{}')
    const result = this.#option_data[type](content, newData)
    fs.writeFileSync(pathname, JSON.stringify(result), {encoding: 'utf8'})
  }

  #update(newData: QuickLinkDataItem, pathname: string, type: string) {
    console.log('????----', this.#option_data[type])
    let content = JSON.parse(fs.readFileSync(pathname,{encoding: 'utf8'}))
    if(type === 'collect') {
      if(!content['default'] || !content['default'][newData.id]) {
        return
      }
    }
    const result = this.#option_data[type](content, newData)
    fs.writeFileSync(pathname, JSON.stringify(result), {encoding: 'utf8'})
  }

  #collect(newData: QuickLinkDataItem, pathname: string, type: string) {
    let content = JSON.parse(fs.readFileSync(pathname,{encoding: 'utf8'}) || '{}')
    const result = this.#option_data[type](content, newData)
    fs.writeFileSync(pathname, JSON.stringify(result), {encoding: 'utf8'})
  }

  addQuickLinkData(newData: QuickLinkDataItem) {
    this.queryAllQuickLinkData((pathname: string, type: string)=>{
      this.#create(newData, pathname, type)
    })
  }

  updateQuickLinkData(newData: QuickLinkDataItem) {
    this.queryAllQuickLinkData((pathname: string, type: string)=>{
      this.#update(newData, pathname, type)
    })
  }

  collectQuickLinkData(newData: QuickLinkDataItem) {
    const dir = path.join(QUICK_LINK_DATA_PATH, 'quickLinkData_collect.json')
    fse.ensureFileSync(dir)
    this.#collect(newData, dir, 'collect')
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