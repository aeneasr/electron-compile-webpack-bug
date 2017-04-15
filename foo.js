'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('electron');

const app = _require.app,
      BrowserWindow = _require.BrowserWindow;

const path = require('path');
const url = require('url');

console.log(_webpack2.default);

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({ width: 800, height: 600 });

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open the DevTools.
    win.webContents.openDevTools();

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJhcHAiLCJCcm93c2VyV2luZG93IiwicGF0aCIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJ3aW4iLCJjcmVhdGVXaW5kb3ciLCJ3aWR0aCIsImhlaWdodCIsImxvYWRVUkwiLCJmb3JtYXQiLCJwYXRobmFtZSIsImpvaW4iLCJfX2Rpcm5hbWUiLCJwcm90b2NvbCIsInNsYXNoZXMiLCJ3ZWJDb250ZW50cyIsIm9wZW5EZXZUb29scyIsIm9uIiwicHJvY2VzcyIsInBsYXRmb3JtIiwicXVpdCJdLCJtYXBwaW5ncyI6Ijs7QUFJQTs7Ozs7O2VBSjZCQSxRQUFRLFVBQVIsQzs7TUFBdEJDLEcsWUFBQUEsRztNQUFLQyxhLFlBQUFBLGE7O0FBQ1osTUFBTUMsT0FBT0gsUUFBUSxNQUFSLENBQWI7QUFDQSxNQUFNSSxNQUFNSixRQUFRLEtBQVIsQ0FBWjs7QUFJQUssUUFBUUMsR0FBUjs7QUFFQTtBQUNBO0FBQ0EsSUFBSUMsR0FBSjs7QUFFQSxTQUFTQyxZQUFULEdBQXlCO0FBQ3JCO0FBQ0FELFVBQU0sSUFBSUwsYUFBSixDQUFrQixFQUFDTyxPQUFPLEdBQVIsRUFBYUMsUUFBUSxHQUFyQixFQUFsQixDQUFOOztBQUVBO0FBQ0FILFFBQUlJLE9BQUosQ0FBWVAsSUFBSVEsTUFBSixDQUFXO0FBQ25CQyxrQkFBVVYsS0FBS1csSUFBTCxDQUFVQyxTQUFWLEVBQXFCLFlBQXJCLENBRFM7QUFFbkJDLGtCQUFVLE9BRlM7QUFHbkJDLGlCQUFTO0FBSFUsS0FBWCxDQUFaOztBQU1BO0FBQ0FWLFFBQUlXLFdBQUosQ0FBZ0JDLFlBQWhCOztBQUVBO0FBQ0FaLFFBQUlhLEVBQUosQ0FBTyxRQUFQLEVBQWlCLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0FiLGNBQU0sSUFBTjtBQUNILEtBTEQ7QUFNSDs7QUFFRDtBQUNBO0FBQ0E7QUFDQU4sSUFBSW1CLEVBQUosQ0FBTyxPQUFQLEVBQWdCWixZQUFoQjs7QUFFQTtBQUNBUCxJQUFJbUIsRUFBSixDQUFPLG1CQUFQLEVBQTRCLE1BQU07QUFDOUI7QUFDQTtBQUNBLFFBQUlDLFFBQVFDLFFBQVIsS0FBcUIsUUFBekIsRUFBbUM7QUFDbkNyQixZQUFJc0IsSUFBSjtBQUNIO0FBQ0EsQ0FORDs7QUFRQXRCLElBQUltQixFQUFKLENBQU8sVUFBUCxFQUFtQixNQUFNO0FBQ3JCO0FBQ0E7QUFDQSxRQUFJYixRQUFRLElBQVosRUFBa0I7QUFDbEJDO0FBQ0g7QUFDQSxDQU5EOztBQVFBO0FBQ0EiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7YXBwLCBCcm93c2VyV2luZG93fSA9IHJlcXVpcmUoJ2VsZWN0cm9uJylcclxuY29uc3QgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxyXG5jb25zdCB1cmwgPSByZXF1aXJlKCd1cmwnKVxyXG5cclxuaW1wb3J0IHdlYnBhY2sgZnJvbSAnd2VicGFjaydcclxuXHJcbmNvbnNvbGUubG9nKHdlYnBhY2spXHJcblxyXG4vLyBLZWVwIGEgZ2xvYmFsIHJlZmVyZW5jZSBvZiB0aGUgd2luZG93IG9iamVjdCwgaWYgeW91IGRvbid0LCB0aGUgd2luZG93IHdpbGxcclxuLy8gYmUgY2xvc2VkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgSmF2YVNjcmlwdCBvYmplY3QgaXMgZ2FyYmFnZSBjb2xsZWN0ZWQuXHJcbmxldCB3aW5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVdpbmRvdyAoKSB7XHJcbiAgICAvLyBDcmVhdGUgdGhlIGJyb3dzZXIgd2luZG93LlxyXG4gICAgd2luID0gbmV3IEJyb3dzZXJXaW5kb3coe3dpZHRoOiA4MDAsIGhlaWdodDogNjAwfSlcclxuXHJcbiAgICAvLyBhbmQgbG9hZCB0aGUgaW5kZXguaHRtbCBvZiB0aGUgYXBwLlxyXG4gICAgd2luLmxvYWRVUkwodXJsLmZvcm1hdCh7XHJcbiAgICAgICAgcGF0aG5hbWU6IHBhdGguam9pbihfX2Rpcm5hbWUsICdpbmRleC5odG1sJyksXHJcbiAgICAgICAgcHJvdG9jb2w6ICdmaWxlOicsXHJcbiAgICAgICAgc2xhc2hlczogdHJ1ZVxyXG4gICAgfSkpXHJcblxyXG4gICAgLy8gT3BlbiB0aGUgRGV2VG9vbHMuXHJcbiAgICB3aW4ud2ViQ29udGVudHMub3BlbkRldlRvb2xzKClcclxuXHJcbiAgICAvLyBFbWl0dGVkIHdoZW4gdGhlIHdpbmRvdyBpcyBjbG9zZWQuXHJcbiAgICB3aW4ub24oJ2Nsb3NlZCcsICgpID0+IHtcclxuICAgICAgICAvLyBEZXJlZmVyZW5jZSB0aGUgd2luZG93IG9iamVjdCwgdXN1YWxseSB5b3Ugd291bGQgc3RvcmUgd2luZG93c1xyXG4gICAgICAgIC8vIGluIGFuIGFycmF5IGlmIHlvdXIgYXBwIHN1cHBvcnRzIG11bHRpIHdpbmRvd3MsIHRoaXMgaXMgdGhlIHRpbWVcclxuICAgICAgICAvLyB3aGVuIHlvdSBzaG91bGQgZGVsZXRlIHRoZSBjb3JyZXNwb25kaW5nIGVsZW1lbnQuXHJcbiAgICAgICAgd2luID0gbnVsbFxyXG4gICAgfSlcclxufVxyXG5cclxuLy8gVGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgd2hlbiBFbGVjdHJvbiBoYXMgZmluaXNoZWRcclxuLy8gaW5pdGlhbGl6YXRpb24gYW5kIGlzIHJlYWR5IHRvIGNyZWF0ZSBicm93c2VyIHdpbmRvd3MuXHJcbi8vIFNvbWUgQVBJcyBjYW4gb25seSBiZSB1c2VkIGFmdGVyIHRoaXMgZXZlbnQgb2NjdXJzLlxyXG5hcHAub24oJ3JlYWR5JywgY3JlYXRlV2luZG93KVxyXG5cclxuLy8gUXVpdCB3aGVuIGFsbCB3aW5kb3dzIGFyZSBjbG9zZWQuXHJcbmFwcC5vbignd2luZG93LWFsbC1jbG9zZWQnLCAoKSA9PiB7XHJcbiAgICAvLyBPbiBtYWNPUyBpdCBpcyBjb21tb24gZm9yIGFwcGxpY2F0aW9ucyBhbmQgdGhlaXIgbWVudSBiYXJcclxuICAgIC8vIHRvIHN0YXkgYWN0aXZlIHVudGlsIHRoZSB1c2VyIHF1aXRzIGV4cGxpY2l0bHkgd2l0aCBDbWQgKyBRXHJcbiAgICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpIHtcclxuICAgIGFwcC5xdWl0KClcclxufVxyXG59KVxyXG5cclxuYXBwLm9uKCdhY3RpdmF0ZScsICgpID0+IHtcclxuICAgIC8vIE9uIG1hY09TIGl0J3MgY29tbW9uIHRvIHJlLWNyZWF0ZSBhIHdpbmRvdyBpbiB0aGUgYXBwIHdoZW4gdGhlXHJcbiAgICAvLyBkb2NrIGljb24gaXMgY2xpY2tlZCBhbmQgdGhlcmUgYXJlIG5vIG90aGVyIHdpbmRvd3Mgb3Blbi5cclxuICAgIGlmICh3aW4gPT09IG51bGwpIHtcclxuICAgIGNyZWF0ZVdpbmRvdygpXHJcbn1cclxufSlcclxuXHJcbi8vIEluIHRoaXMgZmlsZSB5b3UgY2FuIGluY2x1ZGUgdGhlIHJlc3Qgb2YgeW91ciBhcHAncyBzcGVjaWZpYyBtYWluIHByb2Nlc3NcclxuLy8gY29kZS4gWW91IGNhbiBhbHNvIHB1dCB0aGVtIGluIHNlcGFyYXRlIGZpbGVzIGFuZCByZXF1aXJlIHRoZW0gaGVyZS4iXX0=
