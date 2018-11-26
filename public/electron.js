const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Tray = electron.Tray;
const Menu = electron.Menu;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;
let tray = null;
const contextMenu = Menu.buildFromTemplate([
  {
    label: 'Hide',
    click: (item) => {
      show_hide_window(item, mainWindow);
    }
  },
  {label: 'Toggle Developer Tools', role: 'toggleDevTools'},
  {label: 'Quit', role: 'quit'}
])

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 680,
    webPreferences: {
      sandbox: true,
      webSecurity: isDev ? false : true
    },
    width: 900
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);

  tray = new Tray(path.join(__dirname, 'sunTemplate.png'));
  tray.setToolTip('Cloud Worker Hub')
  tray.setContextMenu(contextMenu)
  //mainWindow.webContents.openDevTools();
}

function show_hide_window(item) {
  if (mainWindow.isVisible()) {
    mainWindow.hide();
    contextMenu.items[0].label = 'Show'
  } else {
    mainWindow.show();
    contextMenu.items[0].label = 'Hide'
  }  
  tray.setContextMenu(Menu.buildFromTemplate(contextMenu.items));
}

app.on('ready', () => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
