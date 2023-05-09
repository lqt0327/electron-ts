import { contextBridge, ipcRenderer } from 'electron'

/**
 * 显示鼠标右键菜单
 */
window.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  ipcRenderer.send('show-context-menu')
})

contextBridge.exposeInMainWorld('electronAPI', {
  openFile: (selfFileType: string) => ipcRenderer.invoke('dialog:openFile', selfFileType),
  openApp: (link: string) => ipcRenderer.invoke('open-app', link),
  getQuickLinkData: (sort: string) => ipcRenderer.invoke('action:getQuickLinkData', sort),
  deleteQuickLinkData: (id: string) => ipcRenderer.invoke('action:deleteQuickLinkData', id),
  updateQuickLinkData: (id: string, newData: string) => {
    const _newData = JSON.parse(newData)
    return ipcRenderer.invoke('action:updateQuickLinkData', id, _newData)
  },
  collect: (newData: string) => {
    const _newData = JSON.parse(newData)
    return ipcRenderer.invoke('action:collect', _newData)
  },
  searchQuickLinkData: (keywords: string) => ipcRenderer.invoke('action:searchQuickLinkData', keywords),
  selectImage: () => ipcRenderer.invoke('dialog:selectImage'),
  selectFile: () => ipcRenderer.invoke('dialog:selectFile'),
  autoWriteListData: () => ipcRenderer.invoke('dialog:autoWriteListData'),
  pathBasename: (pathname: string, ext?: string) => ipcRenderer.invoke('tools:pathBasename', pathname, ext),
  encodeById: (id: string) => ipcRenderer.invoke('tools:encodeById', id),
  pathJoin: (...target: string[]) => ipcRenderer.invoke('tools:pathJoin', ...target),
  addQuickLinkData: (newData: string) => {
    const _newData = JSON.parse(newData)
    return ipcRenderer.invoke('action:addQuickLinkData', _newData)
  },
})