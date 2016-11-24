const path = require('path')
const glob = require('glob')
const electron = require('electron')

const BrowserWindow = electron.BrowserWindow
const app = electron.app

var mainWindow = null

function initialize () {
  var shouldQuit = makeSingleInstance()
  if (shouldQuit) return app.quit()

  function createWindow () {
    var windowOptions = {
      width: 1080,
      minWidth: 680,
      height: 840,
      title: app.getName()
    }

    mainWindow = new BrowserWindow(windowOptions)
    mainWindow.loadURL(`file://${__dirname}/index.html`)

    // Launch fullscreen with DevTools open, usage: npm run debug
    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', function () {
      mainWindow = null
    })
  }

  app.on('ready', function () {
    createWindow()
  })

  app.on('window-all-closed', function () {

  })

  app.on('activate', function () {
    if (mainWindow === null) {
      createWindow()
    }
  })
}

function makeSingleInstance () {
  if (process.mas) return false

  return app.makeSingleInstance(function () {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}

initialize();