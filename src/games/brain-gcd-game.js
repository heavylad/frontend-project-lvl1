import randomInteger from '../randomInteger.js';
import game from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getQuestionAndCorrectAnswer = () => {
  let a = randomInteger();
  let b = randomInteger();
  const question = `${a} ${b}`;
  while (a !== 0 && b !== 0) {
    if (a > b) a %= b;
    else b %= a;
  }
  const correctAnswer = a + b;
  return [question, String(correctAnswer)];
};

const gameBrainGcd = () => game(rule, getQuestionAndCorrectAnswer);

export default gameBrainGcd;
