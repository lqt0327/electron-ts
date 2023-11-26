import { app, BrowserWindow, ipcMain, shell, globalShortcut } from 'electron';
import { showContextMenu, setApplicationMenu } from './option';
import DialogController from './controllers/dialog.controller';
import DataController from './controllers/data.controller';
import FileController from './controllers/file.controller';
import { encodeById, pathJoin, pathBasename, pathDirname } from './utils/tool';
import Capture from './module/capture/index'
import MyDatabase from './database/db'
import fse from 'fs-extra'
import path from 'path';

const db = new MyDatabase()

const capture = new Capture()

app.setName('llscw')

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 400,
    width: 1000,
    webPreferences: {
      preload: path.join(__dirname, './preload.js'),
      webSecurity: false
    },
  });

  ipcMain.on('show-context-menu', (event) => showContextMenu(event))

  mainWindow.loadFile(path.join(__dirname, 'view/index.html'));

  // Open the DevTools.
  mainWindow.webContents.once('dom-ready', () => {
    mainWindow.webContents.openDevTools();
  });

  setApplicationMenu()

  // globalShortcut.register('Esc', ()=>{
  //   console.log('点击退出')
  // })
};

app.whenReady().then(()=>{

  ipcMain.handle('dialog:selectImage', async ()=>{
    const dialog = new DialogController(['multiSelections', 'openFile'])
    let file = await dialog.handleFileOpen('image', 'file')
    return file
  })

  ipcMain.handle('dialog:selectFile', async (event, type="all")=>{
    const dialog = new DialogController(['multiSelections', 'openFile'])
    let file = await dialog.handleFileOpen(type, 'file')
    return file
  })

  ipcMain.handle('action:getQuickLinkData', (event) => {
    let dir = path.join(QUICK_LINK_DATA_PATH,`./quickLinkData_default.json`)
    const file = new FileController()
    return file.getQuickLinkData(dir)
  })

  ipcMain.handle('action:deleteQuickLinkData', (event, id)=>{
    const data = new DataController(id)
    return data.deleteQuickLinkData()
  })

  ipcMain.handle('action:updateQuickLinkData', (event, id, newData)=>{
    const data = new DataController(id)
    return data.updateQuickLinkData(newData)
  })

  // ipcMain.handle('action:addQuickLinkData', (event, newData)=>{
  //   // TODO: 需要透出id加密方法到渲染层，在渲染层对newData进行数据处理
  //   const data = new DataController()
  //   return data.addQuickLinkData(newData)
  // })

  ipcMain.handle('tools:copy', (event, src, dest)=>{
    if(fse.existsSync(dest)) return
    return fse.copy(src, dest)
  })

  /**
   * 工具：加密，生成唯一id
   */
  ipcMain.handle('tools:encodeById', (event, id)=>{
    return encodeById(id)
  })

  ipcMain.handle('tools:pathJoin', (event, ...target) => {
    return pathJoin(...target)
  })

  ipcMain.handle('tools:pathBasename', (event, pathname, ext?: string)=>{
    return pathBasename(pathname, ext)
  })

  ipcMain.handle('tools:pathDirname', (event, pathname)=>{
    return pathDirname(pathname)
  })


  /**
   * 打开本地程序or文件
   */
  ipcMain.handle('action:open-app', async (event, link)=>{
    return shell.openPath(link)
  })

  ipcMain.handle('action:showItemInFolder', (event, link) => {
    return shell.showItemInFolder(link)
  })

  ipcMain.on('screen-capture', (event, data) => {
    // console.log('niahdlfahslkdf---', os.platform())
    capture.capture()
  })

  ipcMain.handle('db:createTable', (event, tableName)=>{
    return db.createTable(tableName)
  })

  ipcMain.handle('db:find', (event, table, key, value, options: Database.findOptions)=>{
    return db.find(table, key, value, options)
  })

  ipcMain.handle('db:findAll', (event, table, options: Database.findOptions)=>{
    return db.findAll(table, options)
  })

  ipcMain.handle('db:insertOne', (event, table, data)=> {
    return db.insertOne(table, data)
  })

  ipcMain.handle('db:insert', (event, table, data)=> {
    return db.insert(table, data)
  })

  ipcMain.handle('db:insertData', (event, data)=> {
    return db.insertData(data)
  })

  ipcMain.handle('db:updateOne', (event, table, id, rule)=>{
    return db.updateOne(table, id, rule)
  })

  ipcMain.handle('db:updateAll', (event, table, data)=> {
    const newData = JSON.parse(data)
    return db.updateAll(table, newData)
  })

  ipcMain.handle('db:updateData', (event, id, newData)=>{
    return db.updateData(id, newData)
  })

  ipcMain.handle('db:deleteOne', (event, id)=>{
    return db.deleteOne(id)
  })

  ipcMain.handle('db:delete', (event, table, id)=>{
    return db.delete(table, id)
  })

  ipcMain.handle('db:deleteAll', (event, table)=>{
    return db.deleteAll(table)
  })

  ipcMain.handle('db:cancelCollect', async (event, table, id) => {
    return db.cancelCollect(table, id)
  })

  ipcMain.handle('db:collect', (event, table, id)=>{
    return db.collect(table, id)
  })

  ipcMain.on('db:import', (event, filePath)=>{
    return db.import(filePath)
  })

  ipcMain.handle('db:export', (event) => {
    return db.export()
  })

  createWindow()

  app.on('activate', () => {
    // 在 macOS 系统内, 如果没有已开启的应用窗口
    // 点击托盘图标时通常会重新创建一个新窗口
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
