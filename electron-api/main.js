// Modules
const { app, BrowserWindow } = require("electron");
const windowStateKeeper = require("electron-window-state");
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let secondaryWindow;

// Create a new BrowserWindow when `app` is ready
function createWindow() {
  let winstate = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 8000
  });
  mainWindow = new BrowserWindow({
    width: winstate.width,
    height: winstate.height,
    x: winstate.x,
    y: winstate.y,
    webPreferences: { nodeIntegration: true }
  });

  winstate.manage(mainWindow);

  secondaryWindow = new BrowserWindow({
    width: 600,
    height: 300,
    parent: mainWindow,
    modal: true,
    frame: true
    // webPreferences: { nodeIntegration: true }
  });
  // Load index.html into the new BrowserWindow
  mainWindow.loadFile("index.html");

  let wc = mainWindow.webContents;

  secondaryWindow.loadFile("secondary.html");
  // Open DevTools - Remove for PRODUCTION!
  //mainWindow.webContents.openDevTools();

  // Listen for window being closed
  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  secondaryWindow.on("closed", () => {
    secondaryWindow = null;
  });
}

// Electron `app` is ready
app.on("ready", createWindow);

// Quit when all windows are closed - (Not macOS - Darwin)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
app.on("activate", () => {
  if (mainWindow === null) createWindow();
});
