const path = require('path');
const uirecorder = require('uirecorder');

module.exports = function(filePath, options) {
  const cmdFilename = path.resolve(process.cwd(), filePath);

  console.log('====================================');
  console.log('run record', cmdFilename);
  console.log('====================================');

  uirecorder.start({
    cmdFilename,
    ...options,
  })
}
