import startGameEngine from '../index.js';
import generateRandomNumber from '../random-number.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRoundData = () => {
  const question = generateRandomNumber(2, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runGamePrime = () => {
  startGameEngine(description, generateRoundData);
};

export default runGamePrime;
