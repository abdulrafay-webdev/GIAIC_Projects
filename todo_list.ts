#!/usr/bin/env node

import inquirer, { Answers } from "inquirer";

let todos:string[]=[]
let loop = true

while(loop){
    const answer:{todo:string,confirming:boolean} = await inquirer.prompt([
        {
            name:"todo",
            type:"input",
            message:"please enter todo task"
        },
        {
            name:"confirming",
            type:"confirm",
            message:"do you want to add more",
            default:false
        }
    ])

    const {todo,confirming}=answer
    loop=confirming
    if(todo){
        todos.push(todo)
    }
    else{
        console.log("kindly input valid task");
    }
}

if(todos.length>0){
    console.log("here's youre todo list");
    for(let todo of todos){
        console.log(todo);
    }
}
else{
    "you dont create any todo list"
}