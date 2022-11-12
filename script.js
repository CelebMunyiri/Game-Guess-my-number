'use strict';
//console.log(document.querySelector(`.message`));
//const array = [9, 5, 3, 4];
//const sorted = array.sort();
//console.log(sorted);
//const reversed = sorted.reverse();
//console.log(reversed);
/*
const tempCalc = function (arr) {
  let str = ``;
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]} degrees Celcius in day ${i + 1}...`;
  }
  console.log(str);
};
const rt = tempCalc(array);
console.log(rt);*/
//const array = ['bananas', 'mangoes', 'apples'];
//const ma = array.sort();
//console.log(ma);
//console.log(document.querySelector('.message').textContent);
//document.querySelector('.message').textContent = 'Correct Number!';
//console.log(document.querySelector('.message').textContent);
//document.querySelector('.number').textContent = 13;
//document.querySelector('.score').textContent = 10;
//console.log(document.querySelector('.guess').value);
//document.querySelector('.guess').textContent = 23;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    //document.querySelector('.message').textContent = 'No Number';
    displayMessage('No number');
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    //document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is greater than secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      //guess > secretNumber ? 'Too High' : 'Too low';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost The game!');
      document.querySelector('.score').textContent = 0;
    }
  } /* else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost with a margin';
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
    score = score - 1;
    document.querySelector('.score').textContent = score;
  }*/
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
