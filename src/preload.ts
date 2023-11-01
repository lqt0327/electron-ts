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

window.addEventListener('click', () => {
  ipcRenderer.send('screen-capture')
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

  createTable: async (tableName: string, schema: string) => {
    const count = await db.tbName.where('name').equals(tableName).count()
    if(count > 0) {
      console.error('表已存在');
      return false
    }
    db.close();
    const version = db.verno
    const key = Date.now() + '_col'
    db.version(version + 1).stores({
      [key]: 'id,title,img,factory,createTime,banner,about,startLink,src,tags,title_cn,collect',
    }).upgrade(() => {
      db.tbName.add({
        name: tableName,
        value: key
      });
    });
    db.open();
    return true
  },

  tableList: async () => {
    return db.tbName.toArray()
  },

  openApp: (link: string) => ipcRenderer.invoke('action:open-app', link),
  getQuickLinkData: async (table: string, sort: string)=>{
    await checkPathFormat(table)

    let data = []
    if(db[table]) {
      data = await db[table].where('').above('').reverse().sortBy('createTime')
    }
    return {
      status: {
        code: 0,
      },
      result: data
    }
  },
  getCollectList: async () => {
    return db.tbName.toArray()
  },
  deleteQuickLinkData: (id: string) => {
    db.tbList.delete(id);
    return ipcRenderer.invoke('action:deleteQuickLinkData', id)
  },
  cancelCollect: async (id: string, table: string) => {
    db[table].delete(id);
    const data = await db.tbList.where({
      id: id,
    }).first()
    if(table === 'tbCollect') {
      db.tbList.put(Object.assign(data, {collect: 0}));
    }else {
      data.custom_col = data.custom_col?.filter((item: string) => item !== table)
      db.tbList.put(data);
    }
  },
  collect: async (newData: string, table: string) => {
    const _newData = JSON.parse(newData)
    if(table === 'tbCollect') {
      db[table].add(Object.assign(_newData, {collect: 1}));
      db.tbList.put(Object.assign(_newData, {collect: 1}));
    }else {
      _newData.custom_col = [_newData.custom_col, table]
      db.tbList.put(_newData);
      db[table].add(_newData);
    }
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
  captureImage() {
    
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
async function checkPathFormat(table: string) {
  const count = await db[table].count()
  if(count > 0) {
    const item = await db[table].where('').above('').first()
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