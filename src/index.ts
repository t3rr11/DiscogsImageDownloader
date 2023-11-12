import { Help, NotYetImplemented } from './helpers/commands';
import { run as Run, runSearch as RunSearch } from './helpers/loop';

require('dotenv').config();

// Watch process and set ENV variables.
process.stdin.resume();
process.stdin.setEncoding('utf8');

// On command in console
process.stdin.on('data', async (text) => {
  let input = text.toString().trim().toUpperCase();

  console.log(input);

  switch (input) {
    case 'START':
      return Run();
    case 'START SEARCH':
      return RunSearch();
    case 'RETRY':
      return NotYetImplemented();
    case 'HELP':
      return Help();
    default:
      return Help();
  }
});

// App has started
console.log('\x1b[1;35m%s\x1b[0m', `I have started to listen!\nTo Start use: Start, Start Search, Retry or Help.`);
