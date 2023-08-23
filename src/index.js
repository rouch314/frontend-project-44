import readlineSync from 'readline-sync';
import userName from './cli.js';

const gameLogic = (description, startgame) => {
  const name = userName();

  console.log(description);

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const [question, answer] = startgame();
    console.log(`Question: ${question}`);
    const yesNo = readlineSync.question('Your answer: ');

    const isYesNo = answer === yesNo;

    if (isYesNo) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${yesNo}' is a wrong answer ;(. Correct answer was ${answer}. Let's try again, ${name}!`);
      correctAnswers = 0;
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default gameLogic;
