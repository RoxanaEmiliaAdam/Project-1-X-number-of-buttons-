"use strict";

// select elements

const submitBtn = document.getElementById("submit");

const submitContainer = document.querySelector(".container");
const buttonsContainer = document.querySelector(".buttonsDiv");

let tries = document.querySelector(".triesNumber");
let remainingTries = 3;
tries.textContent = remainingTries;

// create 'message' p
const message = document.createElement("p");
message.id = "message";
document.body.appendChild(message);

// Submit - click event
submitBtn.addEventListener("click", function () {
  const input = document.getElementById("user-input").value;

  //check if inputValue is a finite,possitive numbr
  if (!isFinite(input) || input < 1 || input > 10)
    return alert("Inputs have to be positive, integer numbers(1-10)!");

  // generate buttons
  for (let i = 0; i < input; i++) {
    const button = document.createElement("button");
    button.textContent = `Button ${i + 1}`;
    button.id = i + 1;
    button.className = "special";
    buttonsContainer.appendChild(button);
  }
});

// Buttons - click event
buttonsContainer.addEventListener("click", (event) => {
  // generate random number

  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  console.dir(event.target.id);
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  console.log(`Random number is ${randomNumber}`);

  const buttonID = Number(event.target.id);

  // when player wins
  if (randomNumber === buttonID) {
    message.textContent = "You won!";
    const buttonsArr = document.querySelectorAll(".special");
    buttonsArr.forEach((button) => (button.disabled = true));
  }

  // when guess is wrong
  if (randomNumber != buttonID) {
    if (remainingTries > 1) {
      message.textContent = "You lost!";
      remainingTries--;
      tries.textContent = remainingTries;
    } else {
      message.textContent = "Game over";
      remainingTries = 0;
      tries.textContent = remainingTries;
    }
  }
});
