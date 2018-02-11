const selenium = require('selenium-standalone');
module.exports = function () {
  selenium.start(function (err, child) {
    if (err) {
      console.log('====================================');
      console.error(err);
      console.log('====================================');
      return;
    }
    child.stderr.on('data', function (data) {
      console.log(data.toString());
    });
  });
}
