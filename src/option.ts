import { Menu, BrowserWindow, MenuItemConstructorOptions, MenuItem, PopupOptions } from 'electron'

/**
 * 鼠标右键菜单栏
 * @param {*} event 
 * @param {*} win 
 */
function showContextMenu(event: Electron.IpcMainEvent, win: BrowserWindow) {
  const template: (MenuItemConstructorOptions | MenuItem)[] = [
    {
      label: '重新加载',
      click: () => {
        win.reload()
      }
    },
    {
      label: '返回',
      click: () => {
        if(win.webContents.canGoBack()) {
          win.webContents.goBack()
        }
      }
    },
    { label: 'Menu Item 2', type: 'checkbox', checked: true }
  ]
  const menu = Menu.buildFromTemplate(template)
  menu.popup(BrowserWindow.fromWebContents(event.sender) as PopupOptions)
}


export {
  showContextMenu
}