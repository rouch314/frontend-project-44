#!/usr/bin/env node
import readlineSync from 'readline-sync';
// import userName from '../../src/cli.js';

const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// const runGameCalc = () => {
console.log('Welcome to the Brain Games!');

const name2 = userName();

console.log('What is the result of the expression?');

const randomNumber = () => {
  const varDigit1 = Math.floor(Math.random() * 100) + 1;
  return varDigit1;
};
const randomOperator = () => {
  const operators = ['+', '-', '*'];
  const varDigit2 = Math.floor(Math.random() * operators.length);
  return operators[varDigit2];
};

let correctAnswers = 0;

while (correctAnswers < 3) {
  const dig1 = randomNumber();
  const dig2 = randomNumber();
  const oper1 = randomOperator();

  const randomExpression = () => `${dig1} ${oper1} ${dig2}`;
  const expression1 = randomExpression();

  const equationResult = () => {
    let result;
    if (oper1 === '+') {
      result = dig1 + dig2;
    } else if (oper1 === '-') {
      result = dig1 - dig2;
    } else {
      result = dig1 * dig2;
    }
    return result;
  };
  const result1 = equationResult();

  console.log('Question:', expression1);
  const userAnswer = readlineSync.question('Your answer: ');
  const isYesNo = parseInt(userAnswer, 10) === result1;
  if (isYesNo) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result1}.`);
    console.log(`Let's try again, ${name2}!`);
    break;
  }
}
if (correctAnswers === 3) {
  console.log(`Congratulations, ${name2}!`);
}
// };

// export default runGameCalc;
