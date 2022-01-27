import randomInteger from '../randomInteger.js';
import game from '../index.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAnswer = () => {
  const gameQuestion = randomInteger();
  const isEven = gameQuestion % 2 === 0;
  const correctAnswer = (isEven) ? 'yes' : 'no';
  return [gameQuestion, correctAnswer];
};

const gameBrainEven = () => game(gameRule, getQuestionAnswer);

export default gameBrainEven;
