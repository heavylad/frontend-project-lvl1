#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
import readlineSync from 'readline-sync';
// import { askNameAndGreet, name } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const randomInteger = () => Math.floor(Math.random() * (25 - 1)) + 1;
const tryAgain = `Let's try again, ${name}!`;
const correct = 'Correct!';
const wrongAnswer = ' is wrong answer ;(. Correct answer was ';

const game = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = randomInteger();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const even = number % 2 === 0;
    if (answer === 'yes' && even === true) console.log(correct);
    if (answer === 'no' && even === false) console.log(correct);
    if (answer === 'yes' && even === false) {
      console.log(`'yes'${wrongAnswer}'no'.`);
      return console.log(tryAgain);
    }
    if (answer === 'no' && even === true) {
      console.log(`'no'${wrongAnswer}'yes'.`);
      return console.log(tryAgain);
    }
    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}'' is wrong answer ;(.`);
      return console.log(tryAgain);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

game();
