/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */

/* app.js */

/*
  DO NOT FORGET
Edit random.js so getRandomInt(max)
will return a random number from
0 to the value of max (inclusively)

*/
import getRandomInt from './random';
import './style.css';

const farewell = document.querySelector('.farewell');
const suits = ['hearts', 'spades', 'diamonds', 'clubs'];

while (confirm('Would you like to play the game?')) {
  const random = getRandomInt(0, 4);
  console.log(suits[random]);
  let result = prompt(
    'Please enter your guess: hearts, spades, diamonds or clubs'
  );

  result = result.toLocaleLowerCase();

  if (result === suits[random]) {
    alert('Woo-hoo good going you won');
  } else {
    alert(`Sorry but my card was ${suits[random]}`);
  }
}

farewell.innerHTML = '<h1>Thanks for playing!<h1>';
