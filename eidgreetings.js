#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';

let answer = await inquirer.prompt([{
    name: "userName",
    type: "string",
    message: "What is your name? ",
}]);

// console.log("Eid Mubarak " + answer.userName + ", Wishing you and your family a blessed Eid filled with joy and happiness.");
console.log(chalk.black.bgGreen.underline("Eid Mubarak " + chalk.white.bgYellow.underline.bold(answer.userName) + ", Wishing you and your family a blessed Eid filled with joy and happiness."));

// to run this package write "node eidgreetings.js" in the terminal