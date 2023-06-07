/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function randomNumber() {
    let numbers = [
      "A",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexNumber = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumber];
  }

  function randomSuit() {
    let suits = ["♦", "♥", "♠", "♣"];
    let indexSuit = Math.floor(Math.random() * suits.length);

    if (suits[indexSuit] === "♦" || suits[indexSuit] === "♥") {
      suits[indexSuit] = `<span style="color: red;">${suits[indexSuit]}</span>`;
    }

    return suits[indexSuit];
  }

  let finalNumber = randomNumber();
  document.querySelector(".number").innerHTML = finalNumber;

  let palos = randomSuit();
  document.querySelector(".card-top").innerHTML = palos;
  document.querySelector(".card-bottom").innerHTML = palos;
};
