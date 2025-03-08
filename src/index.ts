import {app, BrowserWindow, HeadersReceivedResponse, OnHeadersReceivedListenerDetails, session} from 'electron';

const windowStateKeeper = require('electron-window-state');
const Store = require('electron-store');

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

if (require('electron-squirrel-startup')) {
	app.quit();
}

Store.initRenderer();

const handleHeaderReceived = (
	details: OnHeadersReceivedListenerDetails,
	callback: (headersReceivedResponse: HeadersReceivedResponse) => void
) => {
	callback({
		responseHeaders: {
			...details.responseHeaders,
			"Content-Security-Policy": ["connect-src 'self' * 'unsafe-eval'"],
		},
	});
};

const createWindow = (): void => {
	let mainWindowState = windowStateKeeper({
		defaultWidth: 1000,
		defaultHeight: 800
	});

	const mainWindow = new BrowserWindow({
		height: mainWindowState.height,
		width: mainWindowState.width,
		minWidth: 480,
		x: mainWindowState.x,
		y: mainWindowState.y,
		autoHideMenuBar: true,
		webPreferences: {
			nodeIntegration: true,
			contextIsolation: false
		}
	});

	mainWindowState.manage(mainWindow);

	mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

	mainWindow.webContents.openDevTools();
	session.defaultSession.webRequest.onHeadersReceived(handleHeaderReceived);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
