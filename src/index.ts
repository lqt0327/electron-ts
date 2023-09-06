import { app, BrowserWindow, ipcMain, shell, contextBridge } from 'electron';
import path from 'path';
import { showContextMenu } from './option';
import DialogController from './controllers/dialog.controller';
import DataController from './controllers/data.controller';
import FileController from './controllers/file.controller';
import { encodeById, pathJoin, pathBasename, pathDirname } from './utils/tool';
import fse from 'fs-extra'

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 800,
    width: 1200,
    webPreferences: {
      preload: path.join(__dirname, './preload.js'),
    },
  });

  ipcMain.on('show-context-menu', (event) => showContextMenu(event))

  mainWindow.loadFile(path.join(__dirname, 'view/index.html'));

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
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
