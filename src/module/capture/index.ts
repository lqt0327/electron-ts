import { BrowserWindow, screen, globalShortcut, ipcMain } from 'electron';
import path from 'path'
// import Client from './capture.js'
import { exec } from 'child_process'
const addon = require('./screen_capture.node');

interface OKParams {
  x: number;
  y: number;
  width: number;
  height: number;
}
class Capture {
  wins: BrowserWindow[];
  constructor() {
    this.wins = []
    
    ipcMain.handle('capture-ok', (event, params: OKParams)=>{
      const point = screen.getCursorScreenPoint()
      console.log(point,'??>>>----')
      const d = screen.getDisplayNearestPoint(point)
      console.log(d,'???nnbbbbb')
      const {x, y, width, height} = params
      // Client.SayHello({name: 'WORLD'}, function(err, response) {
      //   console.log('Greeting2:', response.message);
      // });
      console.log(x, y, width, height,'???;;;;---', typeof x)
      // Client.CaptureDesktop({x, y, width, height, target: `${Date.now()}.png`}, function(err, response) {
      //   if(err) console.log(err,'???--')
      //   console.log('Greeting1:', response);
      // });
      const res = addon.captureScreen(x,y,width,height)
      console.log(res,'???;;;;')
      // const p = path.join(CAPTURE_ROOT_PATH, 'demo5')
      // exec(`${p} ${x} ${y} ${width} ${height} ${2}`, function(err, sto) {
      //   console.log(err,'??--', sto)
      // })
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
    }
  }
  close() {
    ipcMain.removeHandler('capture-ok')
    globalShortcut.unregister('Esc')
    for(let win of this.wins) {
      win.close()
    }
    this.wins = []
  }
}

export default Capture