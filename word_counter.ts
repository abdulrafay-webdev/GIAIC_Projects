#!/usr/bin/env node


import inquirer from "inquirer";

const answer:{sentence:string} = await inquirer.prompt([
    {
        name:"sentence",
        type:"input",
        message:"enter sentence which you want to count the words"
    }
])

const word = answer.sentence.trim().split(" ")
console.log(`total ${word.length} words in your sentence`);
