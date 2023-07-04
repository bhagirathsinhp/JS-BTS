/*

Starting Project 1

var name = "MAX";
let hobbies;

if (name === "MAX") {
  hobbies = ["Sports", "Cooking"];
  console.log(hobbies);
}

function greet() {
  var age = 30;
  var name = "Manuel";
  console.log(name, age);
}

console.log(name, hobbies);

greet();
*/

// Starting Project - 2 (From Note No. 6.)
/*
function getName() {
  return prompt("Your Name: ", "");
}

function greet() {
  const userName = getName();
  console.log("Hello " + userName);
}

greet();
*/

// Starting Project - 3 ( From Note No. 8.)

const addListenerBtn = document.getElementById("add-listener-btn");
const clickableBtn = document.getElementById("clickable-btn");
const messageInput = document.getElementById("click-message-input");

function printMessage() {
  const value = messageInput.value;
  console.log(value || "Clicked me!");
}

function addListener() {
  clickableBtn.addEventListener("click", printMessage);
}

addListenerBtn.addEventListener("click", addListener);
