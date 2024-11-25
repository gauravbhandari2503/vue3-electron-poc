const { app, BrowserWindow, ipcMain, nativeTheme, Menu, MenuItem } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 828,
    height: 879,
    icon: path.join(__dirname, '/src/assets/icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
    }
  });

  mainWindow.loadFile(path.join(__dirname, 'dist/index.html'));

  // Send the initial theme to the renderer
  mainWindow.webContents.once('did-finish-load', () => {
    mainWindow.webContents.send('theme-changed', nativeTheme.shouldUseDarkColors ? 'dark' : 'light');
  });

  // Listen for system theme changes
  nativeTheme.on('updated', () => {
    mainWindow.webContents.send('theme-changed', nativeTheme.shouldUseDarkColors ? 'dark' : 'light');
    createAppMenu(); // Update the menu dynamically
  });
}

function createAppMenu() {
  const menu = new Menu();
  menu.append(new MenuItem({
    label: `Toggle ${nativeTheme.themeSource === 'dark' ? 'Light' : 'Dark'} Theme`,
    click: () => {
      nativeTheme.themeSource = nativeTheme.themeSource === 'dark' ? 'light' : 'dark';
      createAppMenu(); // Update the menu when toggling
    }
  }));
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createWindow();
  createAppMenu(); // Initialize the menu

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
