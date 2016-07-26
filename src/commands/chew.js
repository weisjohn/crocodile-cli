
import chalk from 'chalk';
import elegantSpinner from 'elegant-spinner';
import logUpdate from 'log-update';
import rimraf from 'rimraf';
import fs from 'fs';

const frame = elegantSpinner();

export default (dir) => {

  if (!which('git')) {
    console.log(chalk.red('You are missing `git` on your system, please install it'));
    exit(1);
  }

  // check if the dir already exists, if it does then fail
  try {
    const exists = fs.statSync(dir);
    if (exists.isDirectory()) {
      console.log(chalk.red(`Directory "${dir}" already exists, please enter a new directory name, or remove this directory and try again`));
      exit(1);
    }
  } catch (err) {
    console.log(chalk.green(`Directory "${dir}" does not exist and is OK, creating it and setting it up`));
  }

  const interval = setInterval(() => {
    logUpdate(`${chalk.cyan.bold.dim(frame())} Setting up the Crocodile boilerplate for your project, one moment`);
  }, 50);

  // TODO: only install the latest released tag

  exec(`git clone --depth=1 --branch=master https://github.com/crocodilejs/crocodile.git ${dir}`, code => {

    clearInterval(interval);

    logUpdate.clear();

    if (code !== 0) {
      console.error(chalk.red.bold('An error occured while cloning the repository from GitHub, please try again or file an issue on GitHub'));
      exit(1);
    }

    rimraf('.git', () => {
      exec('git init', () => {
        console.log(chalk.green.bold('You have successfully created a new Crocodile project, see the docs by typing `crocodile docs` for the next steps!'));
        exit(0);
      });
    });

  });

};
