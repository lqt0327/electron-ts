const { platform } = require('process');
const path = require('path');

function detectOperatingSystem(pathString) {
  if (pathString.includes(path.sep)) {
    if (platform === 'win32') {
      return 'Windows';
    } else if (platform === 'darwin') {
      return 'macOS';
    } else if (platform === 'linux') {
      return 'Linux';
    } else {
      return 'Unknown';
    }
  } else {
    return 'Unknown';
  }
}

// 测试路径
const windowsPath = 'C:\\Users\\Username\\Documents\\file.txt';
const macPath = '/Users/username/Documents/file.txt';
const linuxPath = '/home/username/Documents/file.txt';

console.log(detectOperatingSystem(windowsPath)); // 输出: Windows
console.log(detectOperatingSystem(macPath)); // 输出: macOS
console.log(detectOperatingSystem(linuxPath)); // 输出: Linux

console.log(path.basename(macPath), '--', path.win32.dirname(windowsPath), windowsPath.includes(':\\')); // 输出: Unknown