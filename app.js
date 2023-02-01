"use strict";

// create a 'div' container for 'submit' button
const bodyDiv = document.createElement("div");
bodyDiv.id = "container";
document.body.appendChild(bodyDiv);

const heading = document.createElement("h1");
heading.textContent = "Please enter a possitive number(1-10):";
heading.classList.add("blue");
bodyDiv.appendChild(heading);

// message
const message = document.createElement("p");
message.id = "message";
document.body.appendChild(message);

// create 'submit' input, guess tries, submit button

const input = document.createElement("input");
input.id = "number";

bodyDiv.appendChild(input);

const submitBtn = document.createElement("button");
submitBtn.id = "Submit";
submitBtn.textContent = "Submit";
bodyDiv.appendChild(submitBtn);

// quess tries
const guessTries = document.createElement("p");
guessTries.innerText = "Tries left: ";
guessTries.id = "tries";
bodyDiv.appendChild(guessTries);

let triesNumber = document.createElement("span");
triesNumber.innerHTML = 3;
triesNumber.className = "triesNumber";
tries.appendChild(triesNumber);

// Submit - click event
submitBtn.addEventListener("click", function () {
  let inputValue = input.value;
  console.log(`Input value is ${inputValue}`);

  // check if inputValue is a finite,possitive numbr
  if (!isFinite(inputValue) || inputValue < 1 || inputValue > 10)
    return alert("Inputs have to be positive, integer numbers(1-10)!");

  // create 'div' container for buttons
  // generate buttons
  const buttonsDiv = document.createElement("div");
  buttonsDiv.id = "buttonsContainer";
  bodyDiv.appendChild(buttonsDiv);

  for (let i = 0; i < inputValue; i++) {
    const button = document.createElement("button");
    button.textContent = `Button ${i + 1}`;
    button.id = i + 1;
    button.className = "special";
    buttonsDiv.appendChild(button);
  }

  // Buttons - click event
  buttonsDiv.addEventListener("click", (event) => {
    // generate random number
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(`Random number is ${randomNumber}`);

    const isButton = event.target.nodeName === "BUTTON";
    if (!isButton) {
      return;
    }
    // console.dir(event.target.id);

    const buttonID = Number(event.target.id);

    // when player wins
    if (randomNumber === buttonID) {
      message.textContent = "You won!";
    }
    // when guess is wrong
    else if (randomNumber != buttonID) {
      if (triesNumber.textContent > 1) {
        message.textContent = "You lost!";
        triesNumber.textContent--;
      } else {
        message.textContent = "Game over";
        triesNumber.textContent = 0;
      }
    }
  });
});
