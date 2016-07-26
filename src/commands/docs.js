
import chalk from 'chalk';
import opn from 'opn';

export default () => {
  console.log(chalk.green('Opening docs...'));
  opn('https://github.com/crocodilejs/crocodile/#readme');
  exit(0);
};
