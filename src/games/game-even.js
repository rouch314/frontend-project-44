import gameLogic from '../index.js';
import generateRandomNumber from '../randon-number.js';

const isEven = (number) => number % 2 === 0;

const generateRoundData = () => {
  const question = generateRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runGameEven = () => {
  gameLogic(description, generateRoundData);
};

export default runGameEven;
