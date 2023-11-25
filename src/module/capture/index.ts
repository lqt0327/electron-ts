import { BrowserWindow, screen, globalShortcut, ipcMain } from 'electron';
import path from 'path'

class Capture {
  wins: BrowserWindow[];
  constructor() {
    this.wins = []
  }
  capture() {
    const displays = screen.getAllDisplays()
    
    ipcMain.handle('test', ()=>{
      const { x, y } = screen.getCursorScreenPoint()
      console.log(x,'??>>>----', y)
      return { x, y }
    })

    for(let display of displays) {
      let win = new BrowserWindow({
        x: display.bounds.x,
        y: display.bounds.y,
        width: display.bounds.width,
        height: display.bounds.height,
        transparent : true,
        frame: false,
        skipTaskbar: true,
        autoHideMenuBar: true,
        movable: false,
        resizable: false,
        enableLargerThanScreen: true,
        hasShadow: false,
        webPreferences: {
          preload: path.join(CAPTURE_ROOT_PATH, 'preload.js')
        }
      })
      win.loadFile(path.join(CAPTURE_ROOT_PATH, 'capture.html'));
      this.wins.push(win)

      globalShortcut.register('Esc', ()=> {
        console.log('退出截屏')
        this.close()
      })
    }
  }
  close() {
    for(let win of this.wins) {
      win.close()
    }
  }
}

export default Capture