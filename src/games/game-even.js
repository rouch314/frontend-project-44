import startGameEngine from '../index.js';
import generateRandomNumber from '../random-number.js';

const isEven = (number) => number % 2 === 0;

const generateRoundData = () => {
  const question = generateRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runGameEven = () => {
  startGameEngine(description, generateRoundData);
};

export default runGameEven;
