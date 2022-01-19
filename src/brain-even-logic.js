import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomInteger = () => Math.floor(Math.random() * (25 - 1)) + 1;
const tryAgain = `Let's try again, ${name}!`;
const correct = 'Correct!';
const wrongAnswer = ' is wrong answer ;(. Correct answer was ';
const yesAnswer = 'yes';
const noAnswer = 'no';

const gameEven = () => {
  for (let i = 0; i < 3; i += 1) {
    const number = randomInteger();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const even = number % 2 === 0;
    if (answer === yesAnswer && even === true) console.log(correct);
    if (answer === noAnswer && even === false) console.log(correct);
    if (answer === yesAnswer && even === false) {
      console.log(`'${answer}'${wrongAnswer}'${noAnswer}'.`);
      return console.log(tryAgain);
    }
    if (answer === noAnswer && even === true) {
      console.log(`'${answer}'${wrongAnswer}'${yesAnswer}'.`);
      return console.log(tryAgain);
    }
    if (answer !== yesAnswer && answer !== noAnswer) {
      return console.log(tryAgain);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default gameEven;
