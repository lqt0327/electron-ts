import { app, BrowserWindow, ipcMain, shell } from 'electron';
import path from 'path';
import { showContextMenu } from './option';
import DialogController from './controllers/dialog.controller';
import DataController from './controllers/data.controller';
import FileController from './controllers/file.controller';
import { encodeById, pathJoin, pathBasename } from './utils/tool';
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
  ipcMain.handle('dialog:openFile', async (event ,selfFileType) => {
    const dialog = new DialogController(['multiSelections', 'openDirectory'])
    let fileList = await dialog.formatOpenFileData(selfFileType)
    const file = new FileController()
    file.createQuickLinkMap(fileList.title)
    file.createQuickLinkMap(fileList.time, 'time') 
    return fileList
  })

  ipcMain.handle('dialog:selectImage', async ()=>{
    const dialog = new DialogController(['multiSelections', 'openFile'])
    let file = await dialog.handleFileOpen('image', 'file')
    return file
  })

  ipcMain.handle('dialog:selectFile', async ()=>{
    const dialog = new DialogController(['multiSelections', 'openFile'])
    let file = await dialog.handleFileOpen('all', 'file')
    return file
  })

  ipcMain.handle('dialog:autoWriteListData', async ()=>{
    const dialog = new DialogController(['multiSelections', 'openDirectory'])
    const data = new DataController()
    const { result, status } = await dialog.handleDirOpen()
    // 直接改写data.json 中图片的路径
    if(fse.statSync(path.join(result, '/data.json')).isFile()) {
      const obj = fse.readJSONSync(path.join(result, '/data.json'))
      for(let v of obj) {
        v.img = path.join(result, '/images', path.basename(v.img))
        v.banner = path.join(result, '/images', path.basename(v.banner))
        data.addQuickLinkData(v)
      }
    }
    return {
      status: {
        code: 0
      },
      result,
    }
  })

  ipcMain.handle('action:getQuickLinkData', (event ,sort) => {
    let dir = path.join(QUICK_LINK_DATA_PATH,`./quickLinkData_${sort}.json`)
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

  ipcMain.handle('action:addQuickLinkData', (event, newData)=>{
    // TODO: 需要透出id加密方法到渲染层，在渲染层对newData进行数据处理
    const data = new DataController()
    return data.addQuickLinkData(newData)
  })

  ipcMain.handle('action:searchQuickLinkData', (event, keywords)=>{
    const data = new DataController()
    return data.searchQuickLinkData(keywords)
  })

  ipcMain.handle('action:cancelCollect', (event, id)=>{
    const data = new DataController(id)
    return data.cancelCollect()
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

  /**
   * 打开本地程序or文件
   */
  ipcMain.handle('action:open-app', async (event, link)=>{
    return shell.openPath(link)
  })

  /**
   * 操作：收藏卡片
   */
  ipcMain.handle('action:collect', (event, newData) => {
    const data = new DataController()
    return data.collectQuickLinkData(newData)
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

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
