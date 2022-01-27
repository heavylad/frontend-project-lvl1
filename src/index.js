import readlineSync from 'readline-sync';

const rounds = 3;

const game = (gameRule, getQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameRule);

  for (let i = 0; i < rounds; i += 1) {
    const [gameQuestion, correctAnswer] = getQuestionAnswer();
    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) console.log('Correct!');
    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

export default game;
