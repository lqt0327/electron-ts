import { contextBridge, ipcRenderer } from 'electron'
import { db } from './database/main'
import {importDB, exportDB, importInto, peakImportFile} from "dexie-export-import";
import download from 'downloadjs'
import { JsonStream } from 'dexie-export-import/dist/json-stream';
import { DexieExportJsonStructure } from 'dexie-export-import/dist/json-structure';

/**
 * 显示鼠标右键菜单
 */
window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  ipcRenderer.send('show-context-menu')
})

contextBridge.exposeInMainWorld('electronAPI', {

  outputDatabase: () => {
    exportDB(db, {prettyJson: true}).then(blob=>{
      download(blob, "dexie-export.json", "application/json");
    })
  },

  importDatabase: (file: Blob | JsonStream<DexieExportJsonStructure>) => {
    return importInto(db, file)
  },

  openApp: (link: string) => ipcRenderer.invoke('action:open-app', link),
  getQuickLinkData: async (type: string, sort: string) => {
    await checkPathFormat()

    let data = []
    if(type === 'default') {
      data = await db.tbList.where('').above('').reverse().sortBy('createTime')
    }
    if(type === 'collect') {
      data = await db.tbCollect.where('').above('').reverse().sortBy('createTime')
    }
    return {
      status: {
        code: 0,
      },
      result: data
    }
  },
  deleteQuickLinkData: (id: string) => {
    db.tbList.delete(id);
    return ipcRenderer.invoke('action:deleteQuickLinkData', id)
  },
  cancelCollect: async (id: string) => {
    db.tbCollect.delete(id);
    const data = await db.tbList.where({
      id: id,
    }).first()
    db.tbList.put(Object.assign(data, {collect: 0}));
  },
  collect: async (newData: string) => {
    const _newData = JSON.parse(newData)
    db.tbCollect.add(Object.assign(_newData, {collect: 1}));
    db.tbList.put(Object.assign(_newData, {collect: 1}));
  },
  updateQuickLinkData: async (id: string, newData: string) => {
    const _newData = JSON.parse(newData)
    const img = _newData.img
    const banner = _newData.banner
    _newData.img = await formatPath(img)
    _newData.banner = await formatPath(banner)
    ipcRenderer.invoke('tools:copy', img, _newData.img)
    ipcRenderer.invoke('tools:copy', banner, _newData.banner)
    db.tbList.put(_newData);
    return ipcRenderer.invoke('action:updateQuickLinkData', id, _newData)
  },
  searchQuickLinkData: async (keywords: string) => {
    const data = await db.tbList.filter(data => {
      const regex = new RegExp(keywords, 'i');
      return regex.test(data.title_cn);
    })
    .toArray();
    return {
      status: {
        code: 0,
      },
      result: data
    }
  },
  selectImage: () => ipcRenderer.invoke('dialog:selectImage'),
  selectFile: () => ipcRenderer.invoke('dialog:selectFile'),
  pathBasename: (pathname: string, ext?: string) => ipcRenderer.invoke('tools:pathBasename', pathname, ext),
  encodeById: (id: string) => ipcRenderer.invoke('tools:encodeById', id),
  pathJoin: (...target: string[]) => ipcRenderer.invoke('tools:pathJoin', ...target),
  addQuickLinkData: async (newData: string) => {
    const _newData = JSON.parse(newData)
    const img = _newData.img
    const banner = _newData.banner
    _newData.img = await formatPath(img)
    _newData.banner = await formatPath(banner)
    ipcRenderer.invoke('tools:copy', img, _newData.img)
    ipcRenderer.invoke('tools:copy', banner, _newData.banner)
    db.tbList.add(_newData);
    return 
  },
})

const path = {
  basename: (pathname: string, ext?: string) => ipcRenderer.invoke('tools:pathBasename', pathname, ext),
  dirname: (pathname: string) => ipcRenderer.invoke('tools:pathDirname', pathname),
  join: (...target: string[]) => ipcRenderer.invoke('tools:pathJoin', ...target),
}

/**
 * 检查路径格式
 */
async function checkPathFormat() {
  const count = await db.tbList.count()
  if(count > 0) {
    const item = await db.tbList.where('').above('').first()
    const c = await path.dirname(item.img)
    const o = await path.join(process.env.INIT_CWD, 'electron_assets', 'images')
    if(c !== o) {
      await db.updatePathInAllTables(['img', 'banner'], o)
    }
  }
}

async function formatPath(pathname: string) {
  const c = await path.basename(pathname)
  const o = await path.join(process.env.INIT_CWD, 'electron_assets', 'images', c)
  return o
}