
import 'shelljs/global';
import program from 'commander';
import importDir from 'import-dir';
import pkg from '../package.json';

const commands = importDir('./commands');

program.version(pkg.version);

program
  .command('chew <dir>')
  .description('Create a new Crocodile project')
  .action(commands.chew);

program
  .command('issues')
  .description('Open GitHub issues for Crocodile')
  .action(commands.issues);

program
  .command('docs')
  .description('Read Crocodile documentation on GitHub')
  .action(commands.docs);

if (process.argv.length <= 2)
  program.outputHelp();
else
	program.parse(process.argv);

