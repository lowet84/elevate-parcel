const { app, BrowserWindow, globalShortcut } = require("electron");
require("electron-reload")(__dirname);
let win;

let fullScreen = false;
function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1200,
    height: 900
  });

  // package.json scripts
  // "electron": "run-p build:electron electron",
  // "build:electron": "parcel watch --public-url ./ --bundle-node-modules src/index.html",
  // "start:electron": "electron electron.js"

  // ==========================================
  // ==                                      ==
  // ==                                      ==
  // ==      This is the important line      ==
  // ==                                      ==
  // ==                                      ==
  // ==========================================
  win.loadFile("dist/index.html"); // <== This one!!!

  win.webContents.openDevTools();
  win.on("closed", () => {
    win = null;
  });

  globalShortcut.register("Alt+Enter", () => {
    fullScreen = !fullScreen;
    win.setFullScreen(fullScreen);
  });
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
