
import chalk from 'chalk';
import opn from 'opn';

export default () => {
  console.log(chalk.green('Opening issues...'));
  opn('https://github.com/crocodilejs/crocodile/issues');
  exit(0);
};
