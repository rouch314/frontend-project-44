import gameLogic from '../index.js';

const isEven = (number) => number % 2 === 0;

const startgame = () => {
  const randomNumber = () => {
    const var1 = Math.floor(Math.random() * 100) + 1;
    return var1;
  };
  const question = randomNumber();
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runGameEven = () => {
  gameLogic(description, startgame);
};

export default runGameEven;
