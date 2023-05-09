import fs from 'fs';
import path from 'path';
import merge_lodash from 'lodash/merge';
import fse from 'fs-extra'

class FileController {
  constructor() {

  }

  getQuickLinkData(dir: string) {
    try {
      if(!fs.statSync(dir).isFile()) {
        return {
          status: {
            code: 0,
          },
          result: {}
        }
      }
      let fileData = JSON.parse(fs.readFileSync(dir, {encoding: 'utf8'}))
      if(typeof fileData === 'object') {
        return {
          status: {
            code: 0,
          },
          result: fileData
        }
      }else {
        return {
          status: {
            code: 0,
          },
          result: {}
        }
      }
    }catch(err) {
      return {
        status: {
          code: -1,
          message: err
        },
        result: {}
      }
    }
  }
  
  createQuickLinkMap(data: QuickLinkData, sort="default") {
    if(typeof data !== 'object') return false
  
    let dir = path.join(QUICK_LINK_DATA_PATH, `quickLinkData_${sort}.json`)
    let quickLinkData = this.getQuickLinkData(dir).result
    try {
      fs.writeFileSync(dir, JSON.stringify(merge_lodash(quickLinkData, data)), {encoding: 'utf8'})
      return true
    }catch(err) {
      return false
    }
  }

  initQuickLinkDatabase() {
    const list = ['default', 'time', 'collect']
    try {
      for(let v of list) {
        let dir = path.join(QUICK_LINK_DATA_PATH, `quickLinkData_${v}.json`)
        fse.ensureFileSync(dir)
      }
      return true
    }catch(err) {
      console.error('初始化数据存储文件异常: ', err)
      return false
    }
  }
}

export default FileController