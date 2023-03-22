import { dialog } from 'electron';
import {fileTypeFromFile} from 'file-type';
import { iterationStep, encodeByBase64 } from '../utils/tool';
import fs from 'fs';

function formatTime(time: Date) {
  try {
    return (new Date(time)).getFullYear()
  }catch(err) {
    console.log('时间格式化异常：', err)
    return null
  }
}

class DialogController {
  constructor(private readonly properties: Array<any>=['multiSelections', 'openFile', 'openDirectory']) {}

  /**
   * 
   * @param {*} pathname 
   * @param {string} selfFileType -文件类型
   * @returns 
   */
  async #getOneFileMessage(pathname: string, selfFileType: string): Promise<ResponseParam.getOneFileMessage> {
    let type = await fileTypeFromFile(pathname)
    if(type?.mime?.includes(selfFileType) || type?.ext === selfFileType) {
      return {
        status: {
          code: 0
        },
        result: {
          path: pathname,
          cTime: fs.statSync(pathname).ctime,
          mTime: fs.statSync(pathname).mtime
        }
      }
    }else {
      // 提示：请选择正确的文件
      return {
        status: {
          code: -1,
          message: '所选文件类型错误，请重新选择'
        },
        result: null
      }
    }
  }

  /**
   * 
   * @param {*} pathname 
   * @param {string} selfFileType -文件类型
   * @returns 
   */
  async #getMoreFileMessage(pathname: string, selfFileType: string): Promise<ResponseParam.getMoreFileMessage> {
    const filePaths = iterationStep(pathname)
    const selfFiles = []

    console.log(filePaths,'?????你好回家都发')

    for(let item of filePaths) {
      let type = await fileTypeFromFile(item)
      if(type?.mime?.includes(selfFileType) || type?.ext === selfFileType) {
        selfFiles.push({
          path: item,
          cTime: fs.statSync(item).ctime,
          mTime: fs.statSync(item).mtime
        })
      }
    }
    return {
      status: {
        code: 0
      },
      result: selfFiles
    }
  }

  async handleFileOpen(selfFileType:string): Promise<ResponseParam.getMoreFileMessage | ResponseParam.getOneFileMessage> {
    let { filePaths: dir, canceled } = await dialog.showOpenDialog({ properties: this.properties})
    const pathname = dir[0]
    if(pathname && fs.statSync(pathname).isFile()) {
      return this.#getOneFileMessage(pathname, selfFileType)
    }else if (pathname && fs.statSync(pathname).isDirectory()) {
      return this.#getMoreFileMessage(pathname, selfFileType)
    }
    return {
      status: {
        code: 0,
      },
      result: null
    }
  }

  /**
   * 有中文拿中文做标题，没中文拿名称
   * 直接拿图片的文件名称做标题，并且在其后面接个随机数，避免相同名称覆盖问题
   * 
   * 在新增写入数据的时候，判断是否有索引重复的文件，有的话就弹窗提示 已存在相同名称文件，是否覆盖？
   * 
   * --默认选择为 目录
   * @returns 
   */
  async formatOpenFileData(selfFileType:string) {
    const {result: fileList, status} = await this.handleFileOpen(selfFileType)
    let map_title: QuickLinkData = {'default': {}},
    map_factory = {},
    map_time: QuickLinkData = {}

    if(!fileList) return { title: map_title, time: map_time }
    
    // TODO: 暂时默认 fileList 为数组类型，一定执行 getMoreFileMessage 函数
    for(let item of fileList as Array<FileMessage>) {
      let title = ''
      if(process.platform === 'win32') {
        title = item.path.split('\\').pop()
      }
      else if(process.platform === 'darwin') {
        title = item.path.split('/').pop()
      }
      let key = `llscw_${encodeByBase64(title)}`
      let time = formatTime(item.cTime) 

      // TODO: 收藏功能 需要增加字段标识属于哪种分类 可能属于多个分类，需要是数组类型

      map_title.default[key] = {
        id: key,
        title: title,
        img: item.path,
        factory: '测试数据',
        createTime: time,
        banner: item.path,
        about: '测试数据',
        startLink: 'https://www.baidu.com'
      }

      if(map_time[time]) {
        map_time[time][key] = {
          id: key,
          title: title,
          img: item.path,
          factory: '测试数据',
          createTime: time,
          banner: item.path,
          about: '测试数据',
          startLink: 'https://www.baidu.com'
        }
      }else {
        map_time[time] = {
          [key]: {
            id: key,
            title: title,
            img: item.path,
            factory: '测试数据',
            createTime: time,
            banner: item.path,
            about: '测试数据',
            startLink: 'https://www.baidu.com'
          }
        }
      }
    }
    return { title: map_title, time: map_time }
  }
}

export default DialogController