import gameLogic from '../index.js';

const startGame = () => {
  const randomNumber = () => {
    const var1 = Math.floor(Math.random() * 100) + 1;
    return var1;
  };

  const CommonDivisor = (randomNumber1, randomNumber2) => {
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
  const randomNumber1 = randomNumber();
  const randomNumber2 = randomNumber();
  const question = `${randomNumber1}, ${randomNumber2}`;

  const answer = String(CommonDivisor(randomNumber1, randomNumber2));
  return [question, answer];
};

const description = 'Find the greatest common divisor of given numbers.';

const runGameGcd = () => {
  gameLogic(description, startGame);
};

export default runGameGcd;
