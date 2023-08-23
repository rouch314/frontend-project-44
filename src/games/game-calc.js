import gameLogic from '../index.js';
import randomNumber from '../randon-number.js';

const startGame = () => {
  const randomOperator = () => {
    const operators = ['+', '-', '*'];
    const varDigit2 = Math.floor(Math.random() * operators.length);
    return operators[varDigit2];
  };
  const dig1 = randomNumber();
  const dig2 = randomNumber();
  const oper1 = randomOperator();
  const randomExpression = () => `${dig1} ${oper1} ${dig2}`;
  const question = randomExpression();
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
  const answer = String(equationResult());

  return [question, answer];
};
const description = 'What is the result of the expression?';
const runGameCalc = () => {
  gameLogic(description, startGame);
};
export default runGameCalc;
