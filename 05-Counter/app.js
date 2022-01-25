"use strict";
//set initial count
let counter = 0;

// const btnDecrease = document.querySelector(".decrease");
// const btnReset = document.querySelector(".reset");
// const btnIncrease = document.querySelector(".increase");
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      counter--;
    } else if (styles.contains("increase")) {
      counter++;
    } else {
      counter = 0;
    }

    if (counter > 0) {
      value.style.color = "green";
    }
    if (counter < 0) {
      value.style.color = "red";
    }
    if (counter === 0) {
      value.style.color = "#222";
    }

    value.textContent = counter;
  });
});

// console.log(btns);
