#!/usr/bin/env node
import readlineSync from 'readline-sync';

const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// const runGamePrime = () => {
console.log('Welcome to the Brain Games!');

const name5 = userName();

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const randomNumber = () => {
  const varDigit1 = Math.floor(Math.random() * 100) + 1;
  return varDigit1;
};

const primeNumDivider = (dig) => {
  let countDivider = 0;
  for (let i = 2; i <= dig; i += 1) {
    if (dig % i === 0) {
      countDivider += 1;
    }
  }
  const isPrime = countDivider < 2 ? 'yes' : 'no';
  return isPrime;
};

let correctAnswers = 0;

while (correctAnswers < 3) {
  const numberGiven = randomNumber();
  const numDivider = primeNumDivider(numberGiven);

  console.log('Question:', numberGiven);

  const userAnswer = readlineSync.question('Your answer: ');

  const yesNo = numDivider === userAnswer;

  if (yesNo) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${numDivider}'.`);
    console.log(`Let's try again, ${name5}`);
    correctAnswers = 0;
  }
}

if (correctAnswers === 3) {
  console.log(`Congratulations, ${name5}!`);
}
// };

// export default runGamePrime;
