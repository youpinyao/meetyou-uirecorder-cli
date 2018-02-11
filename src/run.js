const path = require('path');
const uirecorder = require('uirecorder');
const execSeries = require('exec-series');

module.exports = function (filePath) {
  const cmdFilename = path.resolve(process.cwd(), filePath);

  console.log('====================================');
  console.log('run test', cmdFilename);
  console.log('====================================');

  execSeries([`./node_modules/.bin/mocha --reporter mochawesome-uirecorder --bail ${cmdFilename}`], (err, stdouts, stderrs) => {
    if (err) {
      throw err;
    }

    if (stdouts && stdouts.forEach) {
      stdouts.forEach(item => {
        if (item) {
          console.log('====================================');
          console.log(item);
          console.log('====================================');
        }
      })
    }

    if (stderrs && stderrs.forEach) {
      stderrs.forEach(item => {
        if (item) {
          console.log('====================================');
          console.log(item);
          console.log('====================================');
        }
      })
    }
  });
}
