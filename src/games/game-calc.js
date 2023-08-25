import gameLogic from '../index.js';
import generateRandomNumber from '../randon-number.js';

const operators = ['+', '-', '*'];

const equationResult = (dig1, dig2, oper) => {
  switch (oper) {
    case '+':
      return dig1 + dig2;
    case '-':
      return dig1 - dig2;
    case '*':
      return dig1 * dig2;
    default:
      return 'unknown operator!';
  }
};

const generateRoundData = () => {
  const randomOperator = () => {
    const generateRandomOperator = generateRandomNumber(0, 2);
    return operators[generateRandomOperator];
  };

  const digit1 = generateRandomNumber(0, 100);
  const digit2 = generateRandomNumber(0, 100);
  const operator = randomOperator();

  const question = `${digit1} ${operator} ${digit2}`;

  const answer = String(equationResult(digit1, digit2, operator));

  return [question, answer];
};
const description = 'What is the result of the expression?';

const runGameCalc = () => {
  gameLogic(description, generateRoundData);
};

export default runGameCalc;
