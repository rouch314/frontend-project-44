import readlineSync from 'readline-sync';
import runGameCalc from '../bin/games/brain-calc.js';
import runGameEven from '../bin/games/brain-even.js';
import runGameGcd from '../bin/games/brain-gcd.js';

const gameToChoose = readlineSync.question('Choose a game: 1 - Brain-Even, 2 - Brain-Calc, 3 - Brain-GCD; ');

if (gameToChoose === '1') {
  runGameEven();
} else if (gameToChoose === '2') {
  runGameCalc();
} else if (gameToChoose === '3') {
  runGameGcd();
} else {
  console.log('Invalid choice =(((');
}
