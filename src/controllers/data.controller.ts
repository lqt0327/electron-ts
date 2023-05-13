import fs from 'fs'
import path from 'path'
import BaseController from './base.controller'
import fse from 'fs-extra'

class DataController extends BaseController {
  #option_data: OptionData = {
    'default': (content, newData) => this.#defaultData(content, newData),
    'time': (content, newData) => this.#timeData(content, newData),
    'collect': (content, newData) => this.#collectData(content, newData)
  }
  
  constructor(private readonly id?: string) { 
    super()
  }

  /**
   * 处理 quickLinkData_default.json 中数据；新增 ｜ 编辑
   * @param content -文件的整体数据
   * @param newData -新数据
   * @returns 
   */
  #defaultData(content: QuickLinkData, newData: QuickLinkDataItem) {
    if(content['default']) {
      content['default'][newData.id] = newData
    }else {
      content['default'] = {[newData.id]: newData}
    }
    return content
  }

  /**
   * 处理 quickLinkData_time.json 中数据；新增 ｜ 编辑
   * @param content -文件的整体数据
   * @param newData -新数据
   * @returns 
   */
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
   * 处理 quickLinkData_collect.json 中数据；新增 ｜ 编辑
   * @param content -文件的整体数据
   * @param newData -新数据
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

  /**
   * 私有方法：新增
   * @param newData -新数据
   * @param pathname -数据存储文件路径
   * @param type -匹配类型
   */
  #create(newData: QuickLinkDataItem, pathname: string, type: string) {
    let content = JSON.parse(fs.readFileSync(pathname,{encoding: 'utf8'}) || '{}')
    const result = this.#option_data[type](content, newData)
    fs.writeFileSync(pathname, JSON.stringify(result), {encoding: 'utf8'})
  }

  /**
   * 私有方法：更新
   * @param newData -新数据
   * @param pathname -数据存储文件路径
   * @param type -匹配类型
   * @returns 
   */
  #update(newData: QuickLinkDataItem, pathname: string, type: string) {
    let content = JSON.parse(fs.readFileSync(pathname,{encoding: 'utf8'}))
    if(type === 'collect') {
      if(!content['default'] || !content['default'][newData.id]) {
        return
      }
    }
    const result = this.#option_data[type](content, newData)
    fs.writeFileSync(pathname, JSON.stringify(result), {encoding: 'utf8'})
  }

  /**
   * 私有方法：删除
   * @param pathname -数据存储文件路径
   * @param id -新数据id
   */
  #delete(pathname: string, id: string) {
    const content = JSON.parse(fs.readFileSync(pathname,{encoding: 'utf8'}))
    let keys = Object.keys(content)
    for(let v of keys) {
      if(content[v][id]) {
        delete content[v][id]
        break;
      }
    }
    fs.writeFileSync(pathname, JSON.stringify(content), {encoding: 'utf8'})
  }

  /**
   * 私有方法：收藏
   * @param newData -新数据
   * @param pathname -数据存储文件路径
   * @param type -匹配类型
   */
  #collect(newData: QuickLinkDataItem, pathname: string, type: string) {
    let content = JSON.parse(fs.readFileSync(pathname,{encoding: 'utf8'}) || '{}')
    const result = this.#option_data[type](content, newData)
    fs.writeFileSync(pathname, JSON.stringify(result), {encoding: 'utf8'})
  }

  /**
   * 公共方法：新增数据
   * @param newData 
   */
  addQuickLinkData(newData: QuickLinkDataItem) {
    this.queryAllQuickLinkData((pathname: string, type: string)=>{
      this.#create(newData, pathname, type)
    })
  }

  /**
   * 公共方法：更新数据
   * @param newData 
   */
  updateQuickLinkData(newData: QuickLinkDataItem) {
    this.queryAllQuickLinkData((pathname: string, type: string)=>{
      this.#update(newData, pathname, type)
    })
  }

  /**
   * 公共方法：收藏
   * @param newData 
   */
  collectQuickLinkData(newData: QuickLinkDataItem) {
    const dir = path.join(QUICK_LINK_DATA_PATH, 'quickLinkData_collect.json')
    fse.ensureFileSync(dir)
    this.#collect(newData, dir, 'collect')
  }

  /**
   * 公共方法：删除
   */
  deleteQuickLinkData() {
    const self = this
    this.queryAllQuickLinkData((pathname: string)=> {
      this.#delete(pathname, self.id)
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