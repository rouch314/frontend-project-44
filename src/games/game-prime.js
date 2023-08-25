import gameLogic from '../index.js';
import generateRandomNumber from '../randon-number.js';

const generateRoundData = () => {
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

  const question = generateRandomNumber(1, 100);
  const answer = primeNumDivider(question);
  return [question, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runGamePrime = () => {
  gameLogic(description, generateRoundData);
};

export default runGamePrime;
