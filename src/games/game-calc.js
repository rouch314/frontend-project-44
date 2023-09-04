import startGameEngine from '../index.js';
import generateRandomNumber from '../random-number.js';

const operators = ['+', '-', '*'];

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`unknown operator: ${operator}`);
  }
};

const generateRoundData = () => {
  const randomIndex = generateRandomNumber(0, (operators.length - 1));
  const operator = operators[randomIndex];

  const randomNumber1 = generateRandomNumber(0, 100);
  const randomNumber2 = generateRandomNumber(0, 100);

  const question = `${randomNumber1} ${operator} ${randomNumber2}`;

  const answer = String(calculate(randomNumber1, randomNumber2, operator));

  return [question, answer];
};
const description = 'What is the result of the expression?';

const runGameCalc = () => {
  startGameEngine(description, generateRoundData);
};

export default runGameCalc;
