// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// preload.js
const { contextBridge, ipcRenderer } = require('electron')

/**
 * 显示鼠标右键菜单
 */
window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  ipcRenderer.send('show-context-menu')
})

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: (selfFileType: string) => ipcRenderer.invoke('dialog:openFile', selfFileType),
  openEXE: (link: string) => ipcRenderer.send('open-exe', link),
  getQuickLinkData: (sort: string) => ipcRenderer.invoke('getQuickLinkData', sort),
  deleteQuickLinkData: (id: string) => ipcRenderer.invoke('deleteQuickLinkData', id),
  updateQuickLinkData: (id: string, newData: string) => {
    const _newData = JSON.parse(newData)
    return ipcRenderer.invoke('updateQuickLinkData', id, _newData)
  },
  searchQuickLinkData: (keywords: string) => ipcRenderer.invoke('searchQuickLinkData', keywords)
})