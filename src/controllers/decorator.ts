import { iterationStep } from '../utils/tool';

/**
 * 遍历目录下的 quickLinkData_xxx.json 文件
 */
function QueryAllQuickLinkData() {
  return function decorator(target, name, descriptor) {
    const func = descriptor.value
    if(typeof func === 'function') {
      descriptor.value = function(...args) {
        const filePaths = iterationStep(QUICK_LINK_DATA_PATH)
        for(let pathname of filePaths) {
          if(pathname.match(/quickLinkData_(.)*\.json/)) {
            const callback = func.apply(this, args)
            callback(pathname)
          }
        }
        return
      }
    }
    return descriptor
  }
}

export {
  QueryAllQuickLinkData
}