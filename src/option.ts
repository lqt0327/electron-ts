import { Menu, BrowserWindow, MenuItemConstructorOptions, MenuItem, PopupOptions } from 'electron'

/**
 * 鼠标右键菜单栏
 * @param {*} event 
 * {https://www.electronjs.org/zh/docs/latest/api/structures/ipc-main-event
 *  sender 网络会议 - 返回发送消息的 webContents
 * }
 */
function showContextMenu(event: Electron.IpcMainEvent) {
  const template: (MenuItemConstructorOptions | MenuItem)[] = [
    {
      label: '重新加载',
      click: () => {
        event.sender.reload()
      }
    },
    {
      label: '返回',
      click: () => {
        if(event.sender.canGoBack()) {
          event.sender.goBack()
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