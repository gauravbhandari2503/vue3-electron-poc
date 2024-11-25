const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  onThemeChange: (callback) => ipcRenderer.on('theme-changed', (event, theme) => callback(theme)),
});