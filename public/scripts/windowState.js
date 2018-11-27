const electron = require('electron');
const jetpack = require('fs-jetpack');
const debounce = require('lodash/debounce');

const winState = (name, defaults) => {

	let state = {
		width: defaults.width,
		height: defaults.height,
	};

	const userDataDir = jetpack.cwd(electron.app.getPath('userData'));
  const stateStoreFile = `window-state-${ name }.json`;


	try {
		state = userDataDir.read(stateStoreFile, 'json') || state;
	} catch (err) {
		console.error(`Failed to load "${ name }" window state`);
		console.error(err);
	}

	const saveState = (window) => {
		if (window.isDestroyed()) {
			return;
		}

		state.isMaximized = window.isMaximized();
		state.isMinimized = window.isMinimized();
		state.isHidden = !window.isMinimized() && !window.isVisible();

		if (!state.isMaximized && !state.isHidden) {
			[state.x, state.y] = window.getPosition();
			[state.width, state.height] = window.getSize();
		}

		userDataDir.write(stateStoreFile, state, { atomic: true });
	};

	const isInsideSomeScreen = (states) => electron.screen.getAllDisplays().some(({ bounds }) => (
		states.x >= bounds.x &&
		states.y >= bounds.y &&
		states.x + states.width <= bounds.x + bounds.width &&
		states.y + states.height <= bounds.y + bounds.height
	));

	const loadState = function(window) {
		if (!isInsideSomeScreen(state)) {
			const { bounds } = electron.screen.getPrimaryDisplay();
			state.x = (bounds.width - defaults.width) / 2;
			state.y = (bounds.height - defaults.height) / 2;
			state.width = defaults.width;
			state.height = defaults.height;
		}

		if (this.x !== undefined && this.y !== undefined) {
			window.setPosition(this.x, this.y, false);
		}

		if (this.width !== undefined && this.height !== undefined) {
			window.setSize(this.width, this.height, false);
		}

		this.isMaximized ? window.maximize() : window.unmaximize();
		this.isMinimized ? window.minimize() : window.restore();
		this.isHidden ? window.hide() : window.show();
	};

	return {
		get x() { return state.x && Math.floor(state.x); },
		get y() { return state.y && Math.floor(state.y); },
		get width() { return state.width && Math.floor(state.width); },
		get height() { return state.height && Math.floor(state.height); },
		get isMaximized() { return state.isMaximized; },
		get isMinimized() { return state.isMinimized; },
		get isHidden() { return state.isHidden; },
		saveState: debounce(saveState, 1000),
		loadState,
	};
};

module.exports = { winState };
