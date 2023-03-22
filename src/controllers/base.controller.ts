import { iterationStep } from '../utils/tool';
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
        callback(pathname)
      }
    }
  }
}

export default BaseController