'use strict';

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};
const displayScore = score => {
  document.querySelector('.score').textContent = score;
};
const generateSecretNumber = () => {
  return Math.trunc(Math.random() * 20) + 1;
};

const bodyBackground = document.querySelector('body').style.backgroundColor;
const numberWidth = document.querySelector('.number').style.width;

let secretNumber = generateSecretNumber();
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  //this function will be called when the click event happens
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
    //When palyer wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    displayNumber(secretNumber);
    bodyBackground = '#60b347';
    numberWidth = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = generateSecretNumber();
  displayMessage('Start guessing...');
  displayScore(score);
  displayNumber('?');
  guessValue = '';
  bodyBackground = '#222';
  dnumberWidth = '15rem';
});
