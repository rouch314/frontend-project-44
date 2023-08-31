import startGameEngine from '../index.js';
import randomNumber from '../random-number.js';

const progression = (startNum, step, length) => {
  const arrayNumbers = [startNum];

  for (let i = 1; i < length; i += 1) {
    arrayNumbers.push(startNum + (step * i));
  }

  return arrayNumbers;
};

const generateRoundData = () => {
  const startNum = randomNumber(0, 100);
  const step = randomNumber(1, 10);
  const getProgression = progression(startNum, step, 10);
  const hiddenIndex = randomNumber(0, getProgression.length);
  const answer = String(getProgression[hiddenIndex]);

  getProgression[hiddenIndex] = '..';

  const question = getProgression.join(' ');
  return [question, answer];
};

const description = 'What number is missing in the progression?';

const runGameProgression = () => {
  startGameEngine(description, generateRoundData);
};

export default runGameProgression;
