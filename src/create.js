const path = require('path');

module.exports = function(name, outputPath) {
  let filePath = `${name}.js`;

  if(outputPath) {
    filePath = path.resolve(process.cwd(), outputPath, filePath)
  }

  console.log('====================================');
  console.log(filePath);
  console.log('====================================');
}
