import { dialog } from 'electron';
import {fileTypeFromFile} from 'file-type';
import { iterationStep, encodeById } from '../utils/tool';
import fs from 'fs';
import fse from 'fs-extra';
import path from 'path'

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
   * @param {string} selfFileType -文件类型  all: 任何文件 ｜ exe ｜ image
   * @returns 
   */
  async #getOneFileMessage(pathname: string, selfFileType: string): Promise<ResponseParam.getOneFileMessage> {
    if(selfFileType === 'all') {
      return {
        status: {
          code: 0
        },
        result: {
          path: pathname,
          fName: path.basename(pathname),
          cTime: fs.statSync(pathname).ctime,
          mTime: fs.statSync(pathname).mtime
        }
      }
    }
    let type = await fileTypeFromFile(pathname)
    if(type?.mime?.includes(selfFileType) || type?.ext === selfFileType) {
      return {
        status: {
          code: 0
        },
        result: {
          path: pathname,
          fName: path.basename(pathname),
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
   * @param {string} selfFileType -文件类型  exe ｜ image
   * @returns 
   */
  async #getMoreFileMessage(pathname: string, selfFileType: string): Promise<ResponseParam.getMoreFileMessage> {
    // TODO: 同一个文件夹下，程序&图片 加载？
    const filePaths = iterationStep(pathname)
    const selfFiles = []

    for(let item of filePaths) {
      let type = await fileTypeFromFile(item)
      if(type?.mime?.includes(selfFileType) || type?.ext === selfFileType) {
        selfFiles.push({
          path: item,
          fName: path.basename(pathname),
          cTime: fs.statSync(item).ctime,
          mTime: fs.statSync(item).mtime,
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

  /**
   * 
   * @param {*} pathname 
   * @param {string} selfFileType -文件类型  exe ｜ image
   * @returns 
   */
  async #getDirMessage(pathname: string): Promise<ResponseParam.getDirMessage> {
    return {
      status: {
        code: 0
      },
      result: pathname
    }
  }

  /**
   * 唤起系统文件选择弹窗
   * @param selfFileType -文件类型
   * @param type -文件or目录 file | dir
   * @returns 
   */
  async handleFileOpen(selfFileType:string, type: string): Promise<ResponseParam.getMoreFileMessage | ResponseParam.getOneFileMessage | ResponseParam.getDirMessage> {
    let { filePaths: dir, canceled } = await dialog.showOpenDialog({ properties: this.properties})
    if(canceled) {
      return {
        status: {
          code: 0,
        },
        result: null
      }
    }
    const pathname = dir[0]
    if(type === 'file') {
      return this.#getOneFileMessage(pathname, selfFileType)
    }else if (type === 'dir') {
      return this.#getMoreFileMessage(pathname, selfFileType)
      // return this.#getDirMessage(pathname, selfFileType)
    }
    return {
      status: {
        code: 0,
      },
      result: null
    }
  }

  /**
   * 唤起系统目录选择弹窗
   * @param selfFileType -文件类型
   * @param type -文件or目录 file | dir
   * @returns 
   */
  async handleDirOpen(): Promise<ResponseParam.getDirMessage> {
    let { filePaths: dir, canceled } = await dialog.showOpenDialog({ properties: this.properties})
    const pathname = dir[0]
    return this.#getDirMessage(pathname)
  }

  /**
   * 有中文拿中文做标题，没中文拿名称
   * 直接拿图片的文件名称做标题，并且在其后面接个随机数，避免相同名称覆盖问题
   * 
   * 在新增写入数据的时候，判断是否有索引重复的文件，有的话就弹窗提示 已存在相同名称文件，是否覆盖？
   * 
   * --默认选择为 目录 & 应用程序
   * @returns 
   */
  async formatOpenFileData(selfFileType:string) {
    const {result: fileList, status} = await this.handleFileOpen(selfFileType, 'dir')
    let map_title: QuickLinkData = {'default': {}},
    map_factory = {},
    map_time: QuickLinkData = {}

    if(!fileList) return { title: map_title, time: map_time }
    
    // TODO: 暂时默认 fileList 为数组类型，一定执行 getMoreFileMessage 函数
    for(let item of fileList as Array<FileMessage>) {
      let key = encodeById(item.fName)
      let time = formatTime(item.cTime).toString()

      const dir = path.dirname(item.path)
      const img = path.join(dir, 'llscw_img.png')
      const banner = path.join(dir, 'llscw_banner.png')

      // TODO: 收藏功能 需要增加字段标识属于哪种分类 可能属于多个分类，需要是数组类型

      map_title.default[key] = {
        id: key,
        title: item.fName,
        img: img,
        factory: '未知',
        createTime: time,
        banner: banner,
        about: '待定',
        startLink: item.path,
        src: '',
        tags: [''],
        title_cn: '',
        collect: 0
      }

      if(map_time[time]) {
        map_time[time][key] = {
          id: key,
          title: item.fName,
          img: img,
          factory: '未知',
          createTime: time,
          banner: banner,
          about: '待定',
          startLink: item.path,
          src: '',
          tags: [''],
          title_cn: '',
          collect: 0
        }
      }else {
        map_time[time] = {
          [key]: {
            id: key,
            title: item.fName,
            img: img,
            factory: '未知',
            createTime: time,
            banner: banner,
            about: '待定',
            startLink: item.path,
            src: '',
            tags: [''],
            title_cn: '',
            collect: 0
          }
        }
      }
    }
    return { title: map_title, time: map_time }
  }
}

export default DialogController