import readlineSync from 'readline-sync';
import runGameCalc from '../bin/games/brain-calc.js';
import runGameEven from '../bin/games/brain-even.js';
import runGameGcd from '../bin/games/brain-gcd.js';
import runGameProgression from '../bin/games/brain-progression.js';

const gameToChoose = readlineSync.question('Choose a game: 1 - Brain-Even, 2 - Brain-Calc, 3 - Brain-GCD, 4 - Brain-Progression; ');

if (gameToChoose === '1') {
  runGameEven();
} else if (gameToChoose === '2') {
  runGameCalc();
} else if (gameToChoose === '3') {
  runGameGcd();
} else if (gameToChoose === '4') {
  runGameProgression();
} else {
  console.log('Invalid choice =(((');
}
