const electron = require('electron');

const whenReady = electron.app.whenReady || (() => new Promise((resolve) => {
	electron.app.isReady() ? resolve() : electron.app.once('ready', () => resolve());
}));

const whenReadyToShow = (window) => new Promise((resolve) => window.on('ready-to-show', resolve));

module.exports = { whenReady, whenReadyToShow }
