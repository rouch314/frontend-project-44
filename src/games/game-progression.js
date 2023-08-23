import gameLogic from '../index.js';

const startGame = () => {
  const randomNumber = (min, max) => {
    const varDigit = Math.floor(Math.random() * (max - min)) + min;
    return varDigit;
  };
  const progression = () => {
    const startNum = randomNumber(0, 100);
    const step = randomNumber(1, 10);
    const missing = randomNumber(0, 9);

    const arr1 = [];

    for (let i = 0; i < 10; i += 1) {
      if (i === missing) {
        arr1.push('..');
      } else {
        arr1.push(startNum + i * step);
      }
    }
    const progressionArr = arr1.join(' ');
    const correctAnswer = String(startNum + step * missing);

    return [progressionArr, correctAnswer];
  };

  const [question, answer] = progression();
  return [question, answer];
};

const description = 'What number is missing in the progression?';

const runGameProgression = () => {
  gameLogic(description, startGame);
};

export default runGameProgression;
