require('dotenv').config();
const webpack = require('webpack');
const fs = require('fs');
const spawn = require('cross-spawn');
const chalk = require('chalk');
const {debounce, killAll} = require('./utils');
const config = require('../webpack.electron.config.js');

const compiler = webpack({...config, mode: 'development'});

async function run() {
  let electron;
  
  console.log('watching for changes...');

  try {
    await webpackCompile();
  } catch(err) {
    console.log(chalk.red('Webpack compilation error'));
  }
  
  electron = spawn('npx', ['electron', '.']);
  electron.stdout.pipe(process.stdout);

  fs.watch('src/electron', {encoding: 'utf-8'}, debounce(async () => {
    console.log('restart due changes...');
    killAll(electron.pid);
    try {
      await webpackCompile();
    } catch(err) {
      console.log(chalk.red('Compilation error'));
      console.log(err);
    }

    electron = spawn('npx', ['electron', '.']);
    electron.stdout.pipe(process.stdout);
  }, 1000));
}

run();

async function webpackCompile() {
  await new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        return reject(err);
      }

      console.log(stats.toString({colors: true, chunks: false}));
      resolve(stats);
    });
  });
}
