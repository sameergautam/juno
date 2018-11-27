const electron = require('electron');
const windows = require('./scripts/mainWindow');
const app = electron.app;
const mainWindow = windows.getMainWindow;

app.on('ready', async() => {
  await mainWindow();
});


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
