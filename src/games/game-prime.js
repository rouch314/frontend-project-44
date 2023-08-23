import gameLogic from '../index.js';
import randomNumber from '../randon-number.js';

const startGame = () => {
  // const randomNumber = () => {
  // const varDigit1 = Math.floor(Math.random() * 100) + 1;
  // return varDigit1;
  // };

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
  const question = randomNumber();
  const answer = primeNumDivider(question);

  return [question, answer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runGamePrime = () => {
  gameLogic(description, startGame);
};

export default runGamePrime;
