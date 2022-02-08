import randomInteger from '../randomInteger.js';
import game from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestionAndCorrectAnswer = () => {
  const question = randomInteger();
  const correctAnswer = (isEven(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameBrainEven = () => game(rule, getQuestionAndCorrectAnswer);

export default gameBrainEven;
