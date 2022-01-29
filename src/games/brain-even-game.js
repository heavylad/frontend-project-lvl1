import randomInteger from '../randomInteger.js';
import game from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndCorrectAnswer = () => {
  const question = randomInteger();
  const isEven = question % 2 === 0;
  const correctAnswer = (isEven) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameBrainEven = () => game(rule, getQuestionAndCorrectAnswer);

export default gameBrainEven;
