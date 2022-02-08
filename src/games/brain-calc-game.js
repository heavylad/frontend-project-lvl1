import randomInteger from '../randomInteger.js';
import game from '../index.js';

const rule = 'What is the result of the expression?';

const calculate = (a, b, operation) => {
  let correctAnswer;
  if (operation === '+') correctAnswer = a + b;
  if (operation === '-') correctAnswer = a - b;
  if (operation === '*') correctAnswer = a * b;
  return correctAnswer;
};

const getQuestionAndCorrectAnswer = () => {
  const a = randomInteger();
  const b = randomInteger();
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  const question = `${a} ${operation} ${b}`;
  return [question, String(calculate(a, b, operation))];
};

const gameBrainCalc = () => game(rule, getQuestionAndCorrectAnswer);

export default gameBrainCalc;
