import gameLogic from '../index.js';
import generateRandomNumber from '../randon-number.js';

const generateRoundData = () => {
  const commonDivisor = (randomNumber1, randomNumber2) => {
    const arrResult1 = [];
    const arrResult2 = [];

    for (let i = 1; i <= randomNumber1; i += 1) {
      if (randomNumber1 % i === 0) {
        arrResult1.push(i);
      }
    }
    for (let j = 1; j <= randomNumber2; j += 1) {
      if (randomNumber2 % j === 0) {
        arrResult2.push(j);
      }
    }

    const findDivisor = (arr1, arr2) => {
      const commonDivisors = arr1.filter((digit) => arr2.includes(digit));

      return Math.max(...commonDivisors);
    };

    return findDivisor(arrResult1, arrResult2);
  };

  const randomNumber1 = generateRandomNumber(1, 100);
  const randomNumber2 = generateRandomNumber(1, 100);
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = String(commonDivisor(randomNumber1, randomNumber2));
  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const runGameGcd = () => {
  gameLogic(description, generateRoundData);
};

export default runGameGcd;
