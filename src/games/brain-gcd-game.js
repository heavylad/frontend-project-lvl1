import randomInteger from '../randomInteger.js';
import game from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  let tempA = a;
  let tempB = b;
  while (tempA !== 0 && tempB !== 0) {
    if (tempA > tempB) tempA %= tempB;
    else tempB %= tempA;
  }
  const correctAnswer = tempA + tempB;
  return correctAnswer;
};

const getQuestionAndCorrectAnswer = () => {
  const a = randomInteger();
  const b = randomInteger();
  const question = `${a} ${b}`;
  return [question, String(getGCD(a, b))];
};

const gameBrainGcd = () => game(rule, getQuestionAndCorrectAnswer);

export default gameBrainGcd;
