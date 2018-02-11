#!/usr/bin/env node

const chalk = require('chalk');
const commander = require('commander');
const init = require('../src/init');
const record = require('../src/record');
const run = require('../src/run');
const server = require('../src/server');

commander
  .version(require('../package.json').version)
  .option('init', 'init test project', function () {
    init();
  })
  .option('init-mobile', 'init test project', function () {
    init({
      mobile: true,
    });
  })
  .option('record <filePath>', 'start a record', function (filePath) {
    record(filePath);
  })
  .option('record-mobile <filePath>', 'start a record', function (filePath) {
    record(filePath, {
      mobile: true,
    });
  })
  .option('server', 'start selenium-standalone server', function () {
    server();
  })
  .option('run <filePath>', 'run a test', function (filePath) {
    run(filePath);
  })
  .option('upgrade', 'upgrade version', function () {
    upgrade();
  })
  .on('--help', function(){

  })
  .parse(process.argv);

  // 默认输出帮助
  if (!process.argv.slice(2).length) {
    commander.outputHelp();
  }
