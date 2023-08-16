#!/usr/bin/env node
import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const runGameGcd = () => {
  console.log('Welcome to the Brain Games!');

  const name3 = userName();

  console.log('Find the greatest common divisor of given numbers.');

  const randomNumber = () => {
    const varDigit1 = Math.floor(Math.random() * 50) + 1;
    return varDigit1;
  };

  const CommonDivisor = (randomNumber1, randomNumber2) => {
    const arrResult1 = [];
    const arrResult2 = [];
    for (let i = 1; i <= randomNumber1; i += 1) {
      if (randomNumber1 % i === 0) {
        arrResult1.push(i);
      }
    }
    for (let j = 1; j <= randomNumber2; j += 1) {
      if (randomNumber2 % j === 0) {
        arrResult2.push(j);
      }
    }
    const findDivisor = (arr1, arr2) => {
      const commonDivisors = arr1.filter((digit) => arr2.includes(digit));
      return Math.max(...commonDivisors);
    };
    return findDivisor(arrResult1, arrResult2);
  };

  let correctAnswers = 0;

  while (correctAnswers < 3) {
    const randomNumber1 = randomNumber();
    const randomNumber2 = randomNumber();

    const greatestCommonDivisor = CommonDivisor(randomNumber1, randomNumber2);
    console.log('!!!!!', greatestCommonDivisor);
    console.log('Question: ', randomNumber1, randomNumber2);

    const userAnswer = readlineSync.question('Your answer: ');

    const yesNo = parseInt(userAnswer, 10) === greatestCommonDivisor;

    if (yesNo) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${parseInt(userAnswer, 10)}' is wrong answer ;(. Correct answer was '${greatestCommonDivisor}'.`);
      console.log(`Let's try again, ${name3}!`);
      correctAnswers = 0;
    }
  }
  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name3}`);
  }
};

export default runGameGcd;
