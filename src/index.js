import readlineSync from 'readline-sync';
import runGameCalc from '../bin/games/brain-calc.js';
import runGameEven from '../bin/games/brain-even.js';

const gameToChoose = readlineSync.question('Choose a game: 1 - Brain-Even, 2 - Brain-Calc: ');

if (gameToChoose === '1') {
  runGameEven();
} else if (gameToChoose === '2') {
  runGameCalc();
} else {
  console.log('Invalid choice.');
}
