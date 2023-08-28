import readlineSync from 'readline-sync';
import userName from './cli.js';

const gameLogic = (description, generateRoundData) => {
  const name = userName();

  console.log(description);

  const countToWin = 3;

  for (let attempt = 0; attempt < countToWin; attempt += 1) {
    const [question, answer] = generateRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is a wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default gameLogic;
// comment
