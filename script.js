"use strict";
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

//score constant
let currentScore0 = 0;

//rolling a dice
btnRoll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  //display dice roll
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove("hidden");

  if (dice !== 1) {
    currentScore0 += dice;
    current0El.textContent = currentScore0;
  }
});
