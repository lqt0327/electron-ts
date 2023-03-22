import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import child_process from 'child_process'
import { showContextMenu } from './option';
import DialogController from './controllers/dialog.controller';
import DataController from './controllers/data.controller';
import FileController from './controllers/file.controller';
import { startView } from './startView'
const cwd = process.cwd()
// startView()
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = (): void => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });
  

  ipcMain.on('show-context-menu', (event) => showContextMenu(event, mainWindow))

  // and load the index.html of the app.
  
  // mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  // mainWindow.loadURL('http://localhost:8080/');
  mainWindow.loadFile('/Users/luoqintai/Desktop/electron-ts/electron_view_ts/build/index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
// app.on('ready', createWindow);

app.whenReady().then(()=>{
  ipcMain.handle('dialog:openFile', async (event ,selfFileType) => {
    const dialog = new DialogController(['multiSelections', 'openDirectory'])
    let fileList = await dialog.formatOpenFileData(selfFileType)
    console.log(fileList,'??Zzz')
    const file = new FileController()
    file.createQuickLinkMap(fileList.title)
    file.createQuickLinkMap(fileList.time, 'time')
    return fileList
  })

  ipcMain.handle('getQuickLinkData', (event ,sort) => {
    let dir = path.join(__dirname,`./quickLinkData_${sort}.json`)
    console.log(dir,'????ooooo-----=====')
    const file = new FileController()
    return file.getQuickLinkData(dir)
  })

  ipcMain.handle('deleteQuickLinkData', (event, id)=>{
    // TODO: 遍历目录下的 quickLinkData_xxx.json 文件，删除其中对应的数据
    // 传递对应索引，根据索引进行哈希匹配，再对匹配到的数组进行遍历，删除对应数据？？？
    // 存在问题，不适合默认表，默认表会把整个表的数据都遍历一遍，性能不行
    // 异步完成？渲染层先隐藏掉对应数据，后台异步删除对应表中数据？
    // 采用：循环遍历删除对应表中数据方案，删除可以异步进行，
    const data = new DataController(id)
    return data.deleteQuickLinkData()
  })

  ipcMain.handle('updateQuickLinkData', (event, id, newData)=>{
    const data = new DataController(id)
    return data.updateQuickLinkData(newData)
  })

  ipcMain.handle('searchQuickLinkData', (event, keywords)=>{
    const data = new DataController()
    return data.searchQuickLinkData(keywords)
  })

  ipcMain.on('open-exe', async (event, link)=>{
    if (process.platform !== 'win32') return false
    
    child_process.exec(`"${link}"`, (err)=>{
      if(err) {
        console.log('程序启动出错：', err)
      }
    })

    // { ext: 'exe', mime: 'application/x-msdownload' }
    // let list = await handleFileOpen('exe')
    // console.log('你好呀----0000')
    // list.forEach(item=>{
    //   console.log(item, '???<<<<')
    //   /**TODO: 多个exe程序，优先匹配关键词，无法分辨，给出对应程序路径选择弹窗（弹窗应该可以主动唤起） */
    //   if(item.includes('_cn')) {
    //     child_process.exec(`"${item}"`, (err)=>{
    //       if(err) {
    //         console.log(err,'kkkkk')
    //       }
    //     })
    //   }
    // })
  })

  createWindow()

  app.on('activate', () => {
    // 在 macOS 系统内, 如果没有已开启的应用窗口
    // 点击托盘图标时通常会重新创建一个新窗口
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
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
