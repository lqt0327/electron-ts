import { BrowserWindow, screen, globalShortcut, ipcMain } from 'electron';
import path from 'path'
import Client from './capture.js'

class Capture {
  wins: BrowserWindow[];
  constructor() {
    this.wins = []
    
    ipcMain.handle('test', ()=>{
      const { x, y } = screen.getCursorScreenPoint()
      console.log(x,'??>>>----', y)
      // Client.SayHello({name: 'WORLD'}, function(err, response) {
      //   console.log('Greeting2:', response.message);
      // });
      // Client.SayHelloAgain({x: x, y: y, width: '400', height: '400', target: `${Date.now()}.png`}, function(err, response) {
      //   console.log('Greeting1:', response);
      // });
      return { x, y }
    })
  }
  capture() {
    const displays = screen.getAllDisplays()
    globalShortcut.register('Esc', ()=> {
      console.log('退出截屏')
      this.close()
    })

    console.log(displays,'displays')
    
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
          preload: path.join(CAPTURE_ROOT_PATH, 'preload.capture.js')
        }
      })
      win.loadFile(path.join(CAPTURE_ROOT_PATH, 'capture.html'));
      this.wins.push(win)
      console.log(this.wins,'+++++')
    }
  }
  close() {
    ipcMain.removeHandler('test')
    globalShortcut.unregister('Esc')
    console.log(this.wins,'-----')
    for(let win of this.wins) {
      win.close()
    }
    this.wins = []
  }
}

export default Capture