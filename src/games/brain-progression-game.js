import randomInteger from '../randomInteger.js';
import game from '../index.js';

const rule = 'What number is missing in the progression?';

const getProgression = (progStart, progStep, progLength) => {
  const prog = [];
  for (let i = progStart; prog.length < progLength; i += progStep) {
    prog.push(i);
  }
  return prog;
};

const getQuestionAndCorrectAnswer = () => {
  const progStart = randomInteger(1, 10);
  const progStep = randomInteger(2, 9);
  const progLength = randomInteger(5, 10);
  const missed = randomInteger(0, progLength);
  const prog = getProgression(progStart, progStep, progLength);
  const correctAnswer = prog[missed];
  prog[missed] = '..';
  const question = prog.join(' ');
  return [question, String(correctAnswer)];
};

const gameBrainProgression = () => game(rule, getQuestionAndCorrectAnswer);

export default gameBrainProgression;
