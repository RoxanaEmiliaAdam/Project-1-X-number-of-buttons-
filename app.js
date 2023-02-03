"use strict";

// select elements
const input = document.getElementById("input").value;
console.log(input);

const submitBtn = document.getElementById("submit");

const submitContainer = document.querySelector(".container");
const buttonsContainer = document.querySelector(".buttonsDiv");

let tries = document.querySelector(".triesNumber");
tries.textContent = 3;

// create 'message' p
const message = document.createElement("p");
message.id = "message";
document.body.appendChild(message);

// Submit - click event
submitBtn.addEventListener("click", function () {
  //console.log(`Input value is ${inputValue}`);

  // check if inputValue is a finite,possitive numbr
  //   if (!isFinite(input) || input < 1 || input > 10)
  //     return alert("Inputs have to be positive, integer numbers(1-10)!");

  // generate buttons

  for (let i = 0; i < 4; i++) {
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
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  console.log(`Random number is ${randomNumber}`);

  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }
  console.dir(event.target.id);

  const buttonID = Number(event.target.id);

  // when player wins
  if (randomNumber === buttonID) {
    message.textContent = "You won!";
  }

  // when guess is wrong
  if (randomNumber != buttonID) {
    if (triesNumber > 1) {
      message.textContent = "You lost!";
      triesNumber--;
    } else {
      message.textContent = "Game over";
      //triesNumber = 0;
    }
  }
});
