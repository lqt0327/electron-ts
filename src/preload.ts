import { contextBridge, ipcRenderer } from 'electron'
// import { db } from './database/main'
// import {importDB, exportDB, importInto, peakImportFile} from "dexie-export-import";
import download from 'downloadjs'
// import { JsonStream } from 'dexie-export-import/dist/json-stream';
// import { DexieExportJsonStructure } from 'dexie-export-import/dist/json-structure';

/**
 * 显示鼠标右键菜单
 */
window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  ipcRenderer.send('show-context-menu')
})

window.addEventListener('click', () => {
  ipcRenderer.send('screen-capture')
})

contextBridge.exposeInMainWorld('electronAPI', {

  outputDatabase: () => {
    // exportDB(db, {prettyJson: true}).then(blob=>{
    //   download(blob, "dexie-export.json", "application/json");
    // })
  },

  // importDatabase: (file: Blob | JsonStream<DexieExportJsonStructure>) => {
  //   // return importInto(db, file)
  // },

  createTable: async (tableName: string, schema: string) => {
    const result = await ipcRenderer.invoke('db:find', 'tbName', 'name', tableName)
    if(result.length > 0) {
      console.error('表已存在');
      return false
    }
    return ipcRenderer.invoke('db:createTable', tableName)
  },

  getCollectList: () => ipcRenderer.invoke('db:findAll', 'tb_name'),

  openApp: (link: string) => ipcRenderer.invoke('action:open-app', link),
  getQuickLinkData: async (table: string = 'tb_list', sort: string)=>{
    const data = await ipcRenderer.invoke('db:findAll', table, {sort: {createTime: -1}})
    return {
      status: {
        code: 0,
      },
      result: data
    }
  },
  deleteQuickLinkData: (id: string) => ipcRenderer.invoke('db:deleteOne', id),
  cancelCollect: async (id: string, table: string) => ipcRenderer.invoke('db:cancelCollect', table, id),
  collect: async (id: string, table: string) => ipcRenderer.invoke('db:collect', table, id),
  updateQuickLinkData: async (id: string, newData: string) => {
    const _newData = JSON.parse(newData)
    return ipcRenderer.invoke('db:updateData', id, _newData)
  },
  searchQuickLinkData: async (keywords: string) => {
    const data = await ipcRenderer.invoke('db:find', 'tb_list', 'title_cn', keywords)

    return {
      status: {
        code: 0,
      },
      result: data
    }
  },
  captureImage() {
    
  },
  selectImage: () => ipcRenderer.invoke('dialog:selectImage'),
  selectFile: () => ipcRenderer.invoke('dialog:selectFile'),
  pathBasename: (pathname: string, ext?: string) => ipcRenderer.invoke('tools:pathBasename', pathname, ext),
  encodeById: (id: string) => ipcRenderer.invoke('tools:encodeById', id),
  pathJoin: (...target: string[]) => ipcRenderer.invoke('tools:pathJoin', ...target),
  addQuickLinkData: (newData: string) => {
    const _newData = JSON.parse(newData)
    return ipcRenderer.invoke('db:insertData', _newData)
  },
})