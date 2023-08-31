import readlineSync from 'readline-sync';

const startGameEngine = (description, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  const maxRoundCount = 3;

  for (let round = 1; round <= maxRoundCount; round += 1) {
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
export default startGameEngine;
