const { app, BrowserWindow } = require('electron');
let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }  
  });

  // Load the Google search page
  mainWindow.loadURL('https://www.google.co.in/');

  

  // Emitted when the window is closed  
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

// This function performs the Google search

// Called when Electron has finished initialization
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', function () {
  // On macOS, it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  // On macOS, re-create a window in the app when the dock icon is clicked
  if (mainWindow === null) {
    createWindow();
  }
});

