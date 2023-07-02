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

  initDatabase: async () => {
    const data = await ipcRenderer.invoke('action:getQuickLinkData')
    const list = Object.keys(data.default).map((key) => {
      return data.default[key]
    })
    db.tbList.bulkAdd(list)
  },

  openApp: (link: string) => ipcRenderer.invoke('action:open-app', link),
  getQuickLinkData: async (type: string, sort: string) => {
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
  updateQuickLinkData: (id: string, newData: string) => {
    const _newData = JSON.parse(newData)
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
  autoWriteListData: () => ipcRenderer.invoke('dialog:autoWriteListData'),
  pathBasename: (pathname: string, ext?: string) => ipcRenderer.invoke('tools:pathBasename', pathname, ext),
  encodeById: (id: string) => ipcRenderer.invoke('tools:encodeById', id),
  pathJoin: (...target: string[]) => ipcRenderer.invoke('tools:pathJoin', ...target),
  addQuickLinkData: (newData: string) => {
    const _newData = JSON.parse(newData)
    db.tbList.add(_newData);
    return ipcRenderer.invoke('action:addQuickLinkData', _newData)
  },
})