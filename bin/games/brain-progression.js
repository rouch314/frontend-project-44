#!/usr/bin/env node
import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const runGameProgression = () => {
  console.log('Welcome to the Brain Games!');

  const name4 = userName();

  console.log('What number is missing in the progression?');

  const randomNumber = (min, max) => {
    const varDigit = Math.floor(Math.random() * (max - min)) + min;
    return varDigit;
  };

  const progression = () => {
    const startNum = randomNumber(0, 20);
    const step = randomNumber(1, 10);
    const missing = randomNumber(0, 9);

    const arr1 = [];

    for (let i = 0; i < 10; i += 1) {
      if (i === missing) {
        arr1.push('..');
      } else {
        arr1.push(startNum + i * step);
      }
    }
    const progressionArr = arr1.join(', ');
    const correctAnswer = startNum + step * missing;

    return [progressionArr, correctAnswer];
  };

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const [progressionArr, correctAnswer] = progression();

    console.log('Question: ', progressionArr);

    const userAnswer = readlineSync.question('Your answer: ');
    const YesNo = parseInt(userAnswer, 10) === correctAnswer;

    if (YesNo === true) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name4}!`);

      correctAnswers = 0;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name4}!`);
  }
};

export default runGameProgression;
