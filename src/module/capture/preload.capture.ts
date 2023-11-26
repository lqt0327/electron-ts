import { contextBridge, ipcRenderer } from 'electron'


window.addEventListener('click', () => {
  ipcRenderer.invoke('test').then(res=>{
    console.log(res,'???>>><<<')
  })
})