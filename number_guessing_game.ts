#!/usr/bin/env node

import inquirer from "inquirer";

let genratednum:number=Math.floor(Math.random()*10)

const answer:{guessnum:number} =await inquirer.prompt([
    {
        name:"guessnum",
        type:"input",
        message:"guess any number"
    }
])

console.log(`You Guess ${answer.guessnum} , and correct number is ${genratednum}`);

if(answer.guessnum==genratednum){
    console.log("Congrat ! You Choose Choose Correct Number");
}
else{
    console.log("please try again");
}