#!/usr/bin/env node
import readlineSync from 'readline-sync';
// import userName from '../../src/cli.js';

const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// const runGameEven = () => {
console.log('Welcome to the Brain Games!');

const name1 = userName();

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const random = () => {
  const var1 = Math.floor(Math.random() * 100) + 1;
  return var1;
};

const isEven = (number) => number % 2 === 0;

let correctAnswers = 0;

while (correctAnswers < 3) {
  const randomNumber = random();
  console.log('Question: ', randomNumber);
  const yesNo = readlineSync.question('Your answer: ');
  const correct = isEven(randomNumber) ? 'yes' : 'no';
  const isYesNo = yesNo === correct;

  if (isYesNo) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${yesNo}' is a wrong answer ;(. Correct answer was ${correct}. Let's try again, ${name1}!`);
    correctAnswers = 0;
  }
}

if (correctAnswers === 3) {
  console.log(`Congratulations, ${name1}!`);
}
// };

// export default runGameEven;
