import { app, BrowserWindow, ipcMain, shell } from 'electron';
import path from 'path';
import { showContextMenu } from './option';
import DialogController from './controllers/dialog.controller';
import DataController from './controllers/data.controller';
import FileController from './controllers/file.controller';
import { encodeById } from './utils/tool'

const createWindow = (): void => {
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
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

  ipcMain.handle('getQuickLinkData', (event ,sort) => {
    let dir = path.join(QUICK_LINK_DATA_PATH,`./quickLinkData_${sort}.json`)
    const file = new FileController()
    return file.getQuickLinkData(dir)
  })

  ipcMain.handle('deleteQuickLinkData', (event, id)=>{
    const data = new DataController(id)
    return data.deleteQuickLinkData()
  })

  ipcMain.handle('updateQuickLinkData', (event, id, newData)=>{
    const data = new DataController(id)
    return data.updateQuickLinkData(newData)
  })

  ipcMain.handle('addQuickLinkData', (event, newData)=>{
    // TODO: 需要透出id加密方法到渲染层，在渲染层对newData进行数据处理
    const data = new DataController()
    return data.addQuickLinkData(newData)
  })

  ipcMain.handle('searchQuickLinkData', (event, keywords)=>{
    const data = new DataController()
    return data.searchQuickLinkData(keywords)
  })

  ipcMain.handle('tools:encodeById', (event, id)=>{
    return encodeById(id)
  }) 

  ipcMain.handle('open-app', async (event, link)=>{
    return shell.openPath(link)
  })

  ipcMain.handle('file:getName', (event, pathname)=>path.basename(pathname))

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
