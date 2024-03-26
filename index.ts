#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\n\tNumber-Quest-cli-number-guessing-game\n\t");
const randomNumber = Math.floor(Math.random() * 9 + 1);
const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Pick a number from 1-10 :  ",
  },
]);
if (answer.userGuessedNumber === randomNumber) {
  console.log("congratulations ! you guessed arighr number");
} else {
  console.log("You guessed a wrong number try again ...");
}
