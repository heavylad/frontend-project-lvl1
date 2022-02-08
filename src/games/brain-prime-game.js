import randomInteger from '../randomInteger.js';
import game from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getQuestionAndCorrectAnswer = () => {
  const question = randomInteger();
  const correctAnswer = (isPrime(question)) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const gameBrainPrime = () => game(rule, getQuestionAndCorrectAnswer);

export default gameBrainPrime;
