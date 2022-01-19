import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

const randomInteger = () => Math.floor(Math.random() * (25 - 1)) + 1;
const operations = ['+', '-', '*'];
const tryAgain = `Let's try again, ${name}!`;
const correct = 'Correct!';
const wrongAnswer = ' is wrong answer ;(. Correct answer was ';
let result = '';

const gameCalc = () => {
  for (let i = 0; i < 3; i += 1) {
    const a = randomInteger();
    const b = randomInteger();
    const operation = operations[Math.floor(Math.random() * operations.length)];
    console.log(`Question: ${a} ${operation} ${b}`);
    const answer = readlineSync.question('Your answer: ');
    if (operation === '+') result = a + b;
    if (operation === '-') result = a - b;
    if (operation === '*') result = a * b;
    if (Number(answer) === result) console.log(correct);
    else {
      console.log(`'${answer}'${wrongAnswer}'${result}'`);
      return console.log(tryAgain);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
export default gameCalc;
