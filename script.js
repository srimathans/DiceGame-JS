'use strict';
const btnRollDice = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');
let current0 = 0;
let current1 = 0;
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let score0 = 0;
let score1 = 0;
let turn = 0;


const dice = document.querySelector('.dice');
dice.classList.add('hidden');


btnRollDice.addEventListener('click', function() {   
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${randomNumber}.png`;
    dice.classList.remove('hidden');
    
    if(randomNumber != 1) {
        switch (turn) {
            case 0:
                current0 = current0 + randomNumber;
                current0El.textContent = current0;
                break;
            case 1:
                current1 = current1 + randomNumber;
                current1El.textContent = current1;
                break;
        }     
    } else {
        switch (turn) {
            case 0:
                current0 = 0;
                current0El.textContent = current0;
                turn = 1;
                break;
            case 1:
                current1 = 0;
                current1El.textContent = current1;
                turn = 0;
                break;
        }    
    }
});


btnHold.addEventListener('click', function() {
    switch (turn) {
        case 0:
            score0 = score0 + current0;
            score0El.textContent = score0;
            current0 = 0;
            current0El.textContent = current0;
            turn = 1;
            break;
        case 1:
            score1 = score1 + current1;
            score1El.textContent = score1;
            current1 = 0;
            current1El.textContent = current1;
            turn = 0;
            break;
    }
});


btnNewGame.addEventListener('click', function() {
    current0 = 0;
    current1 = 0;
    score0 = 0;
    score1 = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    score0El.textContent = 0;
    score1El.textContent = 0;
    dice.classList.add('hidden');
});

