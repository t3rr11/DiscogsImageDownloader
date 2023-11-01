import { Help, NotYetImplemented } from './helpers/commands';
import Run from './helpers/loop';

require('dotenv').config();

// Watch process and set ENV variables.
process.stdin.resume();
process.stdin.setEncoding('utf8');

// On command in console
process.stdin.on('data', async (text) => {
  let input = text.toString().trim().toUpperCase();

  switch (input) {
    case 'START':
      return Run();
    case 'RETRY':
      return NotYetImplemented();
    case 'HELP':
      return Help();
    default:
      return Help();
  }
});

// App has started
console.log('\x1b[1;35m%s\x1b[0m', `I have started to listen!\nTo Start use: Start, Retry or Help.`);
