import { iterationStep } from '../utils/tool';
import path from 'path';
const cwd = process.cwd()
console.log(cwd,"???????cwd??????----", __dirname)
class BaseController {
  constructor(){
    
  }
  /**
   * 遍历目录下的 quickLinkData_xxx.json 文件
   * @param {*} callback 
   */
  queryAllQuickLinkData(callback: Function) {
    const filePaths = iterationStep(__dirname)
    for(let pathname of filePaths) {
      if(pathname.match(/quickLinkData_(.)*\.json/)) {
        console.log('queryAllQuickLinkData:-----', pathname)
        callback(pathname)
      }
    }
  }
}

export default BaseController