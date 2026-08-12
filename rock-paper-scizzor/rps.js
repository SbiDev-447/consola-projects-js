"use strict";

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const options = ["Rock", "Scizzor", "Paper"];

let cpuScore = 0;
let humanScore = 0;

function getCpuChoise() {
  const index = Math.floor(Math.random() * options.length);
  return options[index];
}

async function getHumanChoise() {
  let optionHuman = await rl.question("What you play?: ");
  optionHuman = optionHuman.toLowerCase();
  return optionHuman;
}

function win() {
  if ("Human" == win) {
    humanScore += 5;
  } else if ("Cpu" == win) {
    cpuScore += 5;
  }
}

function playRound(humanChoise, cpuChoise) {
  if (humanChoise == "rock" && cpuChoise == "Scizzor") {
    console.log("You-lose");
    win("Cpu");
  }
}

const humanSelection = await getHumanChoise();
const cpuSelection = getCpuChoise();

playRound(humanSelection, cpuSelection);
