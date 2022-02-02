import randomInteger from '../randomInteger.js';
import game from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndCorrectAnswer = () => {
  const question = randomInteger();
  const isPrime = () => {
    if (question < 2) return false;
    for (let i = 2; i < question; i += 1) {
      if (question % i === 0) return false;
    }
    return true;
  };
  const correctAnswer = (isPrime()) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameBrainPrime = () => game(rule, getQuestionAndCorrectAnswer);

export default gameBrainPrime;
