import startGameEngine from '../index.js';
import randomNumber from '../random-number.js';

const getProgression = (startNum, step, length) => {
  const array = [startNum];

  for (let i = 1; i < length; i += 1) {
    array.push(startNum + (step * i));
  }

  return array;
};

const generateRoundData = () => {
  const startNum = randomNumber(0, 100);
  const step = randomNumber(1, 10);
  const length = 10;
  const progression = getProgression(startNum, step, length);
  const hiddenIndex = randomNumber(0, (progression.length - 1));
  const answer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return [question, answer];
};

const description = 'What number is missing in the progression?';

const runGameProgression = () => {
  startGameEngine(description, generateRoundData);
};

export default runGameProgression;
