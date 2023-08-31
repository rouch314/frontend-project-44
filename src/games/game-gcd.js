import startGameEngine from '../index.js';
import generateRandomNumber from '../random-number.js';

const greatestCommonDivisor = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return greatestCommonDivisor(number2, number1 % number2);
};

const generateRoundData = () => {
  const randomNumber1 = generateRandomNumber(1, 100);
  const randomNumber2 = generateRandomNumber(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(greatestCommonDivisor(randomNumber1, randomNumber2));
  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const runGameGcd = () => {
  startGameEngine(description, generateRoundData);
};

export default runGameGcd;
