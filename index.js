#!/usr/bin/env node

const chalk = require('chalk');
const commander = require('commander');
const create = require('./src/create');

commander
  .version(require('./package.json').version)
  .arguments('<cmd> <name> [path]')
  .action(function (cmd, name, path) {
    switch (cmd) {
      case 'create':
        create(name, path);
        break;
    }
  })
  .option('upgrade', 'upgrade version', function () {
    upgrade();
  })
  .on('--help', function(){
    console.log('');
    console.log('  Examples: <cmd> [projectName] [version]');
    console.log('');
    console.log('    meetyou-backstage create-angular [projectName] [version]  create a angular1.x demo');
    console.log('    meetyou-backstage create-antd [projectName] [version]     create a antd3.x demo');
    console.log('');
  })
  .parse(process.argv);

  // 默认输出帮助
  if (!process.argv.slice(2).length) {
    commander.outputHelp();
  }
